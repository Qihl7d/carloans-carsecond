/**
 * 存储localStorage
 */
export const setStore = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
    // JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取localStorage
 */
export const getStore = key => {
  if (!key) return
  return window.localStorage.getItem(key)
}

/**
 * 删除localStorage
 */
export const removeStore = key => {
  if (!key) return
  window.localStorage.removeItem(key)
}
