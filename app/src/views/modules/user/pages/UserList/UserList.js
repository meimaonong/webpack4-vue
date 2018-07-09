export default {
  name: 'UserList',
  data() {
    return {
      msg: 'testmsg'
    }
  },
  mixins: [Vue.prototype.mixin],

  mounted() {
    const that = this

    ElementUI.Message({
      message: 'UserList',
      type: 'error'
    })

    console.log('UserList')

  }
}