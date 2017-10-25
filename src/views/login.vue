<template>
  <div class="login-container">
    <p class="prompt-text">请先用您的手机号登录</p>
    <form class='form-wrap' @submit.prevent="userLoginSubmit()">
      <div class="form-filed">
        <label class="label">手机号</label>
        <input ref="mobileInput" class="value" name="mobile" v-validate="'required|phone'" type='tel' placeholder="请输入手机号" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)"/>
      </div>
      <button type="submit" class='primary-button login-button' :class="{'btn-disabled': !isLoginDisable}" :disabled="!isLoginDisable">下一步</button>
    </form>
  </div>
</template>

<script>
import { setCaretPosition } from "../utils/util";
export default {
  data() {
    return {
      isLoginDisable: false,
      myForm: {
        mobile: ""
      }
    };
  },
  methods: {
    setCaretPosition,
    // 格式化手机号，让手机号按一定规则空格隔开
    formatMobile(event) {
      const nodeInput = this.$refs.mobileInput;
      let position = nodeInput.selectionStart;
      let startLen = event.target.value.length;
      let value = event.target.value.replace(/\D/g, "");
      if (value.length > 11) {
        value = value.substring(0, 11);
      }
      if (value.length === 11) {
        value = value.replace(/\B(?=(?:\d{4})+$)/g, " ");
      }
      if (startLen - value.length > 0) {
        position = position - (startLen - value.length - 1);
      } else {
        position = position + Math.abs(startLen - value.length);
      }
      setTimeout(() => {
        this.setCaretPosition(nodeInput, position);
      }, 1);
      nodeInput.value = value;
      this.myForm.mobile = value;
    },
    userLoginSubmit() {
      this.$router.push({
        path: 'pwdLogin'
      })
    }
  },
  watch: {
    myForm: {
      deep: true,
      handler: function(mobile) {
        this.$validator.validate("mobile", this.myForm.mobile).then(result => {
          this.isLoginDisable = result;
        });
      }
    }
  }
};
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