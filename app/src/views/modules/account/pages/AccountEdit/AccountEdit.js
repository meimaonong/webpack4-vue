
export default {
  name: 'AccountEdit',
  data() {
    return {
      msg: 'msg',
      s: false,
    }
  },
  mixins: [Vue.prototype.mixin],
  methods: {
    golist() {
      
      this.Npush(this,{path: '/'})
    },
    golist2() {
      this.$router.push({ name: 'Index' })
    },
    addTab() {
      
    }
  },
  mounted() {
    console.log('this.$route',this.$route)
    ElementUI.Message({
      message: 'AccountEdit',
      type: 'error'
    })
    const that = this
    setTimeout(() => {
      
    }, 5000);
    
    console.log('AccountEdit')
  }
}