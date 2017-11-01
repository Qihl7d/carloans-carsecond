<template>
  <div class="sbmtsuccess">
     <div class="details">
        <div class="title">
          <img src="../assets/success.png" alt=""/>
          <span>提交成功!</span>
        </div>
        <p>我们会尽快审核您的贷款申请，如有疑问可联系您的信贷经理</p>
     </div>
     <button class='primary-button login-button'>完成</button>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import '../scss/var';
 .sbmtsuccess{
   display:flex;
   flex-direction:column;
   .details{
     padding:0.5rem 0;
     background-color:#fff;
     display:flex;
     align-items:center;
     justify-content:center;
     flex-direction:column;
     .title{
       font-size:$primary-font-size;
       display:flex;
      flex-direction: column;
       padding-bottom:0.4rem;
       img{
         width:1.52rem;
         height:1.52rem;
       }
     }
     p{
       font-size:0.24rem;
       color: #999;
     }
   }
 }
</style>