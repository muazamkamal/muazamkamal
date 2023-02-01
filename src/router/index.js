import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
})

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView,
  },
  {
    path: '/gears',
    name: 'gears',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/GearsView.vue'),
  },
  {
    path: '/discord',
    name: 'discord',
    component: () => import('@/views/DiscordView.vue'),
  },
  {
    path: '/404',
    name: 'notfound',
    alias: '*',
    component: () => import('@/views/NotFoundView.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
