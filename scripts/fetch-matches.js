// Fetches match data server-side during GitHub Actions build.
// Writes dist/data/matches.json so the browser never calls the API directly.
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const BASE_URL = 'https://api.football-data.org/v4'
const TOKEN    = process.env.VITE_FOOTBALL_API_TOKEN
const TEAMS    = { roma: 100, lazio: 110 }

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

async function fetchTeamMatches(teamId, from, to) {
  const res = await fetch(
    `${BASE_URL}/teams/${teamId}/matches?dateFrom=${from}&dateTo=${to}&venue=HOME`,
    { headers: { 'X-Auth-Token': TOKEN } }
  )
  if (!res.ok) {
    console.warn(`API ${res.status} for team ${teamId}`)
    return []
  }
  const data = await res.json()
  return (data.matches ?? []).map(m => ({
    date:         dateRome(new Date(m.utcDate)),
    timestamp:    m.utcDate,
    homeTeam:     normalizeTeam(m.homeTeam.name),
    awayTeamName: m.awayTeam.name,
  }))
}

const today    = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const from = dateRome(today)
const to   = dateRome(tomorrow)

console.log(`Fetching matches ${from} → ${to}`)

const [roma, lazio] = await Promise.all([
  fetchTeamMatches(TEAMS.roma,  from, to).catch(() => []),
  fetchTeamMatches(TEAMS.lazio, from, to).catch(() => []),
])

const byDate = {}
for (const match of [...roma, ...lazio]) {
  if (!byDate[match.date]) {
    byDate[match.date] = {
      timestamp:    match.timestamp,
      homeTeam:     match.homeTeam,
      awayTeamName: match.awayTeamName,
    }
  }
}

const outDir  = process.argv[2] ?? 'public/data'
const outFile = join(outDir, 'matches.json')
mkdirSync(outDir, { recursive: true })
writeFileSync(outFile, JSON.stringify(byDate, null, 2))
console.log(`Written ${outFile}`)
console.log(JSON.stringify(byDate, null, 2))
