<template>
  <div id="app">
    <router-view></router-view>
    <my-toast
           :title="toast.title"
           :content="toast.content">
    </my-toast>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MyToast from './components/toast'
export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'toast'
    ])
  },
  components: {
    MyToast
  },
  created () {
  }
}
</script>

<style lang="scss">
  @import 'scss/app.scss';
</style>
