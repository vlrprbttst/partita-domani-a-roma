import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import './styles/main.scss'

createApp(App).use(router).mount('#app')
