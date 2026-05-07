<script setup>
import { ref, inject, onMounted, nextTick } from 'vue'
import { getMatchForDate, getNextMatch } from '../api/football.js'
import { trackEvent } from '../utils/analytics.js'
import { notificationsSupported, subscribeToNotifications, unsubscribeFromNotifications, detectNotificationState, requestPersistentStorage } from '../api/firebase.js'

const props = defineProps({
  dayOffset: { type: Number, default: 1 },
  testMode:  { type: String, default: null },
})

const state = inject('appState')

const match      = ref(null)
const nextMatch  = ref(null)
const background = ref('')
const location   = props.dayOffset === 0 ? 'oggi' : 'domani'

const notifSupported  = notificationsSupported()
const bellBtnRef      = ref(null)

const CONFETTI_COLORS = ['#8C1A2E', '#fcff00', '#88D8F1', '#ffffff']
const CONFETTI_DEFS   = [
  [  0,-95, 1],[ 28,-90,-1],[ 55,-78, 1],[ 75,-55,-1],[ 90,-20, 1],[ 88, 20,-1],
  [ 75, 52, 1],[ 52, 76,-1],[ 20, 92, 1],[-20, 90,-1],[-52, 74, 1],[-76, 50,-1],
  [-92,  8, 1],[-88,-20,-1],[-75,-52, 1],[-52,-78,-1],[-18,-93, 1],[ 22,-90,-1],
  [ 50,-76, 1],[ 76,-50,-1],[ 93, -5, 1],[ 82, 38,-1],[ 55, 72, 1],[ 25, 91,-1],
]
const CONFETTI_SHAPES = [
  [10,5],[6,6],[14,5],[5,5],[9,4],[7,7],[12,4],[4,8],
  [8,4],[13,5],[6,6],[10,4],[7,7],[9,3],[5,5],[11,4],
  [9,9],[6,3],[13,5],[4,4],[11,4],[7,3],[8,8],[5,10],
]

function fireConfetti() {
  if (!bellBtnRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { left, top, width, height } = bellBtnRef.value.getBoundingClientRect()
  const cx = left + width / 2
  const cy = top  + height / 2
  CONFETTI_DEFS.forEach(([tx, ty, rotSign], i) => {
    const [w, h] = CONFETTI_SHAPES[i]
    const el = document.createElement('div')
    Object.assign(el.style, {
      position: 'fixed', zIndex: '9999', pointerEvents: 'none',
      left: (cx - w / 2) + 'px', top: (cy - h / 2) + 'px',
      width: w + 'px', height: h + 'px',
      background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      borderRadius: '2px',
    })
    document.body.appendChild(el)
    el.animate(
      [
        { transform: 'translate(0,0) rotate(0deg) scale(0.5)',                                                      opacity: 1, offset: 0    },
        { transform: `translate(${tx * 0.18}px,${ty * 0.18}px) rotate(${rotSign * 80}deg) scale(1.5)`,             opacity: 1, offset: 0.12 },
        { transform: `translate(${tx}px,${ty}px) rotate(${rotSign * 540}deg) scale(0.1)`,                          opacity: 0, offset: 1    },
      ],
      { duration: 1500, easing: 'ease-out', fill: 'forwards' }
    ).onfinish = () => el.remove()
  })
}


// Optimistic init based on Notification.permission (durable across storage eviction).
// The real state is verified asynchronously in onMounted via detectNotificationState().
const notifState     = ref(
  !notificationsSupported()                                                                  ? 'unsupported' :
  Notification.permission === 'denied'                                                       ? 'denied'      :
  Notification.permission === 'granted' && localStorage.getItem('notifUnsubscribed') !== 'true' ? 'subscribed' : 'idle'
)

// Guard against the (rare) race where syncNotifState resolves after the user
// has tapped the bell: once the user has acted, their action is the truth.
let userActed = false

async function syncNotifState() {
  const real = await detectNotificationState()
  if (real === null || userActed) return
  notifState.value = real
}

async function avvisami() {
  userActed = true
  state.loaded = false
  let succeeded = false
  try {
    const result = await subscribeToNotifications()
    notifState.value = result === 'granted' ? 'subscribed' : result
    if (result === 'granted') succeeded = true
    trackEvent('notify_subscribe', { result })
  } catch {
    notifState.value = 'idle'
  } finally {
    state.loaded = true
    if (succeeded) {
      await nextTick()
      setTimeout(fireConfetti, 300)
    }
  }
}

async function disattiva() {
  userActed = true
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

function explainDenied() {
  alert("Le notifiche di questo sito sono bloccate dal browser.\n\nPer riattivarle:\n• Tocca l'icona del lucchetto nella barra degli indirizzi\n• Vai su \"Notifiche\" e abilitale\n• Ricarica la pagina")
}

function onBellClick() {
  if (notifState.value === 'denied')     return explainDenied()
  if (notifState.value === 'subscribed') return disattiva()
  return avvisami()
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
    if (!match.value && props.testMode === null) {
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

onMounted(() => {
  load()
  syncNotifState()
  requestPersistentStorage()
})
</script>

<template>
  <button
    class="menu"
    :aria-label="state.menuOpen ? 'Chiudi menu' : 'Apri menu'"
    :aria-expanded="state.menuOpen.toString()"
    aria-controls="main-menu"
    @click="state.menuOpen = !state.menuOpen; trackEvent('menu_opened')"
  ></button>
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

    <div
      v-if="notifSupported && notifState !== 'unsupported'"
      class="notify-wrap"
    >
      <button
        ref="bellBtnRef"
        class="notify-btn"
        :class="{ 'notify-btn--denied': notifState === 'denied' }"
        :aria-label="notifState === 'subscribed' ? 'Disattiva notifiche' : notifState === 'denied' ? 'Notifiche bloccate dal browser, clicca per istruzioni' : 'Attiva notifiche'"
        @click="onBellClick"
      >
        <!-- bell: idle only -->
        <svg v-if="notifState === 'idle'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- bell-slash: subscribed / denied -->
        <svg v-else width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 5L17 17" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <span class="notify-label">
        {{ notifState === 'subscribed' ? 'disattiva' : notifState === 'denied' ? 'bloccate' : 'attiva' }}
      </span>
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
