<template>
  <div class="work-info">
    <my-flow></my-flow>
    <section class="mt20">
      <form class="form-wrap">
        <div class="form-filed form-select">
           <label class="label">参加工作日期</label>
           <p class="select">
           <span>2017/9/9</span><img src="../assets/icon_right.png" alt=""/>
           </p>
         </div>
         <div class="form-filed form-select mt20">
           <label class="label">职业状况</label>
           <p class="select">
             <span>企业职员</span><img src="../assets/icon_right.png" alt=""/>
           </p>
         </div>
         <div>
           <div class="form-filed">
             <label class="label">工作单位全称</label>
             <input class="value" type="text" placeholder="请填写工作单位全称" v-model="myForm.wkunit"/>
           </div>
           <div class="form-filed form-select">
             <label class="label">单位地址</label>
             <p class="select">
               <span>选择省市区</span><img src="../assets/icon_right.png" alt=""/>
             </p>
           </div>
           <div class="form-filed">
             <label class="label">详细地址</label>
             <input class="value" type="text" placeholder="请填写详细单位地址" v-model="myForm.wkadres"/>
           </div>
           <div class="form-filed">
             <label class="label">单位电话</label>
             <input class="value" type="text" placeholder="请填写工作单位电话" v-model="myForm.wkadres"/>
           </div>
         </div>
         <div></div>
      </form>
    </section>
  </div>
</template>
<script>
  import MyFlow from "../components/flow.vue"
  export default {
    data(){
      return{
        myForm:{
          wkunit:'',
          wkadres:''
        }
      }
    },
    components:{
      MyFlow
    }
  }
</script>
<style lang="scss" scoped>
  .work-info{
    
  }
</style>