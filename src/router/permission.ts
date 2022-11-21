import { router } from './index'
import { getToken } from '@/utils/auth'

const whiteList: Array<string> = ['/login']

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
