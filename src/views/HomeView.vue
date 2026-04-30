<script setup>
import { ref, inject, onMounted } from 'vue'
import { getMatchForDate, getNextMatch } from '../api/football.js'
import { trackEvent } from '../utils/analytics.js'
import { notificationsSupported, subscribeToNotifications, unsubscribeFromNotifications } from '../api/firebase.js'

const props = defineProps({
  dayOffset: { type: Number, default: 1 },
  testMode:  { type: String, default: null },
})

const state = inject('appState')

const match      = ref(null)
const nextMatch  = ref(null)
const background = ref('')
const location   = props.dayOffset === 0 ? 'oggi' : 'domani'

const notifSupported = notificationsSupported()
const notifState     = ref(
  !notificationsSupported()       ? 'unsupported' :
  Notification.permission === 'granted' ? 'subscribed'  :
  Notification.permission === 'denied'  ? 'denied'      : 'idle'
)

async function avvisami() {
  state.loaded = false
  try {
    const result = await subscribeToNotifications()
    notifState.value = result === 'granted' ? 'subscribed' : result
    trackEvent('notify_subscribe', { result })
  } catch {
    notifState.value = 'idle'
  } finally {
    state.loaded = true
  }
}

async function disattiva() {
  state.loaded = false
  try {
    await unsubscribeFromNotifications()
    notifState.value = 'idle'
    trackEvent('notify_unsubscribe')
  } catch {
    notifState.value = 'subscribed'
  } finally {
    state.loaded = true
  }
}

function formatNextDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })
}

function formatTime(date) {
  return date.toLocaleTimeString('it-IT', {
    hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome',
  })
}

function preloadBackground(hasMatch) {
  const idx  = Math.floor(Math.random() * 10) + 1
  const type = hasMatch ? 'si' : 'no'
  const url  = `${import.meta.env.BASE_URL}images/${type}-sfondo${idx}.jpg`
  background.value = url
  return new Promise(resolve => {
    const img = new Image()
    img.onload = img.onerror = resolve
    img.src = url
  })
}

async function load() {
  state.loaded = false
  try {
    if (props.testMode === 'si') {
      match.value = {
        timestamp: new Date(),
        homeTeam: { name: 'roma', article: 'la' },
        awayTeamName: 'Test FC',
      }
    } else if (props.testMode !== 'no') {
      const target = new Date()
      target.setDate(target.getDate() + props.dayOffset)
      match.value = await getMatchForDate(target)
    }
    if (!match.value && props.testMode == null) {
      // On "oggi" page, don't show next match if tomorrow already has one
      if (props.dayOffset === 0) {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowMatch = await getMatchForDate(tomorrow)
        if (!tomorrowMatch) nextMatch.value = await getNextMatch()
      } else {
        nextMatch.value = await getNextMatch()
      }
    }
    await preloadBackground(!!match.value)
    trackEvent('result_viewed', { result: match.value ? 'si' : 'no', day: location })
  } finally {
    state.loaded = true
  }
}

// Pull-to-refresh
// Share
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

// Pull-to-refresh
const THRESHOLD = 80
let startY      = 0
let pullY       = 0
let pullReady   = false

function onTouchStart(e) {
  if (state.menuOpen) return
  startY = e.touches[0].clientY
}

function onTouchMove(e) {
  e.preventDefault()
  if (state.menuOpen) return
  const delta = e.touches[0].clientY - startY
  if (delta > 0) {
    pullY = Math.min(delta, THRESHOLD * 1.5)
    if (!pullReady && pullY >= THRESHOLD) {
      pullReady = true
      state.loaded = false
    } else if (pullReady && pullY < THRESHOLD) {
      pullReady = false
      state.loaded = true
    }
  }
}

async function onTouchEnd() {
  const wasReady = pullReady
  pullY     = 0
  pullReady = false
  if (wasReady) {
    trackEvent('pull_to_refresh')
    await load()
  } else {
    state.loaded = true
  }
}

onMounted(load)
</script>

<template>
  <button
    class="menu"
    :aria-label="state.menuOpen ? 'Chiudi menu' : 'Apri menu'"
    :aria-expanded="state.menuOpen.toString()"
    aria-controls="main-menu"
    @click="state.menuOpen = !state.menuOpen; trackEvent('menu_opened')"
  ></button>
  <button v-if="canShare" class="share-btn" @click="share" aria-label="Condividi questa pagina">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  </button>

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
      <p v-if="!match && nextMatch" class="next-match">
        <b>Prossima partita:</b> {{ formatNextDate(nextMatch.date) }} &middot;
        <span :class="nextMatch.homeTeam.name">{{ nextMatch.homeTeam.name }}</span>
        <template v-if="nextMatch.timestamp"> &middot; ore {{ formatTime(nextMatch.timestamp) }}</template>
      </p>
      <h3 v-if="match">
        Gioca {{ match.homeTeam.article }}
        <span :class="match.homeTeam.name">{{ match.homeTeam.name }}</span><br>
        alle <span class="orario">{{ formatTime(match.timestamp) }}</span>
      </h3>

      <button
        v-if="notifSupported && notifState !== 'unsupported' && notifState !== 'denied'"
        class="notify-toggle"
        :aria-label="notifState === 'subscribed' ? 'Disattiva notifiche' : 'Attiva notifiche'"
        @click="notifState === 'subscribed' ? disattiva() : avvisami()"
      >
        <svg v-if="notifState !== 'subscribed'" width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 5L17 17" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{ notifState === 'subscribed' ? 'disattiva le notifiche' : 'attiva le notifiche' }}</span>
      </button>
    </div>

    <RouterLink
      class="switch"
      :to="location === 'domani' ? '/oggi' : '/'"
      :aria-label="location === 'domani' ? 'Controlla se c\'è la partita oggi' : 'Controlla se c\'è la partita domani'"
      @click="trackEvent('switch_day', { to: location === 'domani' ? 'oggi' : 'domani' })"
    >
      {{ location === 'domani' ? 'e oggi?' : 'e domani?' }}
    </RouterLink>
  </main>
</template>
