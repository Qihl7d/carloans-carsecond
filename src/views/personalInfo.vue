<template>
  <div class="personal-info">
    <my-flow></my-flow>
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
         <div class="form-filed form-select">
           <label class="label">户籍地址</label>
           <p class="select">
           <span>选择省市区</span><img src="../assets/icon_right.png" alt=""/>
           </p>
         </div>
         <div class="form-filed">
           <label class="label">详细地址</label>
           <input class="value" type="text" placeholder="请填写详细户籍地址" v-model="myForm.adres"/>
         </div>
         <div class="form-filed mt20">
           <label class="label">税前月收入</label>
           <input class="value" type="text" placeholder="请填写您税前月收入" v-model="myForm.income"/>
           <label class="label-fs">元</label>
         </div>
         <div class="form-filed form-select">
           <label class="label">最高学历</label>
           <p class="select">
           <span>大学本科</span><img src="../assets/icon_right.png" alt=""/>
           </p>
         </div>
         <div class="form-filed form-select">
           <label class="label">婚姻状况</label>
           <p class="select">
           <span>已婚</span><img src="../assets/icon_right.png" alt=""/>
           </p>
         </div>
         <div class="form-filed form-select">
           <label class="label">住房情况</label>
           <p class="select">
           <span>自有房产</span><img src="../assets/icon_right.png" alt=""/>
           </p>
         </div>
         <div class="form-filed form-select">
           <label class="label">房贷状况</label>
           <p class="select">
           <span>是</span><img src="../assets/icon_right.png" alt=""/>
           </p>
         </div>
         <div class="form-filed mt20">
           <label class="label-fs">当前住址与户籍地址相同</label>
         </div>
      </form>
    </section>
  </div>
</template>
<script>
  import MyFlow from '../components/flow.vue'
  export default {
    data(){
      return{
        myForm:{
          name:'',
          idNo:'',
          adres:'',
          income:''
        }
      }
    },
    components: {
      MyFlow
    }
  }
</script>
<style lang="scss" scoped>
@import "../scss/var.scss";
  .personal-info{
      
  }
</style>