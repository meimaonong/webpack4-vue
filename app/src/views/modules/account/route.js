const AccountList = () => import(/* webpackChunkName: "account_chunk" */ './pages/AccountList/AccountList.vue')
const AccountEdit = () => import(/* webpackChunkName: "account_chunk" */ './pages/AccountEdit/AccountEdit.vue')

// const AccountList = require('./pages/AccountList/AccountList.vue').default
// const AccountEdit = require('./pages/AccountEdit/AccountEdit.vue').default

// 路由控制器
const ctrl = 'account'

export default [
  {
    name: 'AccountList',
    path: `/${ctrl}/AccountList`,
    component: AccountList,
    meta: { title: '账号列表' },
  },
  {
    name: 'AccountEdit',
    path: `/${ctrl}/AccountEdit`,
    component: AccountEdit,
    meta: { title: '账号编辑' },
  },
  { path: '/a', redirect: { name: 'AccountEdit' } }
]