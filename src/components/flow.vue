<template>
  <div class="flow">
      <p class="round gray-round"></p>
      <span>个人信息</span>
      <p class="line dash-line"></p>
      <p class="round white-round"></p>
      <span>工作信息</span>
      <p class="line dash-line"></p>
      <p class="round white-round"></p>
      <span>其他信息</span>
      <p class="line dash-line"></p>
      <p class="round white-round"></p>
      <span>证件上传</span>
    </div>
</template>
<script>
  
</script>
<style lang="scss" scoped>
  .flow{
      font-size:0.14rem;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:row;
      padding:0.2rem 0;
      background-color:#fff;
      .round{
        width:0.2rem;
        height:0.2rem;
        border-radius:50%;
        border:1px solid #666;
      }
      .white-round{
        background:#fff;
      }
      .gray-round{
        background-color:#ccc;
      }
      .line{
        border-width:1px;
        border-color:#ccc;
        width:0.5rem;
        margin:0 0.08rem;
      }
      .dash-line{
        border-style:dashed;
      }
      span{
        padding-left:0.08rem;
      }
    }
</style>