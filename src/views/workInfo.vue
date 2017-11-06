<template>
  <div class="work-info">
    <section class="mt20">
      <form class="form-wrap" @submit.prevent="userLoginSubmit()">
        <div class="form-filed form-select bottom border-top" style="justify-content: space-between">
           <label class="label">参加工作日期</label>
           <p class="select" style="padding-right:0.3rem;" @click="getWorkDate">
           <span style="font-size: 0.32rem;color: #333;display:block;margin-top:0.05rem;">{{ workDate }}</span><span class="arrow-right" style="right:0.3rem;"></span>
           </p>
         </div>
         <div class="form-filed form-select mt20" style="justify-content: space-between">
           <label class="label">职业状况</label>
           <router-link to="/liberalprof" class="select" style="text-decoration:none;padding-right: 0.3rem;">
             <span style="font-size: 0.32rem;color: #333;display:block;margin-top:0.05rem;">自由职业</span><span class="arrow-right" style="right:0.3rem;"></span>
           </router-link>
         </div>
           <my-input :props='companyName.props' :model='companyName.model'></my-input>
           <distpicker :props='companyAdrress.props'
                    :province='companyAdrress.province'
                    :model='companyAdrress.model'
                    :city='companyAdrress.city'
                    :area='companyAdrress.area'
                    :areaLabel='companyAdrress.areaLabel'
        ></distpicker>
           <my-input :props='companyAddressDet.props' :model='companyAddressDet.model'></my-input>
           <my-input class="bottom" :props='companymobile.props' :model='companymobile.model'></my-input>           
           <div class="form-filed form-select" style="justify-content: space-between">
            <label class="label">入职日期</label>
            <p class="select" style="padding-right:0.3rem;" @click="getEntryDate">
              <span style="font-size: 0.32rem;color: #333;display:block;margin-top:0.05rem;">{{ entryDate }}</span><span class="arrow-right" style="right:0.3rem;"></span>
            </p>
           </div>
           <my-input :props='station.props' :model='station.model'></my-input>
           <my-input :props='witnessPartner.props' :model='witnessPartner.model'></my-input>
           <my-input :props='witnessMobile.props' :model='witnessMobile.model'></my-input>
           <button type="submit" class='primary-button top mb60'>保存并下一步</button>
      </form>
    </section>
  </div>
</template>
<script>
import Distpicker from "../components/distpickers/distpicker";
import MyInput from "../components/input";
export default {
  data() {
    return {
      myForm: {
        wkunit: "",
        wkadres: ""
      },
      workDate: "请选择",
      entryDate: "请选择",
      companyAdrress: {
        props: {
          isAll: true,
          needDist: {
            110000: "北京市",
            310000: "上海市"
          },
          defaultVal: "北京市-市辖区-朝阳区"
        },
        // province: "北京市",
        // city: "市辖区",
        // area: "朝阳区",
        model: "city",
        areaLabel: "户籍地址"
      },
      companyName: {
        props: {
          label: "工作单位全称",
          type: "text",
          placeholder: "请填写工作单位全称",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "companyName"
      },
      companyAddressDet: {
        props: {
          label: "详细地址",
          type: "text",
          placeholder: "请填写详细单位地址",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "companyAddressDet"
      },
      companymobile: {
        props: {
          label: "单位电话",
          type: "text",
          placeholder: "请填写工作单位电话",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "companymobile"
      },
      station: {
        props: {
          label: "岗位",
          type: "text",
          placeholder: "请填写工作岗位",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "station"
      },
      witnessPartner: {
        props: {
          label: "证明人(同事)",
          type: "text",
          placeholder: "请填写您的一位同事姓名",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "witnessPartner"
      },
      witnessMobile: {
        props: {
          label: "证明人电话",
          type: "text",
          placeholder: "请填写您同事的联系电话",
          isBorder: true,
          isBottom: false,
          value: "",
          rules: {
            required: true
          }
        },
        model: "witnessMobile"
      }
    };
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
    },
    getWorkDate() {
      this.$calendar.show({
        onOk: workDate => {
          this.workDate = workDate;
        }
      });
    },
    getEntryDate() {
      this.$calendar.show({
        onOk: entryDate => {
          this.entryDate = entryDate;  
        }
      });
    }
  },
  components: {
    Distpicker,
    MyInput
  }
};
</script>
<style lang="scss" scoped>
.work-info {
}
</style>