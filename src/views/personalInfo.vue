<template>
  <div class="personal-info">
    <section class="mt20">
      <form class="form-wrap">
         <div class="form-filed">
           <label class="label">姓名</label>
           <input class="value" type="text" placeholder="请填写您的真实姓名" v-model="myForm.name"/>
         </div>
         <div class="form-filed">
           <label class="label">身份证号</label>
           <input class="value" type="text" placeholder="请填写您的身份证号" v-model="myForm.idNo"/>
         </div>
         <distpicker :props='censusAddress.props'
                    :province='censusAddress.province'
                    :model='censusAddress.model'
                    :city='censusAddress.city'
                    :area='censusAddress.area'
        ></distpicker>
         <div class="form-filed">
           <label class="label">详细地址</label>
           <input class="value" type="text" placeholder="请填写详细户籍地址" v-model="myForm.adres"/>
         </div>
         <div class="form-filed mt20">
           <label class="label">税前月收入</label>
           <input class="value" type="text" placeholder="请填写您税前月收入" v-model="myForm.income"/>
           <label class="label-fs">元</label>
         </div>
         <selection :props='education.props' :model="education.model"></selection>
         <selection :props='marriage.props' :model="marriage.model"></selection>
         <selection :props='housing.props' :model="housing.model"></selection>
         <selection :props='mortgage.props' :model="mortgage.model"></selection>
         <div class="form-filed mt20">
           <label class="label-fs">当前住址与户籍地址相同</label>
         </div>
         <distpicker :props='nowAddress.props'
                    :province='nowAddress.province'
                    :model='nowAddress.model'
                    :city='nowAddress.city'
                    :area='nowAddress.area'
        ></distpicker>
         <div class="form-filed">
           <label class="label">详细地址</label>
           <input class="value" type="text" placeholder="请填写详细居住地址" v-model="myForm.idNo"/>
         </div>
         <router-link to="/infolayout/workInfo" type="submit" class='primary-button login-button mb60 btn-line-none'>保存并下一步</router-link>
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
        idNo: "",
        adres: "",
        income: ""
      },
      censusAddress: {
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
      education: {
        props: {
          title: "最高学历",
          defaultVal: "大学本科",
          selectType: "term",
          isShowSelect: false,
          isTriggerClick: true,
          isBorder: false,
          label: "label",
          value: "value",
          isNoArrow: false,
          list: [
            {
              label: "博士",
              value: 1
            },
            {
              label: "硕士",
              value: 2
            },
            {
              label: "大学本科",
              value: 3
            },
            {
              label: "专科",
              value: 4
            }
          ]
        },
        model: "loanPerods"
      },
      marriage: {
        props: {
          title: "婚姻状况",
          defaultVal: "已婚",
          selectType: "term",
          isShowSelect: false,
          isTriggerClick: true,
          isBorder: false,
          label: "label",
          value: "value",
          isNoArrow: false,
          list: [
            {
              label: "已婚",
              value: 1
            },
            {
              label: "未婚",
              value: 2
            }
          ]
        },
        model: "loanPerods"
      },
      housing: {
        props: {
          title: "住房情况",
          defaultVal: "自有房产",
          selectType: "term",
          isShowSelect: false,
          isTriggerClick: true,
          isBorder: false,
          label: "label",
          value: "value",
          isNoArrow: false,
          list: [
            {
              label: "自有房产",
              value: 1
            },
            {
              label: "租房",
              value: 2
            }
          ]
        },
        model: "loanPerods"
      },
      mortgage: {
        props: {
          title: "房贷状况",
          defaultVal: "是",
          selectType: "term",
          isShowSelect: false,
          isTriggerClick: true,
          isBorder: false,
          label: "label",
          value: "value",
          isNoArrow: false,
          list: [
            {
              label: "是",
              value: 1
            },
            {
              label: "否",
              value: 2
            }
          ]
        },
        model: "loanPerods"
      },
      nowAddress: {
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
  components: {
    Distpicker,
    Selection
  }
};
</script>
<style lang="scss" scoped>
@import "../scss/var.scss";
.personal-info {
}

//  暂用
.btn-line-none {
  text-decoration: none;
}
.mb60 {
  margin-bottom: 0.6rem;
}
</style>