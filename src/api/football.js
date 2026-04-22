const BASE_URL = 'https://api.football-data.org/v4'
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

async function fetchTeamMatches(teamId, dateStr) {
  const res = await fetch(
    `${BASE_URL}/teams/${teamId}/matches?dateFrom=${dateStr}&dateTo=${dateStr}&venue=HOME`,
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

async function fetchStoredMatches(dateStr) {
  try {
    const res = await fetch('/data/fixtures.json')
    const data = await res.json()
    return (data[dateStr] ?? []).map(f => ({
      timestamp:    new Date(f.date),
      homeTeam:     normalizeTeam(f.homeTeamName),
      awayTeamName: f.awayTeamName,
    }))
  } catch {
    return []
  }
}

export async function getMatchForDate(date) {
  const dateStr = dateRome(date)
  const [roma, lazio, stored] = await Promise.all([
    fetchTeamMatches(TEAMS.roma,  dateStr).catch(() => []),
    fetchTeamMatches(TEAMS.lazio, dateStr).catch(() => []),
    fetchStoredMatches(dateStr),
  ])
  const all = [...roma, ...lazio, ...stored]
  return all.length > 0 ? all[0] : null
}
