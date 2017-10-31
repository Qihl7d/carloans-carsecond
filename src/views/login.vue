<template>
  <div class="login-container login">
    <img src="../assets/login_logo.png" alt="复星金服" class="login-logo"/>
    <form class='form-wrap' @submit.prevent="userLoginSubmit()">
      <div class="form-filed">
        <label class="label">手机号</label>
        <input ref="mobileInput" class="value" name="mobile" v-validate="'required|phone'" type='tel' placeholder="请输入手机号" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)" v-on:input="focusStatus"/>
        <img src="../assets/delete.png" alt="delete" class="delete-img" v-if="show" @click="deleteVal">
      </div>
      <button type="submit" class='primary-button login-button' :class="{'btn-disabled': !isLoginDisable}" :disabled="!isLoginDisable">下一步</button>
    </form>
    <div class="login-bg"></div>
  </div>
</template>

<script>
import { setCaretPosition } from "../utils/util";
import { setStore } from "../utils/storage";
export default {
  data() {
    return {
      isLoginDisable: false,
      show: false,
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
      const mobile = this.myForm.mobile;
      setStore("mobile", mobile);
      this.$router.push({
        path: "loginnext"
      });
    },
    focusStatus() {
      if (this.myForm.mobile !== "") {
        this.show = true
      }
    },
    deleteVal() {
      this.myForm.mobile = ""
      this.show = false
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
  .form-filed {
    background-color: transparent;
    padding-left: $padding-left;
    margin-right: 0.3rem;
    &::after {
      border-bottom: 1px solid #fff;
    }
  }
  .label {
    color: #fff;
  }
  input {
    background-color: transparent;
  }
  input::-webkit-input-placeholder {
    color: #fff;
  }
  .login-button {
    margin-top: 0.5rem;
  }
  .value {
    color: #fff;
  }
  .delete-img {
    width: 0.44rem;
    height: 0.28rem;
  }
}
</style>