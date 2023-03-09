import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "top",
    component: async () => {
      const top = await import("../pages/Top.vue");
      return top;
    },
  },
  {
    path: "/q/:q",
    name: "search",
    component: async () => {
      const top = await import("../pages/Top.vue");
      return top;
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
