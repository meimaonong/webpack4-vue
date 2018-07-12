export default {
  name: 'UserEdit',
  data() {
    return {
      msg: 'testmsg',
      list: [],
    }
  },
  mixins: [Vue.prototype.mixin],

  async mounted() {
    const that = this

    that.list = await that.re()

    ElementUI.Message({
      message: 'UserEdit',
      type: 'error'
    })

    console.log('UserEdit')

  }
}