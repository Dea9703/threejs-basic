import { defineStore } from 'pinia'
import { login } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'

interface State {
    token: string
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      token: getToken() || ''
    }
  },
  actions: {
    async fetchLogin (data: Object) {
      const res = await login(data)
      this.token = res.data
      setToken(res.data)
    },

    logOut () {
      removeToken()
    }
  }
})
