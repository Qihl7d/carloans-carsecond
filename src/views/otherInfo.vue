<template>
  <div class="identity-valid-container">
    <section class="baseinfo-form">
      <form class='form-wrap' @submit.prevent="baseInfoSubmit()">
        <distpicker :props='buycarCity.props'
                    :province='buycarCity.province'
                    :model='buycarCity.model'
                    :city='buycarCity.city'
                    :area='buycarCity.area'
                    :areaLabel='buycarCity.areaLabel'
        ></distpicker>
        <div class="form-filed">
          <label class="label">信用卡号</label>
          <input class="value" :class="{'text-readonly': idNoIsReadOnly}" type='text' placeholder="请填写您本人的信用卡号" v-model="myForm.idNo" :readonly='idNoIsReadOnly'/>
        </div>
        <div class="form-filed bottom">
          <label class="label">预留手机号</label>
          <input ref="bankCardInput" class="value" type='tel' placeholder="请您写信用卡的预留手机号" v-model.lazy="myForm.bankCard" @keyup="formatBankCard($event)"/>
        </div>
        <div class="form-filed">
          <label class="label">直系亲属</label>
          <input ref="bankMobileInput" class="value" type='tel' placeholder="请填写您的直系亲属" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)"/>
          <router-link class="add-css" to="/addrelatives">
            添加
            <span class="arrow-right"></span>
          </router-link>          
        </div>
         <div class="form-filed bottom">
          <label class="label">本地亲友</label>
          <input ref="bankMobileInput" class="value" type='tel' placeholder="请填写您的本地亲友" v-model.lazy="myForm.mobile" @keyup.prevent="formatMobile($event)"/>
           <router-link class="add-css" to="/addfriend">
            添加
            <span class="arrow-right"></span>
          </router-link>
        </div>
        <div class="form-filed">
          <label class="label">常用邮箱</label>
          <input class="value" type='tel' placeholder="请填写您的常用邮箱地址" v-model="myForm.verificationCode"/>
        </div>
        <div class="form-filed">
          <label class="label">芝麻信用分</label>
          <input ref="bankMobileInput" class="value" type='tel' placeholder="请填写您的芝麻信用分" v-model.lazy="myForm.mobile"/>
        </div>
        <div class="form-filed">
          <label class="label">微信号</label>
          <input ref="bankMobileInput" class="value" type='tel' placeholder="请填写您的微信号" v-model.lazy="myForm.mobile"/>
        </div>
        <!-- <button type="submit" class='primary-button top'>保存并下一步</button> -->
        <router-link to="/infolayout/upload" type="submit" class='primary-button login-button mb60 btn-line-none'>保存并下一步</router-link>
      </form>
    </section>
  </div>
</template>

<script>
import Distpicker from "../components/distpickers/distpicker";
export default {
  data() {
    return {
      myForm: {
        name: "",
        idNo: ""
      },
      idNoIsReadOnly: false,
      nameIsReadOnly: false,
      buycarCity: {
        props: {
          isAll: true,
          needDist: {
            110000: '北京市',
            310000: '上海市'
          },
          defaultVal: '北京市-市辖区-朝阳区'
        },
        // province: '北京市',
        // city: '市辖区',
        // area: '朝阳区',
        model: 'city',
        areaLabel: '购车城市'
      }
    };
  },
  methods: {
    sendCode() {},
    formatBankCard() {},
    baseInfoSubmit() {},
    formatMobile() {}
  },
  components: {
    Distpicker
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/var";
.identity-valid-container {
  .introduction-info {
    display: flex;
    height: 4rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: $middle-font-size;
    .text-bg {
      width: 100%;
      .img {
        height: 4rem;
        width: 100%;
      }
    }
  }
  .text-readonly {
    color: #999;
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
.add-css {
  font-size: 0.28rem;
  text-decoration: none;
  color: #999;
  padding-right: 0.2rem;
}
.add-css span {
  margin-right: 0.2rem;
}
.btn-line-none {
    text-decoration: none;
  }
.mb60 {
  margin-bottom: 0.6rem;
}
</style>