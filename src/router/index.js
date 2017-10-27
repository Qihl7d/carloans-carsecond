import Vue from 'vue'
import Router from 'vue-router'
import { getStore } from '../utils/storage'
import { setTitle } from '../utils/util'

Vue.use(Router)


const Login = r => require.ensure([], () => r(require('@/views/login')), 'chunk-login')
const PwdLogin = r => require.ensure([], () => r(require('@/views/pwdLogin')), 'chunk-pwdlogin')
const FindPwd = r => require.ensure([], () => r(require('@/views/findPwd')), 'chunk-findpwd')
const SetPwd = r => require.ensure([], () => r(require('@/views/setPwd')), 'chunk-setpwd')

const Index = r => require.ensure([], () => r(require('@/views/index')), 'chunk-index')
const InfoLayout = r => require.ensure([], () => r(require('@/views/infoLayout')), 'chunk-infoLayout')
const PersonalInfo = r => require.ensure([], () => r(require('@/views/personalInfo')), 'chunk-personalinfo')
const WorkInfo = r => require.ensure([], () => r(require('@/views/workInfo')), 'chunk-workinfo')
const OtherInfo = r => require.ensure([], () => r(require('@/views/otherInfo')), 'chunk-otherinfo')
const Upload = r => require.ensure([], () => r(require('@/views/upload')), 'chunk-upload')

const SbmtSuccess = r => require.ensure([], () => r(require('@/views/sbmtSuccess')), 'chunk-sbmtsuccess')
const AddFriend = r => require.ensure([], () => r(require('@/views/addFriend')), 'chunk-addfriend')
const AddRelatives = r => require.ensure([], () => r(require('@/views/addRelatives')), 'chunk-addrelatives')
const LiberalProf = r => require.ensure([], () => r(require('@/views/liberalProf')), 'chunk-liberalProf')

const router = new Router({
    mode: 'history',
    routes: [
        { name: 'login', path: '/login', component: Login, meta: { auth: false, title: '输入手机号' } },
        { name: 'pwdlogin', path: '/pwdlogin', component: PwdLogin, meta: {auth: false, title: '登录'}},
        { name: 'findpwd', path: '/findpwd', component: FindPwd, meta: { auth: false, title: '忘记密码找回' } },
        { name: 'setpwd', path: '/setpwd', component: SetPwd, meta: { auth: false, title: '忘记密码找回' } },
        { name: 'index', path: '/index', component: Index, meta: { auth: false, title: '互联网购车“秒贷”新体验' } },
        {
            path: '/infolayout',
            component: InfoLayout,
            meta: {auth: false, title: '车秒贷'},
            children: [
                { name: 'personalinfo', path: 'personalinfo', component: PersonalInfo, meta: { auth: false, title: '个人信息' } },
                { name: 'workinfo', path: 'workinfo', component: WorkInfo, meta: { auth: false, title: '工作信息' } },
                { name: 'otherinfo', path: 'otherinfo', component: OtherInfo, meta: { auth: false, title: '其他信息' } },
                { name: 'upload', path: 'upload', component: Upload, meta: { auth: false, title: '证件上传' } },
            ]
        },        
        { name: 'sbmtsuccess', path: '/sbmtsuccess', component: SbmtSuccess, meta: { auth: false, title: '提交成功' } },
        { name: 'addfriend', path: '/addfriend', component: AddFriend, meta: { auth: false, title: '添加本地亲友' } },
        { name: 'addrelatives', path: '/addrelatives', component: AddRelatives, meta: { auth: false, title: '添加直系亲属' } },
        { name: 'liberalprof', path: '/liberalprof', component: LiberalProf, meta: { auth: false, title: '自由职业' } },
        { path: '*', redirect: { name: 'index' } }
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