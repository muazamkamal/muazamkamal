import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/views/Landing.vue";
import VueMeta from "vue-meta";

Vue.use(VueRouter);

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/gears",
    name: "gears",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/Gears.vue")
  },
  {
    path: "/discord",
    name: "discord",
    component: () => import("@/views/Discord.vue")
  },
  {
    path: "/404",
    name: "notfound",
    alias: "*",
    component: () => import("@/views/NotFound.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
