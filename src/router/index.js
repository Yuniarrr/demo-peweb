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
      path: '/task',
      name: 'task',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TaskView.vue')
    },
    {
      path: '/Education',
      name: 'Education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/Work',
      name: 'Work',
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: () => import('../views/ShoppingView.vue')
    }
  ]
})

export default router
