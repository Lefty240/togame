/*
 * @Author: 粟雄
 * @Date: 2022-09-13 11:04:44
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-14 16:46:59
 * @Description:
 */
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    return {
      userInfo: {},
      token: '233',
      expireTime: '',
    }
  },
  getters: {
    token: (state) => state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    removeToken() {
      this.token = ''
    },
  },
})
