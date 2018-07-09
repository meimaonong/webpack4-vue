import App from './src/views/App.vue'

// 获取路由
import routeList from './src/views/modules/**/route.js'

// vuex store
import storeList from './src/**/mainStore.js'

// 配置路由
Vue.use(VueRouter)
// 配置vuex
Vue.use(Vuex)

let routes = []

routeList.map((item) => {
  routes = routes.concat(item.default)
})

let stores = {}
storeList.map((item) => {
  stores = Object.assign(stores, item.default)
})

const router = new VueRouter({
  routes
})

// Vue 实例
let vm = null

Vue.prototype.KeepAlive = false

const processRoute = (vm, to) => {
  if (Vue.prototype.KeepAlive) {
    Vue.prototype.KeepAlive = false
  } else {
    const that = vm
    that.$store.dispatch('Layout/Header/SET_OBJ', { name: to.name })
    setTimeout(() => {
      that.$store.dispatch('Layout/Header/SET_OBJ', { name: '' })
    }, 0)
  }
}

Vue.prototype.mixin = {
  beforeRouteLeave(to, from, next) {
    processRoute(this, to)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    processRoute(this, to)
    next()
  },
  methods: {
    Npush: (vm, location) => {
      vm.$router.push(location)
    }
  }
}

// 路由钩子
router.beforeEach(async (to, from, next) => {

  setTimeout(() => {
    vm && vm.$store.dispatch('Layout/Header/SET_TAB', to)
    vm && vm.$store.dispatch('Layout/Header/SET_NAMELIST', to)
  }, 0)
  
  next()
})

const store = new Vuex.Store({
  modules: stores,
  strict: true,
})

VuexRouterSync.sync(store, router, { moduleName: 'RouteModule' })

// ElementUI
Vue.use(ElementUI)

vm = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})