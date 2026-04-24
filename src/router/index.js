import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export default createRouter({
  history: createWebHistory('/partita-domani-a-roma/'),
  routes: [
    { path: '/',     component: HomeView, props: { dayOffset: 1 } },
    { path: '/oggi', component: HomeView, props: { dayOffset: 0 } },
    { path: '/si',   component: HomeView, props: { testMode: 'si' } },
    { path: '/no',   component: HomeView, props: { testMode: 'no' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
