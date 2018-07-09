import storeArr from './**/store.js'

// 模块级store，合并vuex配置
let storeObj = {}
storeArr.forEach(function (value, index, array) {
  Object.assign(storeObj, value.default)
})

export default {
  Layout: {
    namespaced: true,
    modules: storeObj
  }
}