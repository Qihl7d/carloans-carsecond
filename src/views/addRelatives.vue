<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap mb600' @submit.prevent="baseInfoSubmit()">
        <selection :props='kinship.props' :model="kinship.model"></selection>
        <div class="form-filed on-border">
          <label class="label">直系亲属关系姓名</label>
          <input class="value" :class="{'text-readonly': idNoIsReadOnly}" type='text' placeholder="请填写亲属的姓名" v-model="myForm.idNo" :readonly='idNoIsReadOnly'/>
        </div>
        <div class="form-filed bottom">
          <label class="label">直系亲属关系手机</label>
          <input ref="bankCardInput" class="value" type='tel' placeholder="请您写亲属的手机号" v-model.lazy="myForm.bankCard" @keyup="formatBankCard($event)"/>
        </div>
        <distpicker :props='kinsfolkAddress.props'
                    :province='kinsfolkAddress.province'
                    :model='kinsfolkAddress.model'
                    :city='kinsfolkAddress.city'
                    :area='kinsfolkAddress.area'
        ></distpicker>
         <div class="form-filed">
          <label class="label">详细地址</label>
          <input ref="bankMobileInput" class="value" type='tel' placeholder="请填写直系亲属关系详细地址信息" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)"/>
        </div>
        <!-- <button type="submit" class='primary-button top'>保存</button> -->
        <router-link to="/infolayout/otherInfo" type="submit" class='primary-button login-button mb60 btn-line-none'>保存</router-link>
      </form>
    </section>
  </div>
</template>

<script>
import Distpicker from "../components/distpickers/distpicker";
import Selection from "../components/selection";
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
      nameIsReadOnly: false,
      kinship: {
        props: {
          title: "直系亲属关系",
          defaultVal: "配偶",
          selectType: "term",
          isShowSelect: false,
          isTriggerClick: true,
          isBorder: false,
          label: "label",
          value: "value",
          isNoArrow: false,
          list: [
            {
              label: "配偶",
              value: 1
            },
            {
              label: "父母",
              value: 2
            }
          ]
        },
        model: "loanPerods"
      },
      kinsfolkAddress: {
        props: {
          isAll: true,
          needDist: {
            110000: "北京市",
            310000: "上海市"
          },
          defaultVal: "选择省市区"
        },
        province: "北京市",
        city: "市辖区",
        area: "朝阳区",
        model: "city"
      },
    };
  },
  methods: {
    sendCode() {},
    formatBankCard() {},
    baseInfoSubmit() {},
    formatMobile() {}
  },
  components: {
    Distpicker,
    Selection
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
.mb600 {
  margin-bottom: 6rem;
}
.btn-line-none {
  text-decoration: none;
}
</style>