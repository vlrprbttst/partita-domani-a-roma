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
const deferredInstall = ref(null)

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
    <button v-if="deferredInstall" class="install-btn" @click="install">
      Installa app
    </button>

    <div class="cont">
      <RouterView :key="route.path" />
    </div>
  </div>
</template>
