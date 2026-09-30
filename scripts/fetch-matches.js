// Fetches match data server-side during GitHub Actions build.
// Writes dist/data/matches.json so the browser never calls the API directly.
// The file holds every home match of the next 30 days: the browser picks
// today/tomorrow itself, so the data stays valid between builds (e.g. after midnight).
// On any API error the script exits non-zero: the deploy is skipped and the
// previous matches.json stays online, instead of publishing an empty "No".
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { TEAMS, dateRome, addDays, fetchHomeMatches } from '../src/utils/matches.js'

const BASE_URL = 'https://api.football-data.org/v4'
const TOKEN    = process.env.VITE_FOOTBALL_API_TOKEN

if (!TOKEN) {
  console.error('VITE_FOOTBALL_API_TOKEN missing')
  process.exit(1)
}

const from = dateRome(new Date())
const to   = addDays(from, 30)

console.log(`Fetching matches ${from} → ${to}`)

const [roma, lazio] = await Promise.all([
  fetchHomeMatches(BASE_URL, TOKEN, TEAMS.roma,  from, to),
  fetchHomeMatches(BASE_URL, TOKEN, TEAMS.lazio, from, to),
])

const output = {
  generatedAt: new Date().toISOString(),
  matches:     [...roma, ...lazio].sort((a, b) => a.timestamp.localeCompare(b.timestamp)),
}

const outDir  = process.argv[2] ?? 'public/data'
const outFile = join(outDir, 'matches.json')
mkdirSync(outDir, { recursive: true })
writeFileSync(outFile, JSON.stringify(output, null, 2))
console.log(`Written ${outFile}`)
console.log(JSON.stringify(output, null, 2))
