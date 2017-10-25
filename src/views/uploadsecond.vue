<template>
  <div class="identity-valid-container">
    <div>
      <p class="accordion" :class="{'active': isShowIdCard}" @click.prevent="showIdCardUploadArea()">
        <label>身份证照上传</label>
      </p>
      <div class="idcard-area">
        <p class="front-item">
          <upload-pic :list='idCardFont.list' :type='1' :is-show="isShowIdCard" class='customized-cardfont'></upload-pic>
        </p>
        <p class="front-item">
          <upload-pic :list='idCardBack.list' :type='2' :is-show="isShowIdCard" class='customized-cardback'></upload-pic>
        </p>
      </div>
    </div>
    <div v-for="(item, index) in listPics" :key="index">
      <p class="accordion" :class="{'active': item.isShow}" @click.prevent="showUploadArea(index)">
        <label>{{item.label}}</label>
      </p>
      <upload-pic :list='item.list' :type='item.type' :is-show="item.isShow"></upload-pic>
    </div>
    <protocol :items='protocolData.items' :bool='true'></protocol>
    <button class='primary-button top'>提交申请</button>
  </div>
</template>

<script>
  import _ from 'lodash'
  import UploadPic from '../components/uploadPic'
  import Protocol from '../components/protocol.vue'

  export default {
    data () {
      return {
        isShowIdCard: false,
        idCardFont: {
          list: [],
          type: 1,
          isShow: false
        },
        idCardBack: {
          list: [],
          type: 2,
          isShow: false
        },
        listPics: [
          {
            list: [],
            type: 3,
            label: '工作及收入证明',
            isShow: false
          },
          {
            list: [],
            type: 3,
            label: '产调信息',
            isShow: false
          },
          {
            list: [],
            type: 3,
            label: '车位销售意向书',
            isShow: false
          },
          {
            list: [],
            type: 3,
            label: '其他材料',
            isShow: false
          }
        ],
        protocolData: {
          items: [
            {
              protocol: '《个人信用报告查询授权书》',
              path: ''
            }
          ]
        }
      }
    },
    methods: {
      showIdCardUploadArea () {
        this.isShowIdCard = !this.isShowIdCard
        _.forEach(this.listPics, (item, index) => {
          item.isShow = false
        })
      },
      showUploadArea (currentIndex) {
        this.isShowIdCard = false
        _.forEach(this.listPics, (item, index) => {
          if (currentIndex === index) {
            item.isShow = !item.isShow
          } else {
            item.isShow = false
          }
        })
      }
    },
    components: {
      UploadPic,
      Protocol
    }
  }
</script>

<style lang="scss" scoped>
  .identity-valid-container {
    display: flex;
    flex-direction: column;
    .accordion {
      position: relative;
      padding-left: 0.3rem; 
      display: flex;
      align-items: center;
      height: 1rem;
      background-color: #fff;
      color: #333333;
      font-size: .32rem;
      &::after {
        content: '';
        position: absolute;
        right: 5px;
        width: 12px;
        height: 12px;
        border-bottom: solid 2px #ccc;
        border-right: solid 2px #ccc;
        transform-origin:center center;
        transition:all .3s ease-in .1s;
        transform: rotate(45deg);
        top: 50%;
        margin-top: -6px;
        right: .3rem;
      }
    }
    .active {
      &::after {
        transform: rotate(-135deg);
        margin-top: 0px;
      }
    }
    .idcard-area {
      display: flex;
      flex-direction: row;
      .front-item {
        flex: 1;
      }
    }
  }
</style>