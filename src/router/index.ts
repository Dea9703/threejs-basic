import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue')
  },
  {

    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
