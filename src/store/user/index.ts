/*
 * @Author: 粟雄
 * @Date: 2022-09-13 11:04:44
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-14 16:26:27
 * @Description:
 */
import { defineStore } from 'pinia'
export default defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo: {},
      token: '',
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
