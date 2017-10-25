<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap mb1000' @submit.prevent="baseInfoSubmit()">
        <selection :props='relFriends.props' :model="relFriends.model"></selection>
        <div class="form-filed">
          <label class="label">本地亲友姓名</label>
          <input class="value" :class="{'text-readonly': idNoIsReadOnly}" type='text' placeholder="请填写亲属姓名" v-model="myForm.idNo" :readonly='idNoIsReadOnly'/>
        </div>
        <div class="form-filed">
          <label class="label">本地亲友手机</label>
          <input ref="bankCardInput" class="value" type='tel' placeholder="请您写亲属的手机号" v-model.lazy="myForm.bankCard" @keyup="formatBankCard($event)"/>
        </div>        
        <!-- <button type="submit" class='primary-button top'>保存</button> -->
        <router-link to="/infolayout/otherInfo" type="submit" class='primary-button login-button mb60 btn-line-none'>保存</router-link>
      </form>
    </section>
  </div>
</template>

<script>
import Selection from "../components/selection";
export default {
  data() {
    return {
      myForm: {
        name: "",
        idNo: ""
      },
      idNoIsReadOnly: false,
      nameIsReadOnly: false,
      relFriends: {
        props: {
          title: "本地亲友关系",
          defaultVal: "朋友",
          selectType: "term",
          isShowSelect: false,
          isTriggerClick: true,
          isBorder: false,
          label: "label",
          value: "value",
          isNoArrow: false,
          list: [
            {
              label: "朋友",
              value: 1
            },
            {
              label: "亲戚",
              value: 2
            }
          ]
        },
        model: "loanPerods"
      }
    };
  },
  components: {
    Selection
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
.form-wrap .form-filed .label {
  width: 3rem;
}
.mb1000 {
  margin-bottom: 10rem;
}
.btn-line-none {
  text-decoration: none;
}
</style>