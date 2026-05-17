import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CookiePolicy from '../views/CookiePolicy.vue'

export default createRouter({
  history: createWebHistory('/partita-domani-a-roma/'),
  routes: [
    { path: '/',              component: HomeView,    props: { dayOffset: 1 } },
    { path: '/domani',        component: HomeView,    props: { dayOffset: 1, preventRedirect: true } },
    { path: '/oggi',          component: HomeView,    props: { dayOffset: 0 } },
    { path: '/si',            component: HomeView,    props: { testMode: 'si' } },
    { path: '/si-lazio',      component: HomeView,    props: { testMode: 'si-lazio' } },
    { path: '/no',            component: HomeView,    props: { testMode: 'no' } },
    { path: '/derby',         component: HomeView,    props: { testMode: 'derby' } },
    { path: '/next-roma',     component: HomeView,    props: { testMode: 'next-roma' } },
    { path: '/next-lazio',    component: HomeView,    props: { testMode: 'next-lazio' } },
    { path: '/next-derby',    component: HomeView,    props: { testMode: 'next-derby' } },
    { path: '/next-tbd',      component: HomeView,    props: { testMode: 'next-tbd' } },
    { path: '/cookie-policy', component: CookiePolicy },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
