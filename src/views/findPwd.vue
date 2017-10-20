<template>
  <div class="findpwd-container">
    <p class="prompt-text">请先用您的手机号登录</p>
    <form class='form-wrap'>
      <!-- 拦截回车事件  -->
      <button></button>
      <div class="form-filed">
        <label class="label">手机号</label>
        <input ref="mobileInput" class="value" type='tel' placeholder="请输入手机号" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)"/>
      </div>
      <div class="form-filed">
        <label class="label">验证码</label>
        <input class="value" type='tel' placeholder="请输入您的验证码" v-model="myForm.verificationCode"/>
        <button class='sms-code' :disabled="!isSendDisable" :class="{'able-activity': isSendDisable}" @click.prevent='sendCode'>{{smsText}}</button>
      </div>
      <router-link to="/setpwd" type="submit" class='primary-button login-button btn-line-none' >下一步</router-link>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myForm: {
          mobile: '',
          verificationCode: ''
        },
        isNextDisable: false,
        isSendDisable: false,
        smsText: '发送验证码'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/var";
  .findpwd-container {
    
  }

// 暂用
.btn-line-none {
  text-decoration: none;
}

</style>