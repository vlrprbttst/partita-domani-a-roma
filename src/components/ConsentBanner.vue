<script setup>
import { ref } from 'vue'

const visible = ref(!localStorage.getItem('cookiesAccepted'))

function accept() {
  localStorage.setItem('cookiesAccepted', '1')
  visible.value = false
}
</script>

<template>
  <div v-if="visible" class="cookie-popup">
    Questo sito usa cookie di<br>Google Analytics per statistiche.
    <a href="#" @click.prevent="accept">OK, ho capito</a>
  </div>
</template>
