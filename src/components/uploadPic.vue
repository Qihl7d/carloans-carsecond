<template>
  <div class="uploadpic-container">
    <div v-if='isShow'>
      <ul class="pic-list">
        <li class="list-item" v-for="(item, index) in list" :key='index'>
          <img class='pic-bg upload-pic' :src='item' alt="">
          <img class="img-remove" src="../assets/icon_close.png" @click.prevent="imgRemove(index)">
        </li>
        <li class="list-item" v-if="type === 1 && imgList.length < limitImg">
          <label class="list-item-label" for="upload">
            <img class="pic-camera" src="../assets/camera.png" alt="">
            <img class='pic-bg' src="../assets/idcard_front.png" alt="">
            <span class="upload-text">上传图片</span>
            <input class="upload-input" type="file" id="upload" :accept="accept" @change="upload">
          </label>
        </li>
        <li class="list-item" v-if="type === 2 && imgList.length < limitImg">
          <label class="list-item-label" for="upload">
            <img class="pic-camera" src="../assets/camera.png" alt="">
            <img class='pic-bg' src="../assets/idcard_back.png" alt="">
            <span class="upload-text">上传图片</span>
            <input class="upload-input" type="file" id="upload" :accept="accept" @change="upload">
          </label>
        </li>

        <li class="list-item" v-if="type === 3 && imgList.length < limitImg">
          <label class="list-item-label" for="upload">
            <img class="pic-camera" src="../assets/camera.png" alt="">
            <img class='pic-bg' src="../assets/upld_info.png" alt="">
            <span class="upload-text">上传图片</span>
            <input class="upload-input" type="file" id="upload" :accept="accept" @change="upload">
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Exif from 'exif-js'
  export default {
    data () {
      return {
        headerImage: '',
        imgList: this.list
      }
    },
    props: {
      list: {
        type: Array,
        default: []
      },
      limitImg: {
        type: Number,
        default: 1
      },
      accept: {
        type: String,
        default: 'image/jpg,image/jpeg,image/png,image/gif'
      },
      type: {
        type: Number,
        default: 1
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      imgRemove (index) {
        this.imgList.splice(index, 1)
      },
      upload (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.picValue = files[0]
        this.imgPreview(this.picValue)
      },
      imgPreview (file) {
        let self = this
        let Orientation
        // 去获取拍照时的信息，解决拍出来的照片旋转问题
        Exif.getData(file, function () {
          Orientation = Exif.getTag(this, 'Orientation')
        })
        // 看支持不支持FileReader
        if (!file || !window.FileReader) return

        if (/^image/.test(file.type)) {
          // 创建一个reader
          let reader = new FileReader()
          // 将图片2将转成 base64 格式
          reader.readAsDataURL(file)
          // 读取成功后的回调
          reader.onloadend = function () {
            let result = this.result
            let img = new Image()
            img.src = result
            // 判断图片是否大于100K,是就直接上传，反之压缩图片
            console.log(this.result.length)
            if (this.result.length <= (100 * 1024)) {
              self.headerImage = this.result
              // self.files.push(this.result)
              self.postImg()
            } else {
              img.onload = function () {
                let data = self.compress(img, Orientation)
                self.headerImage = data
                // self.files.push(data)
                self.postImg()
              }
            }
          }
        }
      },
      postImg () {
        console.log('是在这里上传吗？')
        // console.log(this.files)
        // 这里写接口
      },
      rotateImg (img, direction, canvas) {
        // 最小与最大旋转方向，图片旋转4次后回到原方向
        const minstep = 0
        const maxstep = 3
        if (img === null) return
        // img的高度和宽度不能在img元素隐藏后获取，否则会出错
        let height = img.height
        let width = img.width
        let step = 2
        if (step == null) {
          step = minstep
        }
        if (direction === 'right') {
          step++
          // 旋转到原位置，即超过最大值
          step > maxstep && (step = minstep)
        } else {
          step--
          step < minstep && (step = maxstep)
        }
        // 旋转角度以弧度值为参数
        let degree = step * 90 * Math.PI / 180
        let ctx = canvas.getContext('2d')
        switch (step) {
          case 0:
            canvas.width = width
            canvas.height = height
            ctx.drawImage(img, 0, 0)
            break
          case 1:
            canvas.width = height
            canvas.height = width
            ctx.rotate(degree)
            ctx.drawImage(img, 0, -height)
            break
          case 2:
            canvas.width = width
            canvas.height = height
            ctx.rotate(degree)
            ctx.drawImage(img, -width, -height)
            break
          case 3:
            canvas.width = height
            canvas.height = width
            ctx.rotate(degree)
            ctx.drawImage(img, -width, 0)
            break
        }
      },
      compress (img, Orientation) {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        // 瓦片canvas
        let tCanvas = document.createElement('canvas')
        let tctx = tCanvas.getContext('2d')
        let initSize = img.src.length
        let width = img.width
        let height = img.height
        // 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        let ratio
        if ((ratio = width * height / 4000000) > 1) {
          console.log('大于400万像素')
          ratio = Math.sqrt(ratio)
          width /= ratio
          height /= ratio
        } else {
          ratio = 1
        }
        canvas.width = width
        canvas.height = height
        // 铺底色
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // 如果图片像素大于100万则使用瓦片绘制
        let count
        if ((count = width * height / 1000000) > 1) {
          console.log('超过100W像素')
          count = ~~(Math.sqrt(count) + 1) // 计算要分成多少块瓦片
          // 计算每块瓦片的宽和高
          let nw = ~~(width / count)
          let nh = ~~(height / count)
          tCanvas.width = nw
          tCanvas.height = nh
          for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
              tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh)
              ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
            }
          }
        } else {
          ctx.drawImage(img, 0, 0, width, height)
        }
        // 修复ios上传图片的时候 被旋转的问题
        if (Orientation !== '' && Orientation !== 1) {
          switch (Orientation) {
            case 6:// 需要顺时针（向左）90度旋转
              this.rotateImg(img, 'left', canvas)
              break
            case 8:// 需要逆时针（向右）90度旋转
              this.rotateImg(img, 'right', canvas)
              break
            case 3:// 需要180度旋转
              this.rotateImg(img, 'right', canvas) // 转两次
              this.rotateImg(img, 'right', canvas)
              break
          }
        }
        // 进行最小压缩
        let ndata = canvas.toDataURL('image/jpeg', 0.1)
        console.log('压缩前：' + initSize)
        console.log('压缩后：' + ndata.length)
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + '%')
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0
        return ndata
      }
    }
  }
