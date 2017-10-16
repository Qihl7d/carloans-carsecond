const dictionary = {
  zh_CN: {
    messages: {
      email: () => '邮箱格式不正确',
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
export default dictionary
