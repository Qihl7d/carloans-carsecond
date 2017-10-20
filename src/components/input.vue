<template>
  <div class="form-filed">
    <label class="label">{{props.label}}</label>
    <input class="value" 
           @input="changeVal($event)"
           data-vv-value-path="innerValue" 
           v-validate="expression"
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
        custom: 'amount'
      }
    },
    props: ['props', 'model'],
    methods: {
      changeVal (event) {
        // 输入时就修改 editor 设置 300ms 间隔防止卡顿
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let value = event.target.value
          this.form[this.model] = value
          // this.validInput(event.target.value)
          this.$emit('myInput', {[this.model]: event.target.value})
          this.$validator.validateAll().then((result) => {
            console.log(`Validation Result: ${result}`)
            console.log(this.$validator)
          })
        }, 300)
      }
    },
    created () {
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
