import axios from 'axios'
import { refresh } from '@/features/auth/api/auth.api'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any) => {
  failedQueue.forEach((p) => {
    if (error) {
      p.reject(error)
    } else {
      p.resolve(true)
    }
  })

  failedQueue = []
}

api.interceptors.response.use(
  (res) => res,

  async (error) => {
    const originalRequest = error.config

    if (!error.response) {
      return Promise.reject(error)
    }

    if (error.response.status !== 401) {
      return Promise.reject(error)
    }

    if (originalRequest._retry) {
      return Promise.reject(error)
    }

    if (originalRequest.url?.includes('/auth/refresh')) {
      return Promise.reject(error)
    }

    originalRequest._retry = true

    try {
      await refresh()

      return api.request(originalRequest)
    } catch (err) {
      return Promise.reject(err)
    }
  }
)

// api.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalRequest = error.config

//     if (!error.response || error.response.status !== 401) {
//       return Promise.reject(error)
//     }

//     if (originalRequest._retry) {
//       return Promise.reject(error)
//     }

//     if (isRefreshing) {
//       return new Promise((resolve, reject) => {
//         failedQueue.push({ resolve, reject })
//       }).then(() => {
//         return api.request(originalRequest)
//       })
//     }

//     originalRequest._retry = true
//     isRefreshing = true

//     try {
//       await refresh()

//       processQueue(null)

//       return api.request(originalRequest)
//     } catch (err) {
//       processQueue(err)

//       return Promise.reject(err)
//     } finally {
//       isRefreshing = false
//     }
//   }
// )