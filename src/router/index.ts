import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/blok',
      name: 'blok',
      component: () => import('@/views/BlokView.vue'),
    },
    {
      path: '/test-120',
      name: 'test-120',
      component: () => import('@/views/Test120View.vue'),
    },
    {
      path: '/mag',
      name: 'mag',
      component: () => import('@/views/MagView.vue'),
    },
    {
      path: '/b89',
      name: 'b89',
      component: () => import('@/views/B89View.vue'),
    },
    {
      path: '/b11',
      name: 'b11',
      component: () => import('@/views/B11View.vue'),
    },
    {
      path: '/b10',
      name: 'b10',
      component: () => import('@/views/B10View.vue'),
    },
  ],
})

export default router
