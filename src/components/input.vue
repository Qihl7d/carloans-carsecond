<template>
  <div class="form-filed" :class="{'bottom': props.isBottom}">
    <label class="label">{{props.label}}</label>
    <input class="value" 
           :readonly = 'props.readOnly'
           @input="changeVal($event)"
           data-vv-value-path="innerValue" 
           v-validate="expression"
           :data-vv-as="props.label"
           :data-vv-name="model"
           :type="props.type"
           :value="form[model]"
           :placeholder="props.placeholder"
    />
    <slot name='input-slot'></slot>
    <span class="unit" v-if="props.unit">{{props.unit}}</span>
  </div>
</template>

<script>
  export default {
    name: 'input',
    data () {
      return {
        form: {
          [this.model]: this.props.value || ''
        },
        expression: this.props.rules || {},
        timer: ''
      }
    },
    props: ['props', 'model'],
    methods: {
      changeVal (event) {
        // 输入时就修改 editor 设置 300ms 间隔防止卡顿
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          event.target.value = this.props.format && this.props.format(event.target.value) || event.target.value
          this.form[this.model] = event.target.value
          this.$store.commit('changeApplyEdit', {[this.model]: event.target.value})
          this.emitValidate()
        }, 10)
      },
      emitValidate () {
        this.$validator.validate(this.model, this.form[this.model]).then((result) => {
          const {msg} = this.$validator.errors.items.length > 0 ? this.$validator.errors.items[0] : ''
          this.$store.commit('getValidatorMsg', {[this.model]: {msg, isValid: result}})
        })
      }
    },
    created () {
      setTimeout(() => {
        this.emitValidate()
      }, 500)
    },
    destroyed () {
      this.eventBus.$off('input/validate')
    }
  }
</script>

<style lang="scss" scoped>
  .form-filed {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 1rem;
    padding: 0 0.3rem;
    .label {
      width: 2rem;
      font-size: 0.32rem;
      color: #444;
    }
    .value {
      flex: 1;
      font-size: 0.32rem;
    }
    .unit {
      font-size: 0.32rem;
      color: #444;
      width: 1rem;
      position: absolute;
      right: 0.3rem;
      top: 50%;
      margin-top: -0.2rem;
    }
  }
</style>
