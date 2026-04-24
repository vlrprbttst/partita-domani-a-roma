<script setup>
import { ref, reactive, watch, provide, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MenuPanel from './components/MenuPanel.vue'
import ConsentBanner from './components/ConsentBanner.vue'
import { trackEvent } from './utils/analytics.js'

const state = reactive({ loaded: false, menuOpen: false })

provide('appState', state)

const ua = navigator.userAgent || navigator.vendor || window.opera
const deviceClass = /iPad|iPhone|iPod/i.test(ua) ? 'isMobile iOS'
  : /Android/i.test(ua) ? 'isMobile android' : ''

const route = useRoute()

watch(() => route.path, () => { state.menuOpen = false })

let midnightTimer = null

function scheduleMidnightReload() {
  const midnight = new Date()
  midnight.setDate(midnight.getDate() + 1)
  midnight.setHours(0, 0, 0, 0)
  midnightTimer = setTimeout(() => window.location.reload(), midnight - Date.now())
}

// PWA install prompt
const deferredInstall  = ref(null)
const installDismissed = ref(false)

function onBeforeInstallPrompt(e) {
  e.preventDefault()
  deferredInstall.value = e
}

async function install() {
  if (!deferredInstall.value) return
  trackEvent('pwa_install_tapped')
  deferredInstall.value.prompt()
  const { outcome } = await deferredInstall.value.userChoice
  if (outcome === 'accepted') trackEvent('pwa_install_accepted')
  deferredInstall.value = null
}

onMounted(() => {
  scheduleMidnightReload()
  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
})

onUnmounted(() => {
  clearTimeout(midnightTimer)
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
})
</script>

<template>
  <div class="overlay" v-if="!state.loaded">
    <div class="message"><div class="spin"></div></div>
  </div>

  <div class="page" :class="[deviceClass, { menu_opened: state.menuOpen }]">
    <div class="rotate-device"></div>

    <MenuPanel :open="state.menuOpen" @toggle="state.menuOpen = !state.menuOpen" />
    <ConsentBanner />
    <div v-if="deferredInstall && !installDismissed" class="install-banner">
      <img src="/partita-domani-a-roma/icons/android-chrome-192x192.png" class="install-banner__icon" alt="">
      <div class="install-banner__text">
        <strong>Partita a Roma?</strong>
        <span>Aggiungi alla schermata home</span>
      </div>
      <button class="install-banner__btn" @click="install">Installa</button>
      <button class="install-banner__close" @click="installDismissed = true" aria-label="Chiudi">✕</button>
    </div>

    <div class="cont">
      <RouterView :key="route.path" />
    </div>
  </div>
</template>
