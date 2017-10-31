import PicAlert from '../../components/picalert'
import {url} from '../../utils/axios'
import _ from 'lodash'
export default {
  data () {
    return {
      url,
      methodType: 0,
      smsObj: {}
    }
  },
  methods: {
    sendCode (value) {
      let captcha = ''
      this.methodType = 0
      if (_.isObject(value)) {
        this.smsObj = value
      } else {
        captcha = value
      }
      const mobile = this.getStore('mobile').replace(/\D/g, '')
      const param = Object.assign({}, {mobile, type: this.smsObj.type, captcha})
      this.$store.dispatch('sendSmsCode', {param}).then(({data, code, statusCode}) => {
        if (code === 'fail' && statusCode === '0001') {
          this.eventBus.$emit('picAlert/show', true)
          return
        }
        if (code === 'suss') {
          this.eventBus.$emit('picAlert/show', false)
          this.eventBus.$emit('smsverification/countdown')
        }
      })
    },
    picAlertConfirm ({captchaCode, type}) {
      console.log(type)
      switch (type) {
        case 0:
          this.sendCode(captchaCode)
          break
        case 1:
          this.login(captchaCode)
          break
      }
    }
  },
  components: {
    PicAlert
  },
  mounted () {
    this.eventBus.$on('picAlert/confirm', this.picAlertConfirm)
    this.eventBus.$on('smsverification/send', this.sendCode)
  },
  destroyed () {
    this.eventBus.$off('smsverification/send')
    this.eventBus.$off('picAlert/confirm')
  }
}
