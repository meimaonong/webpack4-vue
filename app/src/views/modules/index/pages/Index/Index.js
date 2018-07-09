import _ from 'lodash'

export default {
    name: 'Index',
    mixins: [Vue.prototype.mixin],
    data() {
        return {
            msg: 'msg',
            list: ['a', 'b']
        }
    },
    methods: {
        change() {
            console.log(this.list)
            this.list = []
        }
    },
    mounted() {
        
        ElementUI.Message({
            message: 'Index',
            type: 'error'
        })
        console.log('index')
        // console.log(this.$route)
        

    }
}