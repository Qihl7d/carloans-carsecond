<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap' @submit.prevent="baseInfoSubmit()">
        <div class="form-filed">
          <label class="label">参加工作日期</label>
          <input class="value" type='text' :class="{'text-readonly': nameIsReadOnly}" placeholder="请填写您的参加工作日期" v-model="myForm.name" :readonly='nameIsReadOnly'/>
        </div>
        <div class="form-filed on-border bottom">
          <label class="label">职业状况</label>
          <input class="value" :class="{'text-readonly': idNoIsReadOnly}" type='text' placeholder="请填写您本人的职业状况" v-model="myForm.idNo" :readonly='idNoIsReadOnly'/>
        </div>
        <div class="form-filed">
          <label class="label">职业备注</label>
          <input ref="bankCardInput" class="value" type='tel' placeholder="请您写您职业的相关说明" v-model.lazy="myForm.bankCard" @keyup="formatBankCard($event)"/>
        </div>        
        <!-- <button type="submit" class='primary-button top'>保存并下一步</button> -->
        <router-link to="/infolayout/workInfo" type="submit" class='primary-button login-button mb60 btn-line-none'>保存并下一步</router-link>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myForm: {
        name: "",
        idNo: ""
      },
      smsText: "发送验证码",
      isSendDisable: false,
      idNoIsReadOnly: false,
      nameIsReadOnly: false
    };
  },
  methods: {
    sendCode() {},
    formatBankCard() {},
    baseInfoSubmit() {},
    formatMobile() {}
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/var";
.identity-valid-container {
  .introduction-info {
    display: flex;
    height: 4rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: $middle-font-size;
    .text-bg {
      width: 100%;
      .img {
        height: 4rem;
        width: 100%;
      }
    }
  }
  .text-readonly {
    color: #999;
  }

  .sms-code {
    height: 1rem;
    width: 2rem;
    position: absolute;
    top: 0;
    right: 0px;
    background-color: $bg-color;
    font-size: $small-font-size;
    color: #999;
  }
}

// 暂用
.btn-line-none {
  text-decoration: none;
}
</style>