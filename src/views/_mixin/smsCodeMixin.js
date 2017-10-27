import PicAlert from '../../components/picalert'
import {url} from '../../utils/axios'
export default {
  data () {
    return {
      url,
      mobileCode: ''
    }
  },
  methods: {
    sendCode (value) {
      this.mobileCode = value.mobileCode
      // TODO 1.发送验证码成功后发送成功后倒计时 2.发送验证码错误、且超过三次弹图片框
      this.eventBus.$emit('smsverification/countdown')
      this.eventBus.$emit('picAlert/show', true)
      const mobile = this.getStore('mobile').replace(/\D/g, '')
      console.log(mobile)
      const param = Object.assign({}, {mobile, type: value.type})
      console.log(param)
      this.$store.dispatch('sendSmsCode', {param}).then(({data, code}) => {
        console.log(data)
        console.log(code)
        if (code === 'suss') {
          console.log('发送验证码')
        }
      })
    }
  },
  components: {
    PicAlert
  },
  created () {
    this.eventBus.$on('smsverification/send', this.sendCode)
  },
  destroyed () {
    this.eventBus.$off('smsverification/send')
  }
}
