// Shared between the browser app and scripts/fetch-matches.js (Node) —
// keep it free of Vite/browser-specific APIs.

export const TEAMS = { roma: 100, lazio: 110 }

const TEAM_STYLES = {
  'as roma':  { name: 'roma',  article: 'la' },
  'ss lazio': { name: 'lazio', article: 'la' },
}

// YYYY-MM-DD in Rome time
export function dateRome(date) {
  return date.toLocaleDateString('sv', { timeZone: 'Europe/Rome' })
}

export function addDays(dateStr, days) {
  const d = new Date(`${dateStr}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

export function formatTime(date) {
  return date.toLocaleTimeString('it-IT', {
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome',
  })
}

// football-data.org uses 00:00:00Z when kickoff time is TBD
export function hasKnownTime(date) {
  return date.getUTCHours() !== 0 || date.getUTCMinutes() !== 0
}

export function isDerby(m) {
  if (!m) return false
  const away = (m.awayTeamName || '').toLowerCase()
  return (m.homeTeam?.name === 'roma'  && away.includes('lazio')) ||
         (m.homeTeam?.name === 'lazio' && away.includes('roma'))
}

function normalizeTeam(raw) {
  return TEAM_STYLES[raw.toLowerCase()] ?? { name: raw.toLowerCase(), article: '' }
}

// Home matches of one team between two dates (inclusive). Throws on API errors
// so callers never mistake a failed request for "no match".
export async function fetchHomeMatches(baseUrl, token, teamId, from, to) {
  const res = await fetch(
    `${baseUrl}/teams/${teamId}/matches?dateFrom=${from}&dateTo=${to}&venue=HOME`,
    { headers: { 'X-Auth-Token': token } }
  )
  if (!res.ok) throw new Error(`football-data: HTTP ${res.status} for team ${teamId}`)
  const data = await res.json()
  return (data.matches ?? []).map(m => ({
    date:         dateRome(new Date(m.utcDate)),
    timestamp:    m.utcDate,
    homeTeam:     normalizeTeam(m.homeTeam.name),
    awayTeamName: m.awayTeam.name,
    competition:  m.competition?.name ?? null,
  }))
}

// Picks today / tomorrow / next-after-tomorrow from a list sorted by timestamp.
// Done at read time (not build time) so the answer stays right after midnight.
export function pickMatches(matches, now = new Date()) {
  const today    = dateRome(now)
  const tomorrow = addDays(today, 1)
  return {
    today:    matches.find(m => m.date === today) ?? null,
    tomorrow: matches.find(m => m.date === tomorrow) ?? null,
    next:     matches.find(m => m.date > tomorrow) ?? null,
  }
}
