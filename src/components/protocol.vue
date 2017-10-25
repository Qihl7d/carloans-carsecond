<template>
  <div class="protocol">
    <input type="checkbox" id="checkbox" checked="checked" name="protocol" value="0" v-model="protocolChecked" class="check-box">
    <label class="protocol-label" for="checkbox">
      我已阅读并同意 
      <router-link class="text-color" :class="{'font-color': bool}" v-for="(item, index) in items" :key="index" :to = "'{{item.path}}'">{{item.protocol}}</router-link>
    </label>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        protocolChecked: 1
      }
    },
    props: {
      items: {
        type: Array,
        default: []
      },
      bool: ''
    }
  }
</script>
<style lang="scss" scoped>
  .protocol{
    position: relative;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    margin-top: 0.3rem;
    .check-box {
    display: none;
    }
    .check-box + .protocol-label::before {
      content: '';
      position: absolute;
      top: 0.24rem;
      left: 0;
      border:1px solid #e0ac60;
      width:0.26rem;
      height:0.26rem;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      line-height: 0.4rem;
    }
    .check-box:checked + .protocol-label::before {
      background-color: #e0ac60;
    }
    .check-box:checked + .protocol-label::after {
      content: '';
      position: absolute;
      width: 0.16rem;
      height: 0.09rem;
      background: transparent;
      top: 0.29rem;
      left: 0.03rem;
      border:0.03rem solid #fff;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
    }
    .protocol-label {
      position: absolute;
      top: 0;
      color: #999;
      font-size: 0.26rem;
      padding-left: 0.4rem;
    }
    .text-color{
      text-decoration:none;
      color: #fff;
    }
    .font-color{
      color: #6596f0;
    }
  }
  
</style>

