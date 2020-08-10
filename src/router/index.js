import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import aboutUs from "../views/aboutUs.vue";
import joinUs from "../views/joinUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
    name: "About",
    component: aboutUs
  },
  {
    path: "/join-us",
    name: "Join",
    component: joinUs
  }
];

const router = new VueRouter({
  routes
});

export default router;
