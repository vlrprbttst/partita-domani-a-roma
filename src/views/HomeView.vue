<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getMatches } from '../api/football.js'
import { dateRome, formatTime, isDerby } from '../utils/matches.js'
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

function testMatch(awayTeamName, homeName = 'roma', ts = new Date()) {
  return {
    date: dateRome(ts),
    timestamp: ts,
    homeTeam: { name: homeName, article: 'la' },
    awayTeamName,
    competition: 'Serie A',
  }
}

function applyTestMode() {
  const mode = props.testMode
  if (mode === 'si')       match.value = testMatch('Test FC')
  if (mode === 'si-lazio') match.value = testMatch('Test FC', 'lazio')
  if (mode === 'derby')    match.value = testMatch('SS Lazio')
  if (mode.startsWith('next-')) {
    const future = new Date()
    future.setDate(future.getDate() + 10)
    const ts = new Date(`${dateRome(future)}T${mode === 'next-tbd' ? '00:00:00' : '18:30:00'}Z`)
    nextMatch.value = mode === 'next-lazio' ? testMatch('Test FC', 'lazio', ts)
      : testMatch(mode === 'next-derby' ? 'SS Lazio' : 'Test FC', 'roma', ts)
  }
}

let loadedDay = null

async function load({ track = true } = {}) {
  state.loaded = false
  match.value = null
  nextMatch.value = null
  let redirected = false
  try {
    if (props.testMode) {
      applyTestMode()
    } else {
      const { today, tomorrow, next } = await getMatches()
      match.value = props.dayOffset === 0 ? today : tomorrow
      if (props.dayOffset === 1 && !match.value) {
        if (today) {
          // Domani empty but match today: redirect to oggi — unless user navigated here explicitly.
          // With preventRedirect, next match stays hidden (there's already one today)
          if (!props.preventRedirect) {
            router.replace('/oggi')
            redirected = true
            return
          }
        } else {
          nextMatch.value = next
        }
      }
    }
    loadedDay = dateRome(new Date())
    await preloadBackground(!!match.value, isDerby(match.value))
    if (track) trackEvent('result_viewed', { result: match.value ? 'si' : 'no', day: location })
  } finally {
    if (!redirected) state.loaded = true
  }
}

// PWA / tab resumed after a while (or on another day): refresh data
const STALE_AFTER = 10 * 60 * 1000
let hiddenAt = Date.now()

function onVisibilityChange() {
  if (document.visibilityState === 'hidden') {
    hiddenAt = Date.now()
  } else if (dateRome(new Date()) !== loadedDay || Date.now() - hiddenAt > STALE_AFTER) {
    load({ track: false })
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
  document.addEventListener('visibilitychange', onVisibilityChange)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', onVisibilityChange)
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
