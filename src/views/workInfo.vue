<template>
  <div class="work-info">
    <section class="mt20">
      <form class="form-wrap" @submit.prevent="userLoginSubmit()">
        <div class="form-filed form-select">
           <label class="label">参加工作日期</label>
           <p class="select">
           <span>2017/9/9</span><img src="../assets/icon_arrow.png" alt=""/>
           </p>
         </div>
         <div class="form-filed form-select mt20">
           <label class="label">职业状况</label>
           <router-link to="/liberalprof" class="select btn-line-none c333">
             <span>自由职业</span><img src="../assets/icon_arrow.png" alt=""/>
           </router-link>
         </div>
         <div>
           <div class="form-filed">
             <label class="label">工作单位全称</label>
             <input class="value" type="text" placeholder="请填写工作单位全称" v-model="myForm.wkunit"/>
           </div>
           <distpicker :props='companyAdrress.props'
                    :province='companyAdrress.province'
                    :model='companyAdrress.model'
                    :city='companyAdrress.city'
                    :area='companyAdrress.area'
                    :areaLabel='companyAdrress.areaLabel'
        ></distpicker>
           <div class="form-filed">
             <label class="label">详细地址</label>
             <input class="value" type="text" placeholder="请填写详细单位地址" v-model="myForm.wkadres"/>
           </div>
           <div class="form-filed">
             <label class="label">单位电话</label>
             <input class="value" type="text" placeholder="请填写工作单位电话" v-model="myForm.wkadres"/>
           </div>
           <div class="form-filed form-select">
            <label class="label">参加工作日期</label>
            <p class="select">
              <span>2017/9/9</span><img src="../assets/icon_arrow.png" alt=""/>
            </p>
           </div>
           <div class="form-filed">
             <label class="label">岗位</label>
             <input class="value" type="text" placeholder="请填写工作岗位" v-model="myForm.wkadres"/>
           </div>
           <div class="form-filed">
             <label class="label">证明人同事</label>
             <input class="value" type="text" placeholder="请填写您的一位同事姓名" v-model="myForm.wkadres"/>
           </div>
           <div class="form-filed">
             <label class="label">证明人电话</label>
             <input class="value" type="text" placeholder="请填写您同事的联系电话" v-model="myForm.wkadres"/>
           </div>
         </div>
         <router-link to="/infolayout/otherInfo" type="submit" class='primary-button login-button mb60 btn-line-none'>保存并下一步</router-link>
      </form>
    </section>
  </div>
</template>
<script>
import Distpicker from "../components/distpickers/distpicker";
export default {
  data() {
    return {
      myForm: {
        wkunit: "",
        wkadres: ""
      },
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
      }
    };
  },
  methods: {
    userLoginSubmit () {
         this.$validator.validateAll().then((result) => {
          const {msg} = this.$validator.errors.items.length > 0 ? this.$validator.errors.items[0] : ''
          console.log(result)
          console.log(msg)
        })
      }
  },
  components: {
    Distpicker
  }
};
</script>
<style lang="scss" scoped>
.work-info {
}

//  暂用
.btn-line-none {
  text-decoration: none;
}
.mb60 {
  margin-bottom: 0.6rem;
}
.c333 {
  color: #333;
}
</style>