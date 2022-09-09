/*
 * @Author: 粟雄
 * @Date: 2022-09-08 18:28:45
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-09 14:53:25
 * @Description:
 */
import { defineStore } from 'pinia'
export const mainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'main',
  }),
  actions: {
    changeName() {
      this.name = '12234'
    },
  },
})
