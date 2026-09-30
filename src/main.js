import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
// Self-hosted fonts: no request to Google Fonts (would send the IP to Google without consent)
import '@fontsource/anton/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import '@fontsource/jetbrains-mono/latin-700.css'
import '@fontsource/oswald/latin-400.css'
import '@fontsource/oswald/latin-700.css'
import '@fontsource/roboto/latin-400.css'
import './styles/main.scss'

createApp(App).use(router).mount('#app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`)
}
