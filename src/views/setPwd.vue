<template>
  <div>
    <p class="prompt-text">请设置您的新密码</p>
    <form class='form-wrap'>
      <!-- 拦截回车事件  -->
      <button></button>
      <div class="form-filed">
        <label class="label">设置密码</label>
        <input ref="mobileInput" class="value" type='password' placeholder="请输入登录密码" v-model.lazy="myForm.password"/>
      </div>
      <button type="submit" class='primary-button login-button' :class="{'btn-disabled': !isNextDisable}" :disabled="!isNextDisable">保存</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myForm: {
          password: ''
        },
        isNextDisable: false
      }
    }
  }
</script>