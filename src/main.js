import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import './styles/main.scss'

createApp(App).use(router).mount('#app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`)
}
