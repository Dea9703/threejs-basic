import request from '@/utils/request'

export const login = (data: Object) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
