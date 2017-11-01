import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import global from './modules/global'
import apply from './modules/apply'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    global,
    apply,
    user
  },
  strict: debug
})
