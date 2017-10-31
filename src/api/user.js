import axios from '../utils/axios'

// 登录注册接口
export const userLogin = (data) => axios.post('/v1/account/toLogin', data)
// 发送验证码接口
export const sendSMSMsg = (data) => axios.post('/v1/account/sendMobileCode', data)

export const userInfo = () => axios.get('/account/info')

export const userVerify = (data) => axios.post('/account/verify', data)


