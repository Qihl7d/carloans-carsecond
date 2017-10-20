<template>
  <div class="sms-container">
    <sms-input :props='props' :model='model'>
      <button slot="input-slot" class='sms-code' 
        :disabled="!isCountDisable" 
        :class="{'able-activity': isCountDisable}" 
        v-text="countText" @click.prevent='sendCode()'>
      </button>
    </sms-input>
  </div>
</template>

<script>
  import SmsInput from './input.vue'
  export default {
    data () {
      return {
        countInterval: '',
        countText: this.smsText,
        isCountDisable: this.isSendDisable
      }
    },
    props: {
      smsText: {
        type: String,
        default: '发送验证码'
      },
      isSendDisable: {
        type: Boolean,
        default: false
      },
      props: {
        type: Object,
        default: {}
      },
      model: {
        type: String,
        default: ''
      }
    },
    methods: {
      sendCode () {
        console.log('sendCode')
        this.eventBus.$emit('smsverification/send')
      },
      // 60秒倒计时
      countdown () {
        let count = 60
        window.clearInterval(this.countInterval)
        this.countInterval = setInterval(() => {
          if (count > 0) {
            this.countText = `${count--}s`
            this.isCountDisable = false
          } else {
            clearInterval(this.countInterval)
            this.countText = '发送验证码'
            this.isCountDisable = true
          }
        }, 1000)
      },
      closeInterval () {
        this.countInterval && window.clearInterval(this.countInterval)
      }
    },
    components: {
      SmsInput
    },
    created () {
      this.eventBus.$on('smsverification/countdown', this.countdown)
    },
    destroyed () {
      this.eventBus.$off('smsverification/countdown')
    }
  }
</script>

<style lang="scss" scoped>
  .sms-container {
    .sms-code {
        height: 1rem;
        width: 2rem;
        position: absolute;
        top: 0;
        right: 0px;
        background-color: #f5f5f5;
        font-size: 0.28rem;
        color: #999;
    }
    .able-activity {
      background-color: #ffefea;
      color: #ff6633
    }
  }
</style>
