/*
 * @Author: 粟雄
 * @Date: 2022-09-08 17:23:22
 * @LastEditors: 粟雄
 * @LastEditTime: 2022-09-13 10:33:21
 * @Description:
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Nprogress from 'nprogress'
axios.defaults.url = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application-json;charset=UTF-8'
axios.interceptors.request.use(
  (config: any): AxiosRequestConfig<any> => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (err) => err
)
axios.interceptors.response.use((res) => {
  return res
})

interface ResType<T> {
  code: Number
  data?: T
  msg: string
  err?: string
}

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}
const http: Http = {
  post: (url, params) => {
    return new Promise((resolve, reject) => {
      Nprogress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data)
          Nprogress.done()
        })
        .catch((err) => {
          reject(err)
          Nprogress.done()
        })
    })
  },
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      Nprogress.start()
      axios.get(url, { params }).then(
        (res) => {
          resolve(res.data)
          Nprogress.done()
        },
        (err) => {
          reject(err)
          Nprogress.done()
        }
      )
    })
  },
}

export default http
