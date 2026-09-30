<script setup>
import { inject, onMounted } from 'vue'
import PolicyText from '../components/PolicyText.vue'

const state = inject('appState')
onMounted(() => { state.loaded = true })
</script>

<template>
  <div class="policy-page">
    <div class="policy-content">

      <PolicyText />

    </div>
  </div>

  <div class="policy-bar">
    <RouterLink class="back-btn" to="/">← Torna alla home</RouterLink>
  </div>
</template>
