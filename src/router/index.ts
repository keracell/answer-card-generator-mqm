import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/blok",
      name: "blok",
      component: () => import("@/views/BlokView.vue"),
    },
    {
      path: "/test-60",
      name: "test-60",
      component: () => import("@/views/Test60View.vue"),
    },
    {
      path: "/test-110",
      name: "test-110",
      component: () => import("@/views/Test110View.vue"),
    },
    {
      path: "/mag",
      name: "mag",
      component: () => import("@/views/MagView.vue"),
    },
    {
      path: "/b89",
      name: "b89",
      component: () => import("@/views/B89View.vue"),
    },
    {
      path: "/b11",
      name: "b11",
      component: () => import("@/views/B11View.vue"),
    },
    {
      path: "/b11-eng",
      name: "b11-eng",
      component: () => import("@/views/B11EngView.vue"),
    },
    {
      path: "/b9-eng",
      name: "b9-eng",
      component: () => import("@/views/B89EngView.vue"),
    },
    {
      path: "/b10",
      name: "b10",
      component: () => import("@/views/B10View.vue"),
    },
    {
      path: "/dovgu",
      name: "test-60",
      component: () => import("@/views/DovguView.vue"),
    },
    {
      path: "/qebul-01",
      name: "qebul-01",
      component: () => import("@/views/Qebul01View.vue"),
    },
  ],
});

export default router
