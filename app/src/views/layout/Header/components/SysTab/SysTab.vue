<style lang="less">
.sys-tab {
  display: flex;
  flex: 1;

  .sys-tab-w {
    float: left;
    width: 100%;
    padding-top: 20px;

    .sys-tab-item {
      float: left;
      width: 100px;
      text-align: left;
      text-indent: 15px;
      line-height: 40px;
      border: 1px solid #ccc;
      border-bottom: none;
      margin-right: -1px;
      border-radius: 5px 5px 0 0;
      cursor: default;
      color: #333;
      position: relative;

      &:hover {
        color: #000;
      }

      &.active{
        cursor: default;
        border-top: 3px solid #fb794c;
        line-height: 36px;
        padding-bottom: 2px;
        background: #f0f0f0;

        &:after {
          content:"";
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          width: 30px;
          height: 40px;
          border-radius: 5px 5px 0 0;
          background-image: linear-gradient(to left,rgba(240,240,240,1) 60%,rgba(240,240,240,0));
        }

        >i {
          position: absolute;
          right: 5px;
          top: 10px;
          z-index: 5;
          font-size: 16px;
          color: #f0f0f0;
          text-indent: 0;
          border-radius: 50%;
          background: radial-gradient(#999,#999,#f0f0f0,#f0f0f0);

          &:hover {
            color: #ff6f6f;
            background: radial-gradient(#f0f0f0,#f0f0f0,#f0f0f0,#f0f0f0);
          }
        }
      }

      &:after {
        content:"";
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 40px;
        border-radius: 5px 5px 0 0;
        background-image: linear-gradient(to left,rgba(255,255,255,1) 60%,rgba(255,255,255,0));
      }

      >i {
        position: absolute;
        right: 5px;
        top: 12px;
        z-index: 5;
        font-size: 16px;
        color: #fff;
        text-indent: 0;
        border-radius: 50%;
        background: radial-gradient(#999,#999,#fff,#fff);

        &:hover {
          color: #ff6f6f;
          background: radial-gradient(#fff,#fff,#fff,#fff);
        }
      }

    }
  }
}
</style>

<template>
  <div class="sys-tab">
    <div class="sys-tab-w">
      <div class="sys-tab-item"
        v-show="item.name!='Index'"
        @click="ng(item)" :class="item.active ? 'active': ''" 
        v-for="(item, index) in headerState.nav" 
        :key="index"
      >
        {{item.meta.title}}<i class="el-icon-error" @click.stop="close(item)"></i>
      </div>
    </div>
  </div>
</template>

<script>
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
    /**
     * 切换tab
     */
    ng(item) {
      const that = this
      Vue.prototype.KeepAlive = true
      that.$router.push({path: item.path, query: item.query, params: item.params})
    },
    /**
     * 关闭tab
     */
    close(item) {
      const that = this

      that.$store.dispatch('Layout/Header/CLOSE_TAB', item)

      const i = _.findIndex(that.headerState.nav, (o) => {
        return o.active
      })

      let obj
      i > -1 ? obj = that.headerState.nav[i] : obj = {path: '/'}

      Vue.prototype.KeepAlive = true
      that.$router.push({path: obj.path, query: obj.query, params: obj.params})

    },
  },
  mounted() {
    
  }
}
</script>
