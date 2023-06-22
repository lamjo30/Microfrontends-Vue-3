import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../view/Login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;