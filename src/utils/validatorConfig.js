import { Validator } from 'vee-validate'

// 配置错误消息是中文
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '邮箱格式不正确',
      phone: () => {
        return '请填写正确的11位手机号码'
      },
      required: (label) => {
        return `${label}是必填项`
      },
      max_value: (label, value) => {
        return `${label}不能大于${value}`
      },
      between: (label, ref) => {
        return `${label} 必须在${ref[0]}-${ref[1]}之间`
      }
    }
  }
}

// vee-validate里有的校验规则没有，需要我们自己扩展
// 校验手机号
Validator.extend('phone', {
  getMessage (field, args) {  //添加到默认的英文错误消息里
    return '请填写正确的11位手机号码'
  },
  validate: value => {
// value.replace(/\D/g, '')去掉所有的空格
    const val = value.replace(/\D/g, '')
    return val.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(val)
  }
})
export default dictionary
