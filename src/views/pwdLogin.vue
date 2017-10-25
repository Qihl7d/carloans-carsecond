<template>
  <div class="login-container">
    <p class="prompt-text">请先用您的手机号登录</p>
    <form class='form-wrap' @submit.prevent="userLoginSubmit()">
      <!-- 拦截回车事件  -->
      <button></button>
      <div class="form-filed">
        <label class="label">手机号</label>
        <input ref="mobileInput" class="value" name="mobile" v-validate="'required|phone'" type='tel' placeholder="请输入手机号" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)"/>
      </div>
      <div class="form-filed">
        <label class="label">密码</label>
        <input class="value" type='password' name="password" v-validate="'required'"  placeholder="请输入登入密码" v-model.lazy="myForm.password"/>
      </div>
      <div class="form-filed">
        <label class="label">验证码</label>
        <input class="value" type='text' placeholder="请输入您的验证码" v-model="myForm.verificationCode"/>
        <button class='sms-code' :disabled="!isSendDisable" :class="{'able-activity': isSendDisable}" @click.prevent='sendCode'>{{smsText}}</button>
      </div>
      <!-- 原先的写法 -->
      <button type="submit" class='primary-button login-button' :class="{'btn-disabled': !isLoginDisable}">立即登录</button>

      <!-- <router-link to="/infolayout/personalInfo" type="submit" class='primary-button login-button btn-line-none'>立即登录</router-link> -->
    </form>
    <p class="p-findpwd"><router-link class="link-findpwd" to="/findpwd">忘记密码找回</router-link></p>
  </div>
</template>

<script>
// import { setCaretPosition } from '../utils/util'
  export default {
    data () {
      return {
        isSendDisable: false,
        isLoginDisable: false,
        url: '',
        myForm: {
          mobile: '',
          verificationCode: '',
          password: ''
        },
        smsText: '发送验证码'
      }
    },
    methods: {
      // setCaretPosition,
      // formatMobile (event) {
      //   const nodeInput = this.$refs.mobileInput
      //   let position = nodeInput.selectionStart
      //   let startLen = event.target.value.length
      //   let value = event.target.value.replace(/\D/g, '')
      //   if (value.length > 11) {
      //     value = value.substring(0, 11)
      //   }
      //   if (value.length === 11) {
      //     value = value.replace(/\B(?=(?:\d{4})+$)/g, ' ')
      //   }
      //   if (startLen - value.length > 0) {
      //     position = position - (startLen - value.length - 1)
      //   } else {
      //     position = position + Math.abs(startLen - value.length)
      //   }
      //   setTimeout(() => {
      //     this.setCaretPosition(nodeInput, position)
      //   }, 1)
      //   nodeInput.value = value
      //   this.myForm.mobile = value
      // },
      sendCode () {
      },
      userLoginSubmit () {
         this.$validator.validate('mobile', this.myForm.mobile).then((result) => {
          const {msg} = this.$validator.errors.items.length > 0 ? this.$validator.errors.items[0] : ''
          console.log(msg)
        })
        this.$validator.validate('password', this.myForm.password).then((result) => {
          const {msg} = this.$validator.errors.items.length > 0 ? this.$validator.errors.items[0] : ''
          console.log(msg)
        })
      }
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/var";
  .login-container {
    overflow: hidden;
    .form-wrap {
      .btn-line-none {
        text-decoration: none;
      }
    }
    .p-findpwd {
      display: flex;
      justify-content: center;
      margin-top: 6rem;
      .link-findpwd {
        color: #333;
        font-size: $middle-font-size;
        text-decoration: none;
      }
    }
  }
</style>