<template>
    <div>
        <!-- 流程步骤组件 -->
        <page-navigation :current-index="navigationIndex"></page-navigation>
        <router-view class="mt20"></router-view>
    </div>
</template>

<script>
import _ from 'lodash'
import PageNavigation from "../components/pagenavigate.vue"
export default {
  data () {
    return {
      routerNameIndex: {
        personalInfo: 0,
        workInfo: 1,
        otherInfo: 2,
        upload: 3
      }
    }
  },
  computed: {
    navigationIndex () {
      return this.routerNameIndex[this.getPath()]
    }
  },
  methods: {
    getPath () {
      // lodash中_.split，拆分字符串返回数组，最后一个参数是数组的长度
      // this.$route.path获取路由的路径，这里获取的是如/infolayout/workinfo
      return _.last(_.split(this.$route.path,'/',3))
    }
  },
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

