<template>
  <div class="login-container login">
    <pic-alert :url='url' :mobile='phonenum()' :type='methodType'></pic-alert>
    <img src="../assets/login_logo.png" alt="复星金服" class="login-logo"/>
    <form class='form-wrap' @submit.prevent>
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
          <input ref="mobileInput" type="password"  id="password" class="value" placeholder="请填写登录密码" v-model.lazy="myForm.password"/>
          <img src="../assets/eye.png"  alt="eye" class="eye" @click="changeSeen" v-if="seen">
          <img src="../assets/open.png"  alt="eye" class="eye" @click="changeSeen" v-else>
        </div>
        <router-link class="find-pass" :to="'findpwd'" v-if="show">忘记密码</router-link>
        <div class="prompt" v-if="!show">8-10位字母、数字、符号两种或以上组合</div>
        <button type="submit" class='primary-button login-button' :class="{'btn-disabled': !isNextDisable}" @click="loginSubmitInfo">立即登录</button>
        <my-protocol v-on:protocolChange="protocolChange" :items='items' :bool='bool' :protocolChecked='protocolChecked' class="fscolor" v-if="!show"></my-protocol>
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
  import {mapGetters} from 'vuex'
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
        phonenum () {
          const mobile = this.getStore('mobile')
          return mobile
        }
      }
    },
    computed: {
      ...mapGetters([
        'applyEdit'
      ])
    },
    methods: {
      getStore,
      changeSeen () {
        this.seen = !this.seen
        const inputType = this.seen ? 'password' : 'text'
        $('#password').attr('type', inputType)
      },
      protocolChange () {},
      login (value = '') {
        console.log(this.applyEdit.mobileCode)
        const mobile = this.getStore('mobile').replace(/\D/g, '')
        const mobileCode = this.show ? '' : this.applyEdit.mobileCode
        const captcha = value
        const password = this.myForm.password
        const param = Object.assign({}, {mobile, password, mobileCode, captcha, step: this.show ? 2 : 3})

        this.$store.dispatch('login', {param}).then(({data, code, statusCode}) => {
          this.eventBus.$emit('picAlert/show', false)
          if (code === 'fail' && statusCode === '0001') {
            this.eventBus.$emit('picAlert/show', true)
            return
          }
          if (code === 'suss') {
            const redirect = getStore('redirect')
            this.$router.push({
              path: redirect
            })
          }
        })
      },
      loginSubmitInfo () {
        this.methodType = 1
        this.login()
      }
    },
    components: {
      MyProtocol,
      SmsVerification
    },
    created () {
      const mobile = this.getStore('mobile').replace(/\D/g, '')
      const param = Object.assign({}, {mobile, step: 1})
      this.$store.dispatch('login', {param}).then(({data, code}) => {
        const {isReg} = data
        if (code === 'suss') {
          this.show = isReg
        }
      })
      console.log(this.eventBus._events)
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
</style>