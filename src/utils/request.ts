import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'

const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

server.interceptors.request.use(config => {
  const { token } = useUserStore().$state
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

server.interceptors.response.use(response => {
  const { message, success } = response.data
  if (success) {
    return response.data
  } else {
    // 提示错误
    ElMessage.error(message)
    // 返回抛出错误
    return Promise.reject(message)
  }
}, error => {
  return Promise.reject(error)
})

export default server
