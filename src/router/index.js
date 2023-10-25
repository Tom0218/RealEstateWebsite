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
      path: '/LogInPage',
      name: 'LogInPage',//自訂
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LogInPage.vue')
    },
    {
      path: '/PersonalPage',
      name: 'PersonalPage',//自訂
      component: () => import('../views/PersonalPage.vue')
    },
    {
      path: '/LocationSearch',
      name: 'LocationSearch',//自訂
      component: () => import('../views/LocationSearch.vue'),
    },
    {
      path: '/CenterAreaPage',
      name: 'CenterAreaPage',//自訂
      component: () => import('../components/CenterAreaPage.vue'),
    },
    {
      path: '/PersonalPage',
      name: 'PersonalPage',//自訂
      component: () => import('../views/PersonalPage.vue'),
    },
    {
      path: '/Ask',
      name: 'Ask',//自訂
      component: () => import('../views/Ask.vue'),
    },
    {
      path: '/ObjectA',
      name: 'ObjectA',//自訂
      component: () => import('../components/ObjectA.vue'),
    },
  ]
})

export default router
