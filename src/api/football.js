import { TEAMS, dateRome, addDays, fetchHomeMatches, pickMatches } from '../utils/matches.js'

// Dev only: calls the API through the Vite proxy to avoid CORS
async function fetchDev() {
  const token = import.meta.env.VITE_FOOTBALL_API_TOKEN
  const from  = dateRome(new Date())
  const to    = addDays(from, 30)
  const [roma, lazio] = await Promise.all([
    fetchHomeMatches('/football-api/v4', token, TEAMS.roma,  from, to),
    fetchHomeMatches('/football-api/v4', token, TEAMS.lazio, from, to),
  ])
  return [...roma, ...lazio].sort((a, b) => a.timestamp.localeCompare(b.timestamp))
}

// Production: reads the pre-fetched static JSON built by scripts/fetch-matches.js
async function fetchStatic() {
  const res = await fetch(`${import.meta.env.BASE_URL}data/matches.json`, { cache: 'no-cache' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()).matches
}

// Returns { today, tomorrow, next } relative to now (Rome time), timestamps as Date
export async function getMatches() {
  let matches = []
  try {
    matches = await (import.meta.env.DEV ? fetchDev() : fetchStatic())
  } catch (e) {
    console.warn(e)
  }
  return pickMatches(matches.map(m => ({ ...m, timestamp: new Date(m.timestamp) })))
}
