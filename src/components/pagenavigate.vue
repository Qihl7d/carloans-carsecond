<template>
  <div class="flow">
    <div class="flow-map">
      <div class="pentagram" :style="pentagramStyle">
        <img src="../assets/star_five.png" alt="" class="star"/>
      </div>
      <!-- 空心圆hollow-round 实心圆solid-round -->
      <div class="round hollow-round" :class="{'solid-round': currentIndex >= 0}"></div>
      <div class="line"></div>
      <div class="round hollow-round" :class="{'solid-round': currentIndex >= 1}"></div>
      <div class="line"></div>
      <div class="round hollow-round" :class="{'solid-round': currentIndex >= 2}"></div>
      <div class="line"></div>
      <div class="round hollow-round" :class="{'solid-round': currentIndex >= 3}"></div>
    </div>
    <div class="flow-text">
      <span class="text" :class="{'text-color': index === currentIndex}" v-for="(item, index) in labelText" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        labelText: ['个人信息', '工作信息', '其他信息', '材料上传']
      }
    },
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    computed: {
      pentagramStyle () {
        return {
          left: `${1.2 + this.currentIndex * 1.5}rem`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flow{
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    background-color: #fff;
    .flow-map{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .pentagram{
      position: absolute;
      top: 50%;
      left: 1.2rem;
      margin-top: -0.25rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: #cda76e;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .star{
      width: 0.24rem;
    }
    .line{
      width: 1.35rem;
      border-top:1px dashed #cda76e;
    }
    .round{
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
    }
    .solid-round{
      background-color:#cda76e; 
    }
    .hollow-round{
      border:1px solid #cda76e;
    }
    .flow-text{
      display: flex;
      flex-direction: row;
      font-size: 0.24rem;
      justify-content: center;
      margin-top: 0.2rem;
    }
    .text{
      display: flex;
      width: 1.55rem;
      justify-content: center;
    }
    .pl40{
      padding-left: 0.4rem;
    }
    .text-color{
      color:#cda76e;
    }
  }
</style>

