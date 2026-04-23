<script setup>
import { ref, inject, onMounted } from 'vue'
import { getMatchForDate } from '../api/football.js'

const props = defineProps({
  dayOffset: { type: Number, default: 1 },
  testMode:  { type: String, default: null },
})

const state = inject('appState')

const match      = ref(null)
const background = ref('')
const location   = props.dayOffset === 0 ? 'oggi' : 'domani'

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
    await preloadBackground(!!match.value)
  } finally {
    state.loaded = true
  }
}

// Pull-to-refresh
const THRESHOLD = 80
const pullY     = ref(0)
const ready     = ref(false)
const releasing = ref(false)
let startY = 0

function onTouchStart(e) {
  if (state.menuOpen) return
  startY = e.touches[0].clientY
}

function onTouchMove(e) {
  e.preventDefault()
  if (state.menuOpen) return
  const delta = e.touches[0].clientY - startY
  if (delta > 0) {
    pullY.value = Math.min(delta, THRESHOLD * 1.5)
    ready.value = pullY.value >= THRESHOLD
  }
}

async function onTouchEnd() {
  if (ready.value) {
    releasing.value = true
    pullY.value = 0
    ready.value  = false
    await new Promise(r => setTimeout(r, 300))
    releasing.value = false
    await load()
  } else {
    pullY.value = 0
    ready.value  = false
  }
}

onMounted(load)
</script>

<template>
  <div class="menu" @click="state.menuOpen = !state.menuOpen"></div>

  <div
    class="cont-inner"
    :class="{ menu_opened: state.menuOpen }"
    :style="{ backgroundImage: `url(${background})` }"
    @touchstart.passive="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend.passive="onTouchEnd"
  >
    <div
      class="pull-indicator"
      :class="{ releasing }"
      :style="{ opacity: releasing ? 0 : pullY / THRESHOLD, transform: `translateY(${pullY * 0.4}px)` }"
    >
      <span
        class="pull-icon"
        :class="{ spinning: ready }"
        :style="!ready ? { transform: `rotate(${pullY * 3}deg)` } : {}"
      >&#8635;</span>
    </div>

    <div class="center">
      <h1>C'è la partita<br>{{ location }} a Roma?</h1>
      <h2>{{ match ? 'Sì' : 'No' }}</h2>
      <h3 v-if="match">
        Gioca {{ match.homeTeam.article }}
        <span :class="match.homeTeam.name">{{ match.homeTeam.name }}</span><br>
        alle <span class="orario">{{ formatTime(match.timestamp) }}</span>
      </h3>
    </div>

    <RouterLink class="switch" :to="location === 'domani' ? '/oggi' : '/'">
      {{ location === 'domani' ? 'e oggi?' : 'e domani?' }}
    </RouterLink>
  </div>
</template>
