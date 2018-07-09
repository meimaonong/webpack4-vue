const UserList = () => import(/* webpackChunkName: "user_chunk" */ './pages/UserList/UserList.vue')
const UserEdit = () => import(/* webpackChunkName: "user_chunk" */ './pages/UserEdit/UserEdit.vue')

// 路由控制器
const ctrl = 'user'

export default [
  {
    name: 'UserList',
    path: `/${ctrl}/UserList`,
    component: UserList,
    meta: { title: '用户列表' },
  },
  {
    name: 'UserEdit',
    path: `/${ctrl}/UserEdit`,
    component: UserEdit,
    meta: { title: '用户编辑' },
  }
]