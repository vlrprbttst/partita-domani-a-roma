<script setup>
import { reactive, watch, provide, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MenuPanel from './components/MenuPanel.vue'

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

onMounted(scheduleMidnightReload)
onUnmounted(() => clearTimeout(midnightTimer))
</script>

<template>
  <div class="overlay" v-if="!state.loaded">
    <div class="message"><div class="spin"></div></div>
  </div>

  <div class="page" :class="[deviceClass, { menu_opened: state.menuOpen }]">
    <div class="rotate-device"></div>

    <div class="sharingiscaring">
      <div class="the-fb">
        <div id="fb-root"></div>
        <div
          class="fb-like"
          data-href="https://vlrprbttst.github.io/partita-domani-a-roma/"
          data-layout="button_count"
          data-action="like"
          data-show-faces="false"
          data-share="true"
        ></div>
      </div>
    </div>

    <MenuPanel :open="state.menuOpen" @toggle="state.menuOpen = !state.menuOpen" />

    <div class="cont">
      <RouterView :key="route.path" />
    </div>
  </div>
</template>
