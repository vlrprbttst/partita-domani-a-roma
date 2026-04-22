<script setup>
import { ref, inject, onMounted } from 'vue'
import { getMatchForDate } from '../api/football.js'

const props = defineProps({
  dayOffset: { type: Number, default: 1 },
  testMode:  { type: String, default: null },
})

const { loaded, menuOpen } = inject('appState')

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
  const url  = `/images/${type}-sfondo${idx}.jpg`
  background.value = url
  return new Promise(resolve => {
    const img = new Image()
    img.onload = img.onerror = resolve
    img.src = url
  })
}

onMounted(async () => {
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
  loaded.value = true
})
</script>

<template>
  <div class="menu" @click="menuOpen = !menuOpen"></div>

  <div
    class="cont-inner"
    :class="{ menu_opened: menuOpen }"
    :style="{ backgroundImage: `url(${background})` }"
    @touchmove.prevent
  >
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
