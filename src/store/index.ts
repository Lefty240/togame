/*
 * @Author: 粟雄
 * @Date: 2022-09-08 18:28:45
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-13 11:03:23
 * @Description:
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)
export default store
