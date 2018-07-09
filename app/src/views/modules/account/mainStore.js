

import storeArr from './**/store.js'


// 频道级store，合并vuex配置
let storeObj = {}
storeArr.forEach(function (value, index, array) {
  Object.assign(storeObj, value.default)
})

export default {
  Account: {
    namespaced: true,
    modules: storeObj
  }
}