import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CookiesView from '../views/CookiesView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',        component: HomeView,   props: { dayOffset: 1 } },
    { path: '/oggi',    component: HomeView,   props: { dayOffset: 0 } },
    { path: '/si',      component: HomeView,   props: { testMode: 'si' } },
    { path: '/no',      component: HomeView,   props: { testMode: 'no' } },
    { path: '/cookies', component: CookiesView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
