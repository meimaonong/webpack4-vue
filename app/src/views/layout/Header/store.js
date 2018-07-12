import _ from 'lodash'

// store初始值
const initState = {
  nav: [],
  nameList: [],
  obj: '',
}

export default {
  Header: {
    namespaced: true,

    // state
    state: Object.assign({}, initState),

    // actions
    actions: {

      // 初始化state
      INIT_STATE({ commit }) {
        commit('INIT_STATE', initState)
      },

      // 设置tab页面切换
      SET_TAB({ commit }, payload) {
        commit('SET_TAB', payload)
      },

      // 设置路由keep-live
      SET_NAMELIST({ commit }, payload) {
        commit('SET_NAMELIST', payload)
      },

      // 获取运单数据
      SET_OBJ({ commit }, payload) {
        commit('SET_OBJ', payload)
      },

      // 关闭tab
      CLOSE_TAB({ commit }, payload) {
        commit('CLOSE_TAB', payload)
      }

    },

    // mutations
    mutations: {

      INIT_STATE(state, payload) {
        Object.assign(state, payload)
      },

      SET_OBJ(state, payload) {
        state.obj = payload.name
      },

      SET_NAMELIST(state, payload) {

        let { name } = payload

        // 查找tab项是否存在
        const i = _.findIndex(state.nameList, (o) => {
          return o == name
        })
        i > -1 ? '' : state.nameList.push(name)

      },

      SET_TAB(state, payload) {

        let { path, fullPath, name, meta, query, params } = payload
        payload = { path, fullPath, name, meta, query, params }
        // 所有tab项选中置为false
        state.nav.map((item) => {
          return Object.assign(item, { active: false })
        })
        // 查找tab项是否存在
        const i = _.findIndex(state.nav, (o) => {
          return o.name == payload.name && o.path == payload.path
        })
        // 激活选项
        i > -1 ? 
          Object.assign(state.nav[i], payload, { active: true }) 
          : state.nav.push(Object.assign(payload, { active: true }))
      },

      CLOSE_TAB(state, payload) {

        const i = _.findIndex(state.nav, (o) => {
          return o.name == payload.name && o.path == payload.path
        })
        i > -1 && state.nav.splice(i, 1)
  
        const j = _.findIndex(state.nav, (o) => {
          return o.active
        })
       
        if (j > -1) {
          
        } else {
          if (state.nav.length > 0) {
            if (state.nav[i]) {
              state.nav[i]['active'] = true
            } else {
              state.nav[i - 1] && (state.nav[i - 1]['active'] = true)
            }
          }
        }
        
      }

    },

    // getters
    getters: {
      
    }
  }
}