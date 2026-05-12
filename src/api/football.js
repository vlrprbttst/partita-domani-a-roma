const TOKEN = import.meta.env.VITE_FOOTBALL_API_TOKEN

const TEAMS = { roma: 100, lazio: 110 }

const TEAM_STYLES = {
  'as roma':  { name: 'roma',  article: 'la' },
  'ss lazio': { name: 'lazio', article: 'la' },
}

function dateRome(date) {
  return date.toLocaleDateString('sv', { timeZone: 'Europe/Rome' })
}

function normalizeTeam(raw) {
  return TEAM_STYLES[raw.toLowerCase()] ?? { name: raw.toLowerCase(), article: '' }
}

// Dev only: calls the API through the Vite proxy to avoid CORS
async function fetchTeamMatchesDev(teamId, from, to = from) {
  const res = await fetch(
    `/football-api/v4/teams/${teamId}/matches?dateFrom=${from}&dateTo=${to}&venue=HOME`,
    { headers: { 'X-Auth-Token': TOKEN } }
  )
  const remaining = res.headers.get('X-Requests-Available-Minute')
  if (remaining !== null && Number(remaining) < 2) {
    console.warn('football-data: rate limit nearly reached')
  }
  if (!res.ok) return []
  const data = await res.json()
  return (data.matches ?? []).map(m => ({
    date:         dateRome(new Date(m.utcDate)),
    timestamp:    new Date(m.utcDate),
    homeTeam:     normalizeTeam(m.homeTeam.name),
    awayTeamName: m.awayTeam.name,
    competition:  m.competition?.name ?? null,
  }))
}

// Production: reads the pre-fetched static JSON built by scripts/fetch-matches.js
async function fetchStatic() {
  const res = await fetch(`${import.meta.env.BASE_URL}data/matches.json`, { cache: 'no-cache' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function getMatchForDate(date) {
  const dateStr = dateRome(date)

  if (import.meta.env.DEV) {
    const [roma, lazio] = await Promise.all([
      fetchTeamMatchesDev(TEAMS.roma,  dateStr).catch(() => []),
      fetchTeamMatchesDev(TEAMS.lazio, dateStr).catch(() => []),
    ])
    const all = [...roma, ...lazio]
    return all.length > 0 ? all[0] : null
  }

  try {
    const data = await fetchStatic()
    const m    = data[dateStr]
    if (!m) return null
    return { timestamp: new Date(m.timestamp), homeTeam: m.homeTeam, awayTeamName: m.awayTeamName, competition: m.competition ?? null }
  } catch {
    return null
  }
}

export async function getNextMatch() {
  if (import.meta.env.DEV) {
    const afterTomorrow = new Date()
    afterTomorrow.setDate(afterTomorrow.getDate() + 2)
    const future = new Date()
    future.setDate(future.getDate() + 30)
    const from = dateRome(afterTomorrow)
    const to   = dateRome(future)
    const [roma, lazio] = await Promise.all([
      fetchTeamMatchesDev(TEAMS.roma,  from, to).catch(() => []),
      fetchTeamMatchesDev(TEAMS.lazio, from, to).catch(() => []),
    ])
    const all = [...roma, ...lazio].sort((a, b) => a.date.localeCompare(b.date))
    return all[0] ?? null
  }

  try {
    const data = await fetchStatic()
    const m    = data.nextMatch
    if (!m) return null
    return { date: m.date, timestamp: new Date(m.timestamp), homeTeam: m.homeTeam, awayTeamName: m.awayTeamName, competition: m.competition ?? null }
  } catch {
    return null
  }
}
