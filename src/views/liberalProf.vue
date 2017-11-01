<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap' @submit.prevent="baseInfoSubmit()">
        <div class="form-filed bottom">
          <label class="label">参加工作日期</label>
          <input class="value" type='text' :class="{'text-readonly': nameIsReadOnly}" placeholder="请填写您的参加工作日期" v-model="myForm.name" :readonly='nameIsReadOnly'/>
        </div>
        <div class="form-filed">
          <label class="label">职业状况</label>
          <input class="value" :class="{'text-readonly': idNoIsReadOnly}" type='text' placeholder="请填写您本人的职业状况" v-model="myForm.idNo" :readonly='idNoIsReadOnly'/>
        </div>
        <div class="on-border textarea-wrap">
          <label class="label">职业备注</label>
          <textarea name="" id="" placeholder="请您写您职业的相关说明"></textarea>
        </div>        
        <button type="submit" class='primary-button top'>保存并下一步</button>
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
  .text-readonly {
    color: #999;
  }
  .textarea-wrap {
    font-size:0.32rem;
    background:#fff;
    color:#444;
    padding: 0.3rem 0.3rem;
    textarea {
      border:1px solid #eee;
      width:6.9rem;
      height:1.5rem;
      margin-top:0.3rem;
      font-size: 0.32rem;
      padding: 0.2rem;
      color: #ccc;
    }
  }
}

</style>