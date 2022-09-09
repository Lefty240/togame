/*
 * @Author: 粟雄
 * @Date: 2022-09-08 14:28:57
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-09 15:08:11
 * @Description:
 */
import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
