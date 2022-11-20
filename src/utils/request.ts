import axios from 'axios'

const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

server.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

server.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default server
