// Sends Web Push notifications to all subscribers if tomorrow has a Roma/Lazio home match.
// Runs daily at 10:00 UTC (12:00 Rome CEST / 11:00 CET) via notify.yml.
// FORCE_SEND=true bypasses the match check + dedup and emits a generic test notification —
// used by notify.yml's workflow_dispatch input for manual end-to-end verification.
//
// Subscriptions are raw Web Push (not FCM) — see src/api/firebase.js for the rationale.
import webpush from 'web-push'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore }        from 'firebase-admin/firestore'

webpush.setVapidDetails(
  'mailto:omegaiori@gmail.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
)

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
initializeApp({ credential: cert(serviceAccount) })

const db = getFirestore()

const forceSend = process.env.FORCE_SEND === 'true'
const todayMode = process.env.TODAY_MODE === 'true'

function dateRome(date) {
  return date.toLocaleDateString('sv', { timeZone: 'Europe/Rome' })
}

function hasKnownTime(date) {
  return date.getUTCHours() !== 0 || date.getUTCMinutes() !== 0
}

function isDerby(match) {
  const away = (match.awayTeamName ?? '').toLowerCase()
  return away.includes('roma') || away.includes('lazio')
}

async function fetchMatchesJson() {
  const res = await fetch('https://vlrprbttst.github.io/partita-domani-a-roma/data/matches.json')
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

let title, body, dedupRef

if (forceSend) {
  console.log('FORCE_SEND enabled: bypassing match check and dedup')
  title = 'Test Web Push end-to-end'
  body  = 'Se vedi questa notifica, la catena Web Push funziona.'
} else if (todayMode) {
  const today    = new Date()
  const todayStr = dateRome(today)

  let matchesData
  try {
    matchesData = await fetchMatchesJson()
  } catch (err) {
    console.log('Failed to fetch matches.json:', err.message)
    process.exit(0)
  }

  const todayMatch = matchesData[todayStr]
  if (!todayMatch) {
    console.log(`No match today (${todayStr}), skipping`)
    process.exit(0)
  }

  const kickoff = new Date(todayMatch.timestamp)
  if (!hasKnownTime(kickoff)) {
    console.log(`Match on ${todayStr} has TBD kickoff time, skipping`)
    process.exit(0)
  }

  // Check if current time is within ±35min of (kickoff - 4h)
  const target  = new Date(kickoff.getTime() - 4 * 60 * 60 * 1000)
  const diffMin = Math.abs(Date.now() - target.getTime()) / 60000
  if (diffMin > 35) {
    console.log(`${diffMin.toFixed(0)}min from target ${target.toISOString()}, outside 35min window`)
    process.exit(0)
  }

  const dedupKey = `${todayStr}-4h`
  dedupRef = db.collection('sentNotifications').doc(dedupKey)
  const sentDoc = await dedupRef.get()
  if (sentDoc.exists) {
    console.log(`Oggi-4h notification already sent for ${todayStr}`)
    process.exit(0)
  }

  const { homeTeam } = todayMatch
  const kickoffTime = kickoff.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome' })
  title = 'Partita oggi a Roma!'
  if (isDerby(todayMatch)) {
    body = `C'è il derby Roma-Lazio alle ${kickoffTime}. Mancano circa 4 ore!`
  } else {
    const name = homeTeam.name.charAt(0).toUpperCase() + homeTeam.name.slice(1)
    body = `${name} gioca alle ${kickoffTime}. Mancano circa 4 ore!`
  }
} else {
  const tomorrow    = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = dateRome(tomorrow)

  let matchesData
  try {
    matchesData = await fetchMatchesJson()
  } catch (err) {
    console.log('Failed to fetch matches.json:', err.message)
    process.exit(0)
  }

  const tomorrowMatch = matchesData[tomorrowStr]
  if (!tomorrowMatch) {
    console.log(`No match on ${tomorrowStr}, skipping notifications`)
    process.exit(0)
  }

  // Avoid sending more than once per match date
  dedupRef = db.collection('sentNotifications').doc(tomorrowStr)
  const sentDoc = await dedupRef.get()
  if (sentDoc.exists) {
    console.log(`Notification already sent for ${tomorrowStr}`)
    process.exit(0)
  }

  const { homeTeam } = tomorrowMatch
  title = 'Partita domani a Roma!'
  if (isDerby(tomorrowMatch)) {
    body = "C'è il derby Roma-Lazio! Apri l'app per l'orario."
  } else {
    const name = homeTeam.name.charAt(0).toUpperCase() + homeTeam.name.slice(1)
    body = `Gioca ${homeTeam.article} ${name}. Apri l'app per l'orario.`
  }
}

const snap = await db.collection('subscriptions').get()
// Filter for new-format docs (raw Web Push). Old FCM-token-only docs are
// skipped silently — they should be cleaned up manually after the migration.
const subs = snap.docs
  .map(d => ({ id: d.id, ...d.data() }))
  .filter(s => s.endpoint && s.keys?.p256dh && s.keys?.auth)

if (subs.length === 0) {
  console.log('No subscribers (with valid Web Push payload), skipping')
  process.exit(0)
}

const payload = JSON.stringify({ title, body })

const stale = []
for (const sub of subs) {
  try {
    await webpush.sendNotification(
      { endpoint: sub.endpoint, keys: sub.keys },
      payload,
    )
  } catch (err) {
    // 404 Not Found, 410 Gone → subscription has been revoked by the push service
    if (err.statusCode === 404 || err.statusCode === 410) {
      stale.push(sub.id)
    } else {
      console.log(`Push error for ${sub.id}: ${err.statusCode || ''} ${err.body || err.message}`)
    }
  }
}

// Remove stale subscriptions
if (stale.length > 0) {
  for (let i = 0; i < stale.length; i += 30) {
    const batch = db.batch()
    stale.slice(i, i + 30).forEach(id => batch.delete(db.collection('subscriptions').doc(id)))
    await batch.commit()
  }
  console.log(`Removed ${stale.length} stale subscriptions`)
}

if (dedupRef) await dedupRef.set({ sentAt: new Date().toISOString(), recipientCount: subs.length })
console.log(`Sent to ${subs.length} subscribers${forceSend ? ' (FORCE_SEND test)' : ''}`)
