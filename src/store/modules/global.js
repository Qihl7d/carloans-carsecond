import * as types from '../mutation-types'

const state = {
  toast: {
    title: '',
    content: ''
  }
}

const getters = {
  toast: state => state.toast
}

const actions = {
}

const mutations = {
  [types.GET_CURRENT_DATA] ({pageSource}, {type}) {
    state.currentData = pageSource[type]
  }
}

export default {
  actions,
  mutations,
  state,
  getters
}
