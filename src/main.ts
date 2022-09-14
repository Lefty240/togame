/*
 * @Author: 粟雄
 * @Date: 2022-09-08 14:28:57
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-14 16:35:51
 * @Description:
 */
import { createApp } from 'vue'

import './assets/style/index.css'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import '@/permission'

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
