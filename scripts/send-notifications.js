// Fetches matches from deployed GitHub Pages and sends FCM push notifications if tomorrow has a match.
// Runs daily at 10:00 UTC (12:00 Rome CEST) via notify.yml. Uses Firestore to avoid duplicate sends.
import { initializeApp, cert } from 'firebase-admin/app'
import { getMessaging }        from 'firebase-admin/messaging'
import { getFirestore }        from 'firebase-admin/firestore'

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
initializeApp({ credential: cert(serviceAccount) })

const db        = getFirestore()
const messaging = getMessaging()

function dateRome(date) {
  return date.toLocaleDateString('sv', { timeZone: 'Europe/Rome' })
}

const tomorrow    = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrowStr = dateRome(tomorrow)

let matchesData
try {
  const res = await fetch('https://vlrprbttst.github.io/partita-domani-a-roma/data/matches.json')
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  matchesData = await res.json()
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
const sentRef = db.collection('sentNotifications').doc(tomorrowStr)
const sentDoc = await sentRef.get()
if (sentDoc.exists) {
  console.log(`Notification already sent for ${tomorrowStr}`)
  process.exit(0)
}

const snap   = await db.collection('subscriptions').get()
const tokens = [...new Set(snap.docs.map(d => d.data().token).filter(Boolean))]

if (tokens.length === 0) {
  console.log('No subscribers, skipping')
  process.exit(0)
}

const { homeTeam } = tomorrowMatch
const name = homeTeam.name.charAt(0).toUpperCase() + homeTeam.name.slice(1)

const chunks = []
for (let i = 0; i < tokens.length; i += 500) chunks.push(tokens.slice(i, i + 500))

const stale = []
for (const chunk of chunks) {
  const response = await messaging.sendEachForMulticast({
    tokens: chunk,
    notification: {
      title: 'Partita domani a Roma!',
      body:  `Gioca ${homeTeam.article} ${name}. Apri l'app per l'orario.`,
    },
    webpush: {
      fcmOptions: { link: 'https://vlrprbttst.github.io/partita-domani-a-roma/' },
    },
  })
  response.responses.forEach((r, i) => {
    if (!r.success && r.error?.code === 'messaging/registration-token-not-registered') stale.push(chunk[i])
  })
}

// Remove stale tokens (Firestore 'in' limit: 30 per query)
if (stale.length > 0) {
  for (let i = 0; i < stale.length; i += 30) {
    const staleDocs = await db.collection('subscriptions').where('token', 'in', stale.slice(i, i + 30)).get()
    const batch = db.batch()
    staleDocs.forEach(doc => batch.delete(doc.ref))
    await batch.commit()
  }
  console.log(`Removed ${stale.length} stale tokens`)
}

await sentRef.set({ sentAt: new Date().toISOString(), recipientCount: tokens.length })
console.log(`Sent to ${tokens.length} subscribers for match on ${tomorrowStr}`)
