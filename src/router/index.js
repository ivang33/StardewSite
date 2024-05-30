import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/FAQ',
      name: 'about',
      component: () => import('../views/FAQView.vue')
    }
  ]
})

export default router
