import * as types from '../mutation-types'
import _ from 'lodash'

const state = {
  toast: {
    title: '',
    content: ''
  },
  applyEdit: {},
  validatorMsg: {}
}

const getters = {
  toast: state => state.toast,
  validatorMsg: state => state.validatorMsg,
  applyEdit: state => state.applyEdit
}

const actions = {
}

const mutations = {
  [types.GET_CURRENT_DATA] ({pageSource}, {type}) {
    state.currentData = pageSource[type]
  },

  getValidatorMsg (state, item) {
    _.assign(state.validatorMsg, item)
  },

  cleanValidatorMsg () {
    state.validatorMsg = {}
  },

  changeApplyEdit (state, item) {
    _.assign(state.applyEdit, item)
  },

  cleanApplyEdit () {
    state.applyEdit = {}
  }
}

export default {
  actions,
  mutations,
  state,
  getters
}
