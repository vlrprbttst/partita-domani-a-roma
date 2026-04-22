<script setup>
import { reactive, computed, provide, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MenuPanel from './components/MenuPanel.vue'
import ConsentBanner from './components/ConsentBanner.vue'

const state = reactive({ loaded: false, menuOpen: false })

provide('appState', state)

const ua = navigator.userAgent || navigator.vendor || window.opera
const deviceClass = /iPad|iPhone|iPod/i.test(ua) ? 'isMobile iOS'
  : /Android/i.test(ua) ? 'isMobile android' : ''

const route = useRoute()

const hideSocial = computed(() => route.path === '/cookies')

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

    <div class="sharingiscaring" v-if="!hideSocial">
      <div class="the-fb">
        <div id="fb-root"></div>
        <div
          class="fb-like"
          data-href="http://www.partitadomaniaroma.com"
          data-layout="button_count"
          data-action="like"
          data-show-faces="false"
          data-share="true"
        ></div>
      </div>
      <div class="the-twt">
        <a
          class="twitter-share-button"
          href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.partitadomaniaroma.com&text=C%27%C3%A8%20la%20partita%20domani%20a%20Roma%3F%20%23RomaNord%20%23Olimpico%20%23ASRoma%20%23SSLazio%20%23traffico%20%23SerieA"
          data-size="small"
        >Tweet</a>
      </div>
    </div>

    <MenuPanel :open="state.menuOpen" @toggle="state.menuOpen = !state.menuOpen" />
    <ConsentBanner />

    <div class="cont">
      <RouterView :key="route.path" />
    </div>
  </div>
</template>
