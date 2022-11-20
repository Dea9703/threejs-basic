import Cookie from 'js-cookie'

const DEAKEY: string = 'token-key'

// 获取token
export const getToken = () => Cookie.get(DEAKEY)

// 设置token
export const setToken = (token: string) => Cookie.set(DEAKEY, token)

// 移除token
export const removeToken = () => Cookie.remove(DEAKEY)
