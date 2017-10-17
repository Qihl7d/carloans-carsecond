<template>
  <div class="login-container">
    <pic-alert :url='url'></pic-alert>
    <p class="prompt-text">请先用您的手机号登录</p>
    <form class='form-wrap' @submit.prevent="userLoginSubmit()">
      <!-- 拦截回车事件  -->
      <button></button>
      <div class="form-filed">
        <label class="label">手机号</label>
        <input ref="mobileInput" class="value" type='tel' placeholder="请输入手机号" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)"/>
      </div>
      <div class="form-filed">
        <label class="label">密码</label>
        <input ref="mobileInput" class="value" type='tel' placeholder="请输入登入密码" v-model.lazy="myForm.password"/>
      </div>
      <div class="form-filed">
        <label class="label">验证码</label>
        <input class="value" type='tel' placeholder="请输入您的验证码" v-model="myForm.verificationCode"/>
        <button class='sms-code' :disabled="!isSendDisable" :class="{'able-activity': isSendDisable}" @click.prevent='sendCode'>{{smsText}}</button>
      </div>
      <div class="form-filed">
        <label class="label">设置密码</label>
        <input ref="mobileInput" class="value" type='tel' placeholder="请输入登入密码" v-model.lazy="myForm.password"/>
      </div>
      <button type="submit" class='primary-button login-button' :class="{'btn-disabled': !isLoginDisable}" :disabled="!isLoginDisable">立即登录</button>
    </form>
    <p class="p-findpwd"><router-link class="link-findpwd" to="/findpwd">忘记密码找回</router-link></p>
  </div>
</template>

<script>
  import PicAlert from '../components/picalert'
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
      formatMobile () {
      },
      sendCode () {
      },
      userLoginSubmit () {
      }
    },
    components: {
      PicAlert
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/var";
  .login-container {
    overflow: hidden;
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