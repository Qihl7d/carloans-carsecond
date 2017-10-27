<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap mb1000' @submit.prevent="baseInfoSubmit()">
        <selection :props='relFriends.props' :model="relFriends.model"></selection>        
        <my-input :props='localFRName.props' :model='localFRName.model'></my-input> 
        <my-input :props='localFRMobile.props' :model='localFRMobile.model'></my-input>       
        <button type="submit" class='primary-button top'>保存</button>
      </form>
    </section>
  </div>
</template>

<script>
import Selection from "../components/selection";
import MyInput from "../components/input";
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
      },
      localFRName: {
        props: {
          label: "本地亲友姓名",
          type: "text",
          placeholder: "请填写亲属的姓名",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "localFRName"
      },
      localFRMobile: {
        props: {
          label: "本地亲友手机",
          type: "text",
          placeholder: "请填写亲属的手机号",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "localFRMobile"
      }
    };
  },
  components: {
    Selection,
    MyInput
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