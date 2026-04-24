<script setup>
import { ref, onMounted } from 'vue'
import { trackEvent } from '../utils/analytics.js'

const visible = ref(false)

function grantConsent() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }
}

onMounted(() => {
  const saved = localStorage.getItem('cookiesChoice')
  if (saved === 'accepted') {
    grantConsent()
  } else if (!saved) {
    visible.value = true
  }
})

function accept() {
  localStorage.setItem('cookiesChoice', 'accepted')
  visible.value = false
  grantConsent()
  trackEvent('consent_accepted')
}

function refuse() {
  localStorage.setItem('cookiesChoice', 'refused')
  visible.value = false
}
</script>

<template>
  <div v-if="visible" class="analytics-notice">
    <p>Questo sito usa cookie di Google Analytics per statistiche anonime. <RouterLink to="/cookie-policy">Maggiori info</RouterLink></p>
    <div class="analytics-notice__actions">
      <button @click="refuse" aria-label="Rifiuta i cookie analitici">Rifiuta</button>
      <button @click="accept" aria-label="Accetta i cookie analitici">Accetta</button>
    </div>
  </div>
</template>
