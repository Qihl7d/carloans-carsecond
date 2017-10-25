<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap' @submit.prevent="baseInfoSubmit()">
        <div class="form-filed form-select">
          <label class="label">身份证正反面</label>
          <p class="select" @click="showBox('photobox1')">
           <span>未上传</span><img src="../assets/icon_arrow.png" alt=""/>
          </p>          
        </div>
        <!-- 上传身份证隐藏框 -->
        <div class="photo-box" v-show="photobox1">
          <img src="../assets/idcard_front.png" alt="上传身份证正面">
          <img src="../assets/idcard_back.png" alt="上传身份证反面">
        </div>
        <div class="form-filed form-select">
          <label class="label">驾驶证照片</label>
          <p class="select" @click="showBox('photobox2')">
           <span>已上传</span><img src="../assets/icon_arrow.png" alt=""/>
          </p>
        </div>
        <!-- 上传驾驶证隐藏框 -->
        <div class="photo-box" v-show="photobox2">
          <img src="../assets/idcard_front.png" alt="上传身份证正面">
          <img src="../assets/idcard_back.png" alt="上传身份证反面">
        </div>
        <div class="form-filed form-select">
          <label class="label">结婚证照片</label>
          <p class="select" @click="showBox('photobox3')">
           <span>已上传</span><img src="../assets/icon_arrow.png" alt=""/>
          </p>
        </div>
        <!-- 上传结婚证隐藏框 -->
        <div class="photo-box" v-show="photobox3">
          <img src="../assets/idcard_front.png" alt="上传身份证正面">
          <img src="../assets/idcard_back.png" alt="上传身份证反面">
        </div>
        <div class="form-filed form-select">
          <label class="label">其他证件照</label>
          <p class="select" @click="showBox('photobox4')">
           <span>已上传</span><img src="../assets/icon_arrow.png" alt=""/>
          </p>
        </div>
         <!-- 上传其他证件隐藏框 -->
        <div class="photo-box" v-show="photobox4">
          <img src="../assets/idcard_front.png" alt="上传身份证正面">
          <img src="../assets/idcard_back.png" alt="上传身份证反面">
        </div>
        <!-- <button type="submit" class='primary-button top'>提交</button> -->
        <router-link to="/sbmtsuccess" type="submit" class='primary-button login-button btn-line-none'>提交</router-link>
        <p class="protocol fs28">
          <input type="checkbox" id="checkbox" checked="checked" name="protocol" value="1" class="check-box">
          <label class="protocol-label" for="checkbox">
            我已阅读并同意
          </label>
          <a class="protocol-link aCss" href="#" target="_blank">《车秒贷产品申明》</a>
        </p>
      </form>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myForm: {
          name: '',
          idNo: ''
        },
        photobox1: false,
        photobox2: false,
        photobox3: false,
        photobox4: false,
      }
    },
    methods: {
      showBox (photobox) {
        if (photobox === 'photobox1') {
          this.photobox1 = !this.photobox1
        } else if (photobox === 'photobox2') {
          this.photobox2 = !this.photobox2
        } else if (photobox === 'photobox3') {
          this.photobox3 = !this.photobox3
        } else if (photobox === 'photobox4') {
          this.photobox4 = !this.photobox4
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/var";
  .identity-valid-container {
    .introduction-info {
      display: flex;
      height: 4.0rem;
      margin-bottom: 0.2rem;
      background-color: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: $middle-font-size;
      .text-bg {
        width: 100%;
        .img {
          height: 4.0rem;
          width: 100%;
        }
      }
    }
    .text-readonly {
      color: #999
    }

    .sms-code {
      height: 1rem;
      width: 2rem;
      position: absolute;
      top: 0;
      right: 0px;
      background-color: $bg-color;
      font-size: $small-font-size;
      color: #999;
    }
  }

    // 暂用
  .form-wrap .form-filed .label {
    width: 3rem;
  }
  .form-wrap .form-select .select img {
    transform: rotate(90deg);
  }
  .btn-line-none {
    text-decoration: none;
  }
  .photo-box {
    display: flex;
    flex-direction: row;
    padding: 0.3rem;
    justify-content: space-between;
  }
  .photo-box img {
    width:3.3rem;
    height: 2.1rem;
  }
  .fs28 {
    font-size: 0.28rem;
    padding: 0.3rem;
  }
  .aCss {
    text-decoration: none;
    color: #333;
  }
</style>