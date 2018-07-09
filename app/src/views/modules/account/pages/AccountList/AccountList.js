export default {
  name: 'AccountList',
  data() {
    return {
      msg: 'testmsg'
    }
  },
  mixins: [Vue.prototype.mixin],
  computed: {
    ...Vuex.mapState({
      state: state => state.Account.AccountList
    })
  },
  beforeRouteLeave(to, from, next) {

   
    next()
  },
  methods: {
    async golist() {

      

    },
    qt() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000);
      })
    }
  },
  mounted() {
    const that = this

    

    ElementUI.Message({
      message: 'AccountList',
      type: 'error'
    })
    
    console.log('AccountList')
    // setTimeout(() => {
    //   that.$store.dispatch('AccountModule/AccountList/SET_NAME', {name: 'qcc'})
    // }, 2000);
  }
}