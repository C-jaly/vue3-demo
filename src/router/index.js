import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL), // 默认创建出来是createWebHistory，会造成构建后无报错的页面白屏
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'home',
      // component: () => import('../views/HomeView.vue') // 头部import进来后再在此次赋值打包预览后会出错(好像不会，好像只是createWebHistory问题)
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: About
    },
    {
      path: '/c',
      name: 'c',
      component: () => import('../views/CView.vue')
    }
  ]
})

export default router

