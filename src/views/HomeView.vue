<script setup>
import { ref, inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getMatchForDate, getNextMatch } from '../api/football.js'
import { trackEvent } from '../utils/analytics.js'
import { usePullToRefresh } from '../composables/usePullToRefresh.js'
import MatchTicket from '../components/MatchTicket.vue'

const props = defineProps({
  dayOffset:       { type: Number,  default: 1 },
  testMode:        { type: String,  default: null },
  preventRedirect: { type: Boolean, default: false },
})

const router = useRouter()
const state = inject('appState')

const match      = ref(null)
const nextMatch  = ref(null)
const background = ref('')
const location   = props.dayOffset === 0 ? 'oggi' : 'domani'

function formatTime(date) {
  return date.toLocaleTimeString('it-IT', {
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome',
  })
}

// football-data.org uses 00:00:00Z when kickoff time is TBD
function hasKnownTime(date) {
  return date.getUTCHours() !== 0 || date.getUTCMinutes() !== 0
}

function isDerby(m) {
  if (!m) return false
  const away = m.awayTeamName.toLowerCase()
  return (m.homeTeam.name === 'roma'  && away.includes('lazio')) ||
         (m.homeTeam.name === 'lazio' && away.includes('roma'))
}

function preloadBackground(hasMatch, derby = false) {
  const url = derby
    ? `${import.meta.env.BASE_URL}images/derby-sfondo.png`
    : `${import.meta.env.BASE_URL}images/${hasMatch ? 'si' : 'no'}-sfondo${Math.floor(Math.random() * 10) + 1}.jpg`
  background.value = url
  return new Promise(resolve => {
    const img = new Image()
    img.onload = img.onerror = resolve
    img.src = url
  })
}

async function load() {
  state.loaded = false
  let redirected = false
  try {
    if (props.testMode === 'si') {
      const ts = new Date()
      match.value = {
        date: ts.toLocaleDateString('sv', { timeZone: 'Europe/Rome' }),
        timestamp: ts,
        homeTeam: { name: 'roma', article: 'la' },
        awayTeamName: 'Test FC',
        competition: 'Serie A',
      }
    } else if (props.testMode === 'si-lazio') {
      const ts = new Date()
      match.value = {
        date: ts.toLocaleDateString('sv', { timeZone: 'Europe/Rome' }),
        timestamp: ts,
        homeTeam: { name: 'lazio', article: 'la' },
        awayTeamName: 'Test FC',
        competition: 'Serie A',
      }
    } else if (props.testMode === 'derby') {
      const ts = new Date()
      match.value = {
        date: ts.toLocaleDateString('sv', { timeZone: 'Europe/Rome' }),
        timestamp: ts,
        homeTeam: { name: 'roma', article: 'la' },
        awayTeamName: 'SS Lazio',
        competition: 'Serie A',
      }
    } else if (props.testMode?.startsWith('next-')) {
      const future = new Date()
      future.setDate(future.getDate() + 10)
      const dateStr = future.toLocaleDateString('sv', { timeZone: 'Europe/Rome' })
      const tbd = props.testMode === 'next-tbd'
      const ts  = new Date(`${dateStr}T${tbd ? '00:00:00' : '18:30:00'}Z`)
      const teams = {
        'next-roma':  { homeTeam: { name: 'roma',  article: 'la' }, awayTeamName: 'Test FC' },
        'next-lazio': { homeTeam: { name: 'lazio', article: 'la' }, awayTeamName: 'Test FC' },
        'next-derby': { homeTeam: { name: 'roma',  article: 'la' }, awayTeamName: 'SS Lazio' },
        'next-tbd':   { homeTeam: { name: 'roma',  article: 'la' }, awayTeamName: 'Test FC' },
      }[props.testMode]
      if (props.dayOffset !== 0) nextMatch.value = { date: dateStr, timestamp: ts, ...teams, competition: 'Serie A' }
    } else if (props.testMode !== 'no') {
      const target = new Date()
      target.setDate(target.getDate() + props.dayOffset)
      match.value = await getMatchForDate(target)
    }
    // If checking domani and it's empty, redirect to oggi — unless user navigated here explicitly
    if (props.dayOffset === 1 && !props.testMode && !match.value && !props.preventRedirect) {
      const todayMatch = await getMatchForDate(new Date())
      if (todayMatch) {
        router.replace('/oggi')
        redirected = true
        return
      }
    }
    if (!match.value && props.testMode === null && props.dayOffset !== 0) {
      // On "domani" page, don't show next match if there's already one today
      const todayMatch = await getMatchForDate(new Date())
      if (!todayMatch) nextMatch.value = await getNextMatch()
    }
    await preloadBackground(!!match.value, isDerby(match.value))
    trackEvent('result_viewed', { result: match.value ? 'si' : 'no', day: location })
  } finally {
    if (!redirected) state.loaded = true
  }
}

const { onTouchStart, onTouchMove, onTouchEnd } = usePullToRefresh({
  state,
  onRefresh: async () => {
    trackEvent('pull_to_refresh')
    await load()
  },
})

const canShare = !!navigator.share

async function share() {
  const text = match.value
    ? `C'è la partita ${location} a Roma! Gioca ${match.value.homeTeam.article} ${match.value.homeTeam.name} alle ${formatTime(match.value.timestamp)}.`
    : `Non c'è la partita ${location} a Roma.`
  trackEvent('share_tapped')
  try {
    await navigator.share({
      title: "C'è la partita a Roma?",
      text,
      url: window.location.href,
    })
    trackEvent('share_completed')
  } catch { /* utente ha annullato */ }
}

onMounted(() => {
  load()
})
</script>

<template>
  <div class="menu-wrap">
    <button
      class="menu"
      :aria-label="state.menuOpen ? 'Chiudi menu' : 'Apri menu'"
      :aria-expanded="state.menuOpen.toString()"
      aria-controls="main-menu"
      @click="state.menuOpen = !state.menuOpen; trackEvent('menu_opened')"
    ></button>
    <span class="menu-label">menu</span>
  </div>
  <div class="controls-wrap">
    <div v-if="canShare" class="share-wrap">
      <button class="share-btn" @click="share" aria-label="Condividi questa pagina">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16 6 12 2 8 6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      </button>
      <span class="share-label">condividi</span>
    </div>
  </div>

  <main
    class="cont-inner"
    :class="{ menu_opened: state.menuOpen }"
    :style="{ backgroundImage: `url(${background})` }"
    @touchstart.passive="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend.passive="onTouchEnd"
  >
    <div class="center" aria-live="polite" aria-atomic="true">
      <h1>C'è la partita<br>{{ location }} a Roma?</h1>
      <h2>{{ match ? 'SI' : 'No' }}</h2>
      <MatchTicket
        v-if="match && state.loaded"
        :match="match"
        :label="location === 'domani' ? 'PARTITA DOMANI' : 'PARTITA OGGI'"
      />
      <MatchTicket v-if="!match && nextMatch && state.loaded" :match="nextMatch" />

    </div>

    <RouterLink
      class="switch"
      :to="location === 'domani' ? '/oggi' : '/domani'"
      :aria-label="location === 'domani' ? 'Controlla se c\'è la partita oggi' : 'Controlla se c\'è la partita domani'"
      @click="trackEvent('switch_day', { to: location === 'domani' ? 'oggi' : 'domani' })"
    >
      {{ location === 'domani' ? 'e oggi?' : 'e domani?' }}
    </RouterLink>
  </main>
</template>
