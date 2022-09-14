/*
 * @Author: 粟雄
 * @Date: 2022-09-08 17:58:09
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-14 16:26:44
 * @Description:
 */
import http from '@/http/index'
export const login = (url: string, params: any) => {
  return http.post(url, params)
}
