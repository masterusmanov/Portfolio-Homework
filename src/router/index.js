import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Works.vue')
    },
    {
      path: '/work_detail',
      name: 'work_detail',
      component: () => import('../views/WorkDetail.vue')
    }
  ]
})

export default router
