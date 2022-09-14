/*
 * @Author: 粟雄
 * @Date: 2022-09-08 15:57:01
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-14 16:34:04
 * @Description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import routes from '@/router/modules/index'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/page/login/index.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/page/Home/index.vue'),
    },
  ],
})
export default router
