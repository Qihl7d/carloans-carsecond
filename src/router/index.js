import Vue from 'vue'
import Router from 'vue-router'
import { getStore } from '../utils/storage'
import { setTitle } from '../utils/util'

Vue.use(Router)

const FosunBycar = r => require.ensure([], () => r(require('@/views/fosunBycar')), 'chunk-fosunbycar')
const Login = r => require.ensure([], () => r(require('@/views/login')), 'chunk-login')
const FindPwd = r => require.ensure([], () => r(require('@/views/findPwd')), 'chunk-findpwd')
const SetPwd = r => require.ensure([], () => r(require('@/views/setPwd')), 'chunk-setpwd')
const PersonalInfo = r => require.ensure([], () => r(require('@/views/personalInfo')), 'chunk-personalinfo')
const WorkInfo = r => require.ensure([], () => r(require('@/views/workInfo')), 'chunk-workinfo')
const OtherInfo = r => require.ensure([], () => r(require('@/views/otherInfo')), 'chunk-otherinfo')
const Upload = r => require.ensure([], () => r(require('@/views/upload')), 'chunk-upload')
const SbmtSuccess = r => require.ensure([], () => r(require('@/views/sbmtSuccess')), 'chunk-sbmtsuccess')

const router = new Router({
    routes: [
        { name: 'login', path: '/login', component: Login, meta: { auth: false, title: '登录' } },
        { name: 'findpwd', path: '/findpwd', component: FindPwd, meta: { auth: false, title: '忘记密码找回' } },
        { name: 'setpwd', path: '/setpwd', component: SetPwd, meta: { auth: false, title: '忘记密码找回' } },
        { name: 'fosunbycar', path: '/fosunbycar', component: FosunBycar, meta: { auth: false, title: '复星购车' } },
        { name: 'personalinfo', path: '/personalinfo', component: PersonalInfo, meta: { auth: false, title: '个人信息' } },
        { name: 'workinfo', path: '/workinfo', component: WorkInfo, meta: { auth: false, title: '工作信息' } },
        { name: 'otherinfo', path: '/otherinfo', component: OtherInfo, meta: { auth: false, title: '其他信息' } },
        { name: 'upload', path: '/upload', component: Upload, meta: { auth: false, title: '证件上传' } },
        { name: 'sbmtsuccess', path: '/sbmtsuccess', component: SbmtSuccess, meta: { auth: false, title: '提交成功' } },
        { path: '*', redirect: { name: 'fosunbycar' } }
    ]
})

router.beforeEach((to, from, next) => {
    const { path } = to
    setTitle(to.meta.title)
    if (to.meta.auth) {
        const token = getStore('token')
        if (token) {
            next()
        } else if (path !== 'login') {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next()
    }
})

export default router