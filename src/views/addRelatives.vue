<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap mb600' @submit.prevent="baseInfoSubmit()">
        <selection :props='kinship.props' :model="kinship.model"></selection>
        <my-input :props='kinsName.props' :model='kinsName.model'></my-input>
        <my-input :props='kinsMobile.props' :model='kinsMobile.model'></my-input>
        <distpicker :props='kinsfolkAddress.props'
                    :province='kinsfolkAddress.province'
                    :model='kinsfolkAddress.model'
                    :city='kinsfolkAddress.city'
                    :area='kinsfolkAddress.area'
        ></distpicker>
         <my-input :props='kinsAddressDet.props' :model='kinsAddressDet.model'></my-input>
        <button type="submit" class='primary-button top'>保存</button>
      </form>
    </section>
  </div>
</template>

<script>
import Distpicker from "../components/distpickers/distpicker";
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
      kinsName: {
        props: {
          label: "直系亲属姓名",
          type: "text",
          placeholder: "请填写您本人的信用卡号",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "kinsName"
      },
      kinsMobile: {
        props: {
          label: "信用卡号",
          type: "text",
          placeholder: "请填写您本人的信用卡号",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "kinsMobile"
      },
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
        // province: "北京市",
        // city: "市辖区",
        // area: "朝阳区",
        model: "city"
      },
      kinsAddressDet: {
        props: {
          label: "详细地址",
          type: "text",
          placeholder: "请填写直系亲属详细地址信息",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "kinsAddressDet"
      }
    };
  },
  methods: {
    formatBankCard() {},
    baseInfoSubmit() {}
  },
  components: {
    Distpicker,
    Selection,
    MyInput
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