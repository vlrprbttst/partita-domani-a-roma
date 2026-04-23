const TOKEN = import.meta.env.VITE_FOOTBALL_API_TOKEN

const TEAMS = { roma: 100, lazio: 110 }

const TEAM_STYLES = {
  'as roma':   { name: 'roma',      article: 'la' },
  'ss lazio':  { name: 'lazio',     article: 'la' },
  'italrugby': { name: 'italrugby', article: "l'" },
}

function dateRome(date) {
  return date.toLocaleDateString('sv', { timeZone: 'Europe/Rome' })
}

function normalizeTeam(raw) {
  return TEAM_STYLES[raw.toLowerCase()] ?? { name: raw.toLowerCase(), article: '' }
}

// Dev only: calls the API through the Vite proxy to avoid CORS
async function fetchTeamMatchesDev(teamId, dateStr) {
  const res = await fetch(
    `/football-api/v4/teams/${teamId}/matches?dateFrom=${dateStr}&dateTo=${dateStr}&venue=HOME`,
    { headers: { 'X-Auth-Token': TOKEN } }
  )
  const remaining = res.headers.get('X-Requests-Available-Minute')
  if (remaining !== null && Number(remaining) < 2) {
    console.warn('football-data: rate limit nearly reached')
  }
  if (!res.ok) return []
  const data = await res.json()
  return (data.matches ?? []).map(m => ({
    timestamp:    new Date(m.utcDate),
    homeTeam:     normalizeTeam(m.homeTeam.name),
    awayTeamName: m.awayTeam.name,
  }))
}

// Production: reads the pre-fetched static JSON built by scripts/fetch-matches.js
async function fetchMatchFromStatic(dateStr) {
  try {
    const res  = await fetch(`${import.meta.env.BASE_URL}data/matches.json`)
    const data = await res.json()
    const m    = data[dateStr]
    if (!m) return null
    return {
      timestamp:    new Date(m.timestamp),
      homeTeam:     m.homeTeam,
      awayTeamName: m.awayTeamName,
    }
  } catch {
    return null
  }
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

  return fetchMatchFromStatic(dateStr)
}
