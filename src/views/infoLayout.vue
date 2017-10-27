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
        // 注意：这里路由的名字全部用小写
        personalinfo: 0,
        workinfo: 1,
        otherinfo: 2,
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

</style>

