<template>
  <div class="login-container login">
    <img src="../assets/login_logo.png" alt="复星金服" class="login-logo"/>
    <form class='form-wrap'>
      <!-- 拦截回车事件  -->
      <button></button>
      <div class="form-filed">
        <label class="label">手机号</label>
        <span class="number">{{phonenum()}}</span>
      </div>
      <div class="show">
        <sms-verification
          class="smsvfn"
          :is-send-disable='smsVer.isSendDisable'
          :props="smsVer.props" 
          :model="smsVer.model" v-if="!show">
        </sms-verification>
        <div class="form-filed pl30">
          <label class="label">{{show ? '密码' : '设置密码'}}</label>
          <input ref="mobileInput"  id="password" class="value" placeholder="请填写登录密码" v-model.lazy="myForm.password"/>
          <img src="../assets/eye.png"  alt="eye" class="eye" @click="changeSeen" v-if="!seen">
          <img src="../assets/open.png"  alt="eye" class="eye" @click="changeSeen" v-else>
        </div>
        <router-link class="find-pass" :to="'findpwd'">忘记密码</router-link>
        <div class="prompt" v-if="!show">8-10位字母、数字、符号两种或以上组合</div>
        <button type="submit" class='primary-button login-button' :class="{'btn-disabled': !isNextDisable}" @click="login">立即登录</button>
        <my-protocol :items='items' :bool='bool' :protocolChecked='protocolChecked' class="fscolor" v-if="!show"></my-protocol>
      </div>
    </form>
    <div class="login-bg"></div>
  </div>
</template>

<script>
  import MyProtocol from '../components/protocol'
  import SmsVerification from '../components/smsverification.vue'
  import smsCodeMixin from './_mixin/smsCodeMixin'
  import {getStore} from '../utils/storage'
  export default {
    mixins: [smsCodeMixin],
    data () {
      return {
        myForm: {
          password: ''
        },
        protocolChecked: '1',
        seen: true,
        show: true,
        isNextDisable: false,
        smsText: '',
        bool: false,
        items: [
          {
            path: '',
            protocol: '《个人信用报告查询授权书》'
          }
        ],
        smsVer: {
          isSendDisable: true,
          props: {
            label: '验证码',
            type: 'tel',
            placeholder: '请输入短信验证码',
            value: '',
            isBorder: false,
            rules: {
              required: true
            }
          },
          model: 'mobileCode'
        },
        phonenum: function () {
          const mobile = this.getStore('mobile')
          return mobile
        }
      }
    },
    methods: {
      getStore,
      changeSeen () {
        this.seen = !this.seen
        const inputType = this.seen ? 'text' : 'password'
        $('#password').attr('type', inputType)
      },
      login () {
        const mobile = this.getStore('mobile').replace(/\D/g, '')
        const mobileCode = this.show ? '' : this.mobileCode
        const password = this.myForm.password
        const param = Object.assign({}, {mobile, password, mobileCode, step: this.show ? 2 : 3})
        let redirect = decodeURIComponent(this.$route.query.redirect || '/')
        this.$store.dispatch('login', {param}).then(({data, code}) => {
          const {passCount} = data
          if (code === 'fail' && passCount && parseInt(passCount) >= 3) {
            this.eventBus.$emit('picAlert/show', true)
            return
          }
          if (code === 'succ') {
            this.$router.push({
              path: redirect
            })
          }
        })
      }
    },
    components: {
      MyProtocol,
      SmsVerification
    },
    created () {
      const mobile = this.getStore('mobile').replace(/\D/g, '')
      const param = Object.assign({}, {mobile, step: 1})
      console.log(mobile)
      // const param = Object.assign(this.myForm, {mobile})
      // console.log(param)
      // let redirect = decodeURIComponent(this.$route.query.redirect || '/')
      this.$store.dispatch('login', {param}).then(({data, code}) => {
        const {isReg} = data
        if (code === 'suss') {
          this.show = isReg
        }
      })
    }
  }
</script>
<style lang="scss">
  @import '../scss/var';
  .login-container {
    .form-wrap{
      position: relative;
    }
    .pl30{
      padding-left:$padding-left;
      padding-right:0
    }
    .form-filed{
      background-color:transparent;
      padding-left:$padding-left;
      margin-right: 0.3rem;
      &::after{
        border-bottom: 1px solid #fff;
      }
    }
    .label{
      color:#fff !important;
    }
    input{
      background-color:transparent;
    }
    input::-webkit-input-placeholder{
      color: #fff;
    } 
    .login-button{
      margin-top:0.65rem;
    }
    .prompt{
      top:3.15rem;
    }  
    .find-pass{
      font-size: 0.26rem;
      color:#fff;
      padding: 0.1rem 0.3rem;
      text-decoration: none;
      position: absolute;
      right: 0;
      top:2.05rem;
    }
    .value{
    color:#fff;
    }
    .smsvfn{
      .form-filed{
        background-color: transparent;
        .sms-code{
        height: 0.65rem;
        width: 1.6rem;
        top: 0.18rem;
        background: rgba(255,255,255,0.2);
        border-radius:0.06rem;
        color:#fff;
        }
      }
    }
    .show{
      display:flex;
      flex-direction:column;
    }
    .fscolor{
      .protocol-label{
        color:#fff !important;
      }
    }
  }
</style>S