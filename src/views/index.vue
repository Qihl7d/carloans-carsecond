<template>
  <div class="index">
    <section class="first-screen">
      <div class="top-bg"></div>
      <div class="content">
        <h4>互联网购车“秒贷”新体验</h4>
        <button class="primary-button btn-radius" @click="pushPage">立刻体验</button>
      </div>
    </section>

    <section class="second-screen">
      <div class="div-down mt-25">
        <img src="../assets/icon_down.png" alt="">
      </div>
      <img class="chuangfu_logo" src="../assets/chuangfu_logo.png" alt="创富logo">
      <h4>创富租赁，<span>“贷”</span>你开上梦想座驾</h4>
      <p>一站式购车服务，创富为您</p>
      <ul>
        <li>省钱</li>
        <li>省心</li>
        <li>省时</li>
      </ul>
      <div class="div-down mb-25"></div>
      <div class="advantage">
        <div class="advan-top"><img src="../assets/chuang_advan.png" alt="创富优势"></div>
        <div class="advan-txt"></div>
      </div>
    </section>

    <section class="third-screen">
      <div class="div-down-wrap">
        <div class="div-down mt-25">
          <img src="../assets/icon_down.png" alt="">
        </div>
      </div>      
      <div class="brand-top"><img src="../assets/cooperation-brand.png" alt=""></div>
      <ul class="ul-wrap">
        <li class="li-wrap">
          <ul>
            <li><img src="../assets/carlogo01.jpg" alt="特斯拉" style="width:1.36rem; height:1.24rem"></li>        
            <li><img src="../assets/carlogo02.jpg" alt="法拉利" style="width:1.05rem; height:1.19rem"></li>        
            <li><img src="../assets/carlogo03.jpg" alt="玛莎拉蒂" style="width:1.28rem; height:1.26rem"></li>        
            <li><img src="../assets/carlogo04.jpg" alt="宝马" style="width:1.5rem; height:1.37rem"></li> 
          </ul>
        </li>

        <li class="li-wrap">  
          <ul>  
            <li><img src="../assets/carlogo05.jpg" alt="沃尔沃" style="width:1.44rem; height:1.34rem"></li>        
            <li><img src="../assets/carlogo06.jpg" alt="奥迪" style="width:1.47rem; height:0.58rem"></li>        
            <li><img src="../assets/carlogo07.jpg" alt="奔驰" style="width:1.31rem; height:1.19rem"></li>        
            <li><img src="../assets/carlogo08.jpg" alt="凯迪拉克" style="width:1.45rem; height:1.44rem"></li> 
          </ul>   
        </li>      
      </ul>
      <div class="div-down-wrap">
        <div class="div-down mb-25"></div>
      </div>      
      <div class="brand-bottom">
        <img class="slogan" src="../assets/slogan.png" alt="有梦想，别‘等待’">
        <p>拨打VIP专线，体验尊贵购车服务</p>
        <h3>4008-202-728</h3>
        <img class="fosun_logo" src="../assets/fosun_logo.png" alt="复星">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    pushPage () {
      this.$router.push({
        path: '/login'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/var";
.index {
  // 公共
  .mt-25 {
    margin-top: -0.25rem;
  }
  .mb-25 {
    margin-bottom: -0.25rem;
  }
  .div-down {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      img {
        width: 0.23rem;
        height: 0.13rem;
      }
    }
  // 第一屏
  .first-screen {
    width: 100%;
    height: 100%;
    .top-bg {
      background: url(../assets/firstTop_bg.jpg) no-repeat center;
      background-size: 100% 8.73rem;
      width: 100%;
      height: 8.73rem;
    }
    .content {
      background-color: #df3b3b;
      width: 100%;
      height: 3.25rem;
      display: flex;
      flex-direction: column;
      h4 {
        font-size: 0.42rem;
        color: #fff;
        align-self: center;
        margin-top: 0.4rem;
        line-height: 1;
      }
      .btn-radius {
        border-radius: 0.5rem;
      }
    }
  }
  // 第二屏
  .second-screen {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;    
    .chuangfu_logo {
      margin: 0.6rem 0 0.4rem 0;
      width: 0.8rem;
      height: 0.8rem;
    }
    h4 {
      font-size: $small-font-size;
      line-height: 1;
      margin: 0 0 0.2rem 0;
      span {
        font-size: $primary-font-size;
      }
    }
    p {
      font-size: 0.2rem;
    }
    ul {
      display: flex;
      flex-direction: row;
      color: #fff;
      font-size: $middle-font-size;
      margin: 0.5rem 0;
      li {
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        text-align: center;
        line-height: 1.3rem;
        margin: 0 0.3rem;
      }
      li:nth-child(1) {
        background-color: #cda76e;
        box-shadow: 0 0.1rem 0.2rem rgba(245, 231, 210, 0.3);
      }
      li:nth-child(2) {
        background-color: #07b7f3;
        box-shadow: 0 0.1rem 0.2rem rgba(7, 183, 243, 0.3);
      }
      li:nth-child(3) {
        background-color: #df3b3b;
        box-shadow: 0 0.1rem 0.2rem rgba(223, 59, 59, 0.3);
      }
    }
    .advantage {
      width: 100%;
      background-color: #c21e1e;
      .advan-top {
        width: 100%;
        height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 5.6rem;
          height: 0.33rem;
        }
      }
      .advan-txt {
        width: 100%;
        height: 7.2rem;
        margin-bottom: 0.83rem;
        background: url(../assets/advantage.jpg) no-repeat center center;
        background-size: 7.5rem 7.2rem;
      }
    }
  }
  // 第三屏
  .third-screen {
    .div-down-wrap {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    background-color: #fff;
    .brand-top {
      width: 100%;
      height: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      img {
        width: 5.6rem;
        height: 0.33rem;
      }
    }
    .ul-wrap {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0.3rem 0.7rem;
      .li-wrap {
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-around;         
        }
      }
    }
    .brand-bottom {
      width: 100%;
      background-color: #c21e1e;
      display: flex;      
      flex-direction: column;
      align-items: center;
      color: #fff;
      .slogan {
        width: 5.16rem;
        height: 0.63rem;
        margin: 1rem 0;
      }
      p {
        font-size: 0.26rem;
      }
      h3 {
        font-size: 0.48rem;
        margin: 0.3rem 0 0.85rem 0;
        line-height: 1;
      } 
      .fosun_logo {
        width: 6.75rem;
        height: 1.6rem;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
