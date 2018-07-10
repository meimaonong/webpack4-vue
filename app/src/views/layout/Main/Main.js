import _ from 'lodash'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...Vuex.mapState({
      headerState: state => state.Layout.Header
    })
  },
  methods: {
    checkShow(routeName) {
      const that = this
      const i = _.findIndex(that.headerState.nav, function (o) { return o.name == routeName })
      return i > -1
    },
    close() {
      const that = this
      that.$store.dispatch('Layout/Header/SET_OBJ', {name: 'Index'})
      setTimeout(() => {
        that.$store.dispatch('Layout/Header/SET_OBJ', { name: '' })
      }, 0)
    }
  },
  mounted() {
    const that = this
    console.log(that.$store.state)
  }
}