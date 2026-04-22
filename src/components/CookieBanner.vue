<script setup>
import { ref } from 'vue'

const show = ref(localStorage.getItem('cookiesAccepted') !== 'true')

function accept() {
  localStorage.setItem('cookiesAccepted', 'true')
  show.value = false
}
</script>

<template>
  <div v-if="show" class="cookie-popup">
    Utilizziamo i cookie per fornire le funzioni dei social media e analizzare il traffico.<br>
    <a class="cookie-consent" href="#" @click.prevent="accept">Accetta</a>
    oppure
    <RouterLink class="cookie-info" to="/cookies">visualizza ulteriori dettagli</RouterLink>.
  </div>
</template>
