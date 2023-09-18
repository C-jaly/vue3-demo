import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 默认创建出来是createWebHistory，会造成无报错的页面白屏
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue') // 头部import进来后再在此次赋值打包预览后会出错
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
