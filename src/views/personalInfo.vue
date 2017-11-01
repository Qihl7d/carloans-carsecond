<template>
  <div class="personal-info">
    <section class="mt20">
      <form class="form-wrap" @submit.prevent="userLoginSubmit()">
         <my-input class="border-top" :props='name.props' :model='name.model'></my-input>
         <my-input :props='idNo.props' :model='idNo.model'></my-input>
         <distpicker name="censusAdr" v-validate="'required'" v-model="myForm.censusAdr" :props='censusAddress.props'
                    :province='censusAddress.province'
                    :model='censusAddress.model'
                    :city='censusAddress.city'
                    :area='censusAddress.area'
                    :areaLabel='censusAddress.areaLabel'
        ></distpicker>
         <my-input :props='censusDet.props' :model='censusDet.model'></my-input>
         <my-input :props='income.props' :model='income.model'></my-input>
         <selection :props='education.props' :model="education.model"></selection>
         <selection :props='marriage.props' :model="marriage.model"></selection>
         <selection :props='housing.props' :model="housing.model"></selection>
         <selection :props='mortgage.props' :model="mortgage.model"></selection>
         <switch-button></switch-button>
         <distpicker name="nowAdr" :props='nowAddress.props'
                    :province='nowAddress.province'
                    :model='nowAddress.model'
                    :city='nowAddress.city'
                    :area='nowAddress.area'
                    :areaLabel='nowAddress.areaLabel'
        ></distpicker>
        <my-input :props='nowDet.props' :model='nowDet.model'></my-input>
        <button type="submit" class='primary-button login-button mb60' >保存并下一步</button>
      </form>
    </section>
  </div>
</template>

<script>
import Distpicker from "../components/distpickers/distpicker";
import Selection from "../components/selection";
import switchButton from "../components/switch";
import MyInput from "../components/input";
export default {
  data() {
    return {
      myForm: {
        name: "",
        idNo: "",
        censusAdr: "",
        censusDet: "",
        income: "",
        nowAdr: "",
        nowDet: ""
      },
      name: {
        props: {
          label: "姓名",
          type: "text",
          placeholder: "请填写您的真实姓名",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "name"
      },
      idNo: {
        props: {
          label: "身份证号",
          type: "text",
          placeholder: "请填写您身份证号码",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "idNo"
      },
      censusAddress: {
        props: {
          isAll: true,
          needDist: {
            110000: "北京市",
            310000: "上海市"
          },
          defaultVal: "请选择"
        },
        // 如果省市区有默认值，那么就在下面三个参数中写上默认值，如果想显示“请选择省市区”，那么就把这3个参数注释了
        // province: "北京市",
        // city: "市辖区",
        // area: "朝阳区",
        model: "city",
        areaLabel: "户籍地址"
      },
      censusDet: {
        props: {
          label: "详细地址",
          type: "text",
          placeholder: "请填写详细户籍地址",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "censusDet"
      },
      income: {
        props: {
          label: "税前月收入",
          type: "text",
          placeholder: "请填写您税前月收入",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "income"
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
            { label: "研究生", value: 1 },
            { label: "大学本科", value: 2 },
            { label: "技术学校", value: 3 },
            { label: "高中", value: 4 },
            { label: "初中", value: 5 },
            { label: "小学", value: 6 },
            { label: "文盲或半", value: 7 },
            { label: "文盲", value: 8 },
            { label: "未知", value: 9 }
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
            { label: "已婚", value: 1 },
            { label: "未婚", value: 2 },
            { label: "其他", value: 3 }
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
            { label: "自有房产", value: 1 },
            { label: "与家人同住", value: 2 },
            { label: "租赁", value: 3 },
            { label: "公司宿舍", value: 4 },
            { label: "其他", value: 5 }
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
          defaultVal: "请选择"
        },
        // province: "北京市",
        // city: "市辖区",
        // area: "朝阳区",
        model: "city",
        areaLabel: "当前住址"
      },
      nowDet: {
        props: {
          label: "详细地址",
          type: "text",
          placeholder: "请填写详细居住地址",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "nowDet"
      },
    };
  },
  created() {
    if (this.censusAdr == "请选择省市区") {
      console.log(2222);
    }
  },
  methods: {
    userLoginSubmit() {
      this.$validator.validateAll().then(result => {
        const { msg } =
          this.$validator.errors.items.length > 0
            ? this.$validator.errors.items[0]
            : "";
        console.log(result);
        console.log(msg);
      });
    }
  },
  components: {
    Distpicker,
    Selection,
    switchButton,
    MyInput
  }
};
</script>
<style lang="scss" scoped>
@import "../scss/var.scss";
</style>