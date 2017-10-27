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
        <my-input :props='creditCardNum.props' :model="creditCardNum.model"></my-input>  
        <my-input :props='reservePhone.props' :model='reservePhone.model'></my-input>
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
        <my-input :props='oftenEmail.props' :model='oftenEmail.model'></my-input>
        <my-input :props='sesameScore.props' :model='sesameScore.model'></my-input>
        <my-input :props='wechatNum.props' :model='wechatNum.model'></my-input>
        <button type="submit" class='primary-button top'>保存并下一步</button>
      </form>
    </section>
  </div>
</template>

<script>
import Distpicker from "../components/distpickers/distpicker";
import MyInput from "../components/input";
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
      },
      creditCardNum: {
          props: {
            label: '信用卡号',
            type: 'text',
            placeholder: '请填写您本人的信用卡号',
            isBorder: true,
            isBottom: false,
            value: '',
            rules: {
              required: true
            }
          },
          model: 'creditCardNum'
        },
        reservePhone: {
          props: {
            label: '预留手机号',
            type: 'text',
            placeholder: '请填写信用卡的预留手机号',
            isBorder: true,
            isBottom: true,
            value: '',
            rules: {
              required: true
            }
          },
          model: 'reservePhone'
        },
        oftenEmail: {
          props: {
            label: '常用邮箱',
            type: 'text',
            placeholder: '请填写您的常用邮箱地址',
            isBorder: true,
            isBottom: false,
            value: '',
            rules: {
              required: true
            }
          },
          model: 'oftenEmail'
        },
        sesameScore: {
          props: {
            label: '芝麻信用分',
            type: 'text',
            placeholder: '请填写您的芝麻信用分',
            isBorder: true,
            isBottom: false,
            value: '',
            rules: {
              required: true
            }
          },
          model: 'sesameScore'
        },
        wechatNum: {
          props: {
            label: '微信号',
            type: 'text',
            placeholder: '请填写您的微信号（选填）',
            isBorder: true,
            isBottom: false,
            value: '',
            rules: {
              required: true
            }
          },
          model: 'wechatNum'
        },
    };
  },
  methods: {
    baseInfoSubmit() {
    
    },
    formatMobile() {}
  },
  components: {
    Distpicker,
    MyInput
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