// import lazy 形式
const Index = () => import(/* webpackChunkName: "index_chunk" */ './pages/Index/Index.vue')

// 直接加载形式
// const Index = require('./pages/Index/Index.vue').default

// 路由控制器
const ctrl = 'index'

export default [
  {
    name: 'Index',
    path: '/',
    component: Index,
    meta: { title: '首页' },
  },
  { path: '/a', redirect: to => {
	  return '/account/AccountEdit'
	}
  }
]