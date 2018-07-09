export default {
  name: 'UserEdit',
  data() {
    return {
      msg: 'testmsg'
    }
  },
  mixins: [Vue.prototype.mixin],

  mounted() {
    const that = this

    ElementUI.Message({
      message: 'UserEdit',
      type: 'error'
    })

    console.log('UserEdit')

  }
}