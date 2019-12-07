import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/mouse",
    name: "mouse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mouse.vue")
  },
  {
    path: "/scroll",
    name: "scroll",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scroll.vue")
  },
  {
    path: "/portals",
    name: "portals",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portals.vue")
  },
  {
    path: "/tooltip",
    name: "tooltip",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tooltip.vue")
  },
  {
    path: "/forms",
    name: "forms",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Forms.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
