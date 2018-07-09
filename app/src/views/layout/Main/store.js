import _ from 'lodash'

// store初始值
const initState = {
  routerViews: []
}

export default {
  Main: {
    namespaced: true,

    // state
    state: Object.assign({}, initState),

    // actions
    actions: {

      // 初始化state
      INIT_STATE({ commit }) {
        commit('INIT_STATE', initState)
      },

      // 获取运单数据
      SET_VIEW({ commit }, payload) {
        commit('SET_VIEW', payload)
      },

    },

    // mutations
    mutations: {
      // 初始化state
      INIT_STATE(state, payload) {
        Object.assign(state, payload)
      },

      SET_VIEW(state, payload) {
        
        // 所有tab项选中置为false
        state.routerViews.map((item) => {
          return Object.assign(item, { active: false })
        })

        // 查找tab项是否存在
        const i = _.findIndex(state.routerViews, function (o) {
          return o.name == payload.name && o.path == payload.path
        })
        if (i > -1) {
          // 存在则激活
          state.routerViews[i]['active'] = true
        } else {
          //不存在则创建并激活
          state.routerViews.push(Object.assign(payload, { active: true }))
        }

        
      },

    },

    // getters
    getters: {

    }
  }
}