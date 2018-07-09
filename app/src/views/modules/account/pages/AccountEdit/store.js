
// store初始值
const initState = {
  name: 'AccountEdit',
}

export default {
	AccountEdit: {
		namespaced: true,

		// state
		state: Object.assign({}, initState),

		// actions
		actions: {

			// 初始化state
			INIT_STATE({commit}) {
			    commit('INIT_STATE', initState)
			},

			// 获取运单数据
      SET_NAME({ commit }, payload) {
        commit('SET_NAME', payload)
			},
			
		},

		// mutations
		mutations: {
			// 初始化state
		    INIT_STATE (state, payload) {
		    	Object.assign(state, payload)
		    },

        SET_NAME (state, payload) {
		    	state.name = payload.name
		    },		    
		    
		},

		// getters
		getters: {

		}
	}
}