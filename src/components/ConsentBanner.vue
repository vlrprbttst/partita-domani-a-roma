<script setup>
import { ref, onMounted } from 'vue'
import { getConsent, initAnalytics, setConsent } from '../utils/analytics.js'

const visible = ref(false)

onMounted(() => {
  initAnalytics()
  if (!getConsent()) visible.value = true
})

function choose(accepted) {
  visible.value = false
  setConsent(accepted)
}
</script>

<template>
  <div v-if="visible" class="analytics-notice" role="region" aria-label="Consenso cookie">
    <p>
      Con il tuo consenso usiamo i cookie di Google Analytics per statistiche aggregate sull'utilizzo.
      Puoi cambiare idea in qualsiasi momento dal menu. <RouterLink to="/cookie-policy">Cookie Policy</RouterLink>
    </p>
    <div class="analytics-notice__actions">
      <button @click="choose(false)" aria-label="Rifiuta i cookie analitici">Rifiuta</button>
      <button @click="choose(true)" aria-label="Accetta i cookie analitici">Accetta</button>
    </div>
  </div>
</template>