</script>

<style lang="scss" scoped>
  .uploadpic-container {
    .pic-list {
      overflow: hidden;
      padding: 0.15rem;
    }

    .list-item {
      position: relative;
      display: flex;
      float: left;
      padding: 0.15rem;
      width:calc(50%);
      // background-color: #fff;
      .list-item-label {
        display: flex;
        flex: 1;
      }
      .upload-input {
        display: none;
      }
      .upload-text {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        font-size: 0.24rem;
        width: 1rem;
        height: .3rem;
        margin-top: 0.1rem;
        margin-left: -0.48rem
      }
      .pic-bg {
        width: 100%;
        height: 2.1rem;
      }
      .pic-camera {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.58rem;
        height: 0.5rem;
        margin-top: -0.45rem;
        margin-left: -0.25rem;
      }
      .img-remove {
        position: absolute;
        right: 0.3rem;
        top: 0.3rem;
        width: 0.46rem;
        height: .46rem;
      }
      .upload-pic {
        border-radius: 6px; 
      }
      .prompting-text {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        font-size: 0.24rem;
      }
    }
  }
  .customized-cardfont .pic-list {
    .list-item {
      width: 100%!important;
    }
    &:nth-child(1) {
      padding-right: 0 
    }
  }

  .customized-cardback .pic-list {
    .list-item {
      width: 100%!important;
    }
    &:nth-child(1) {
      padding-left: 0 
    }
  }
  
</style>


