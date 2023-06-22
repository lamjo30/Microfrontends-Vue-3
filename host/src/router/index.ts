import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Counter from "remote/Counter";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../view/Login.vue"),
  },
  {
    path: "/check",
    name: "check",
    component: () => import("../view/Check.vue"),
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("remote/Counter"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;