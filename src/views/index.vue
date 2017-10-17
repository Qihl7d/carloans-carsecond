<template>
  <div class="index">
    <p class="mt20">既然喜爱“贷”，何必等“贷”</p>
    <p>创富租赁联手天猫为您提供</p>
    <div class="btn-box">
      <router-link to="/login" class="primary-button btn-css">立刻体验</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/var';

.index {
  display: flex;
  flex-direction:column;
  p {
    font-size: $middle-font-size;
    text-align: center;
  }
  .btn-box {
    display: flex;
    flex-direction: column;
    .btn-css {
      text-decoration: none;
      margin-top: 2rem;
    }
  }
}
</style>
