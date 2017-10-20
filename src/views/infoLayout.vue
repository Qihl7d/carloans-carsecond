<template>
    <div>
        <!-- 流程步骤组件 -->
        <page-navigation class="mb20"></page-navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import PageNavigation from "../components/pagenavigate.vue";
export default {
  components: {
    PageNavigation
  }
};
</script>

<style scoped>
/* 暂用 */
  .mb20 {
    margin-bottom: 0.2rem;
  }
</style>

