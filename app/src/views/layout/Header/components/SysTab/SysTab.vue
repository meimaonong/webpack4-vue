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
      border-bottom: none;
      margin: 0 6px;
      cursor: default;
      color: #333;
      font-size: 12px;
      position: relative;
      background: #d8d8d8;

      &:before, &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width:0;
        height:0;
      }

      &:before {
        left: -10px;
        border-bottom:40px solid #d8d8d8;
        border-left:10px solid transparent;
      }
      &:after {
        right: -10px;
        border-bottom:40px solid #d8d8d8;
        border-right:10px solid transparent;
      }

      &:hover {
        color: #000;
        background: #dfdfdf;
        &:before, &:after {
          border-bottom:40px solid #dfdfdf;
        }

        .sys-tab-bridge, .sys-more-tab-item-w {
          display: block;
        }

      }

      &.active{
        cursor: default;
        border-top: 3px solid #fb794c;
        line-height: 36px;
        padding-bottom: 2px;
        background: #f0f0f0;

        &:before, &:after {
          top: -2px;
          border-bottom:40px solid #f0f0f0;
        }

        >i {
          right: 5px;
          top: 10px;
          z-index: 5;
          color: #aaa;
        }
      }

      >i {
        position: absolute;
        right: 5px;
        top: 12px;
        z-index: 5;
        font-size: 14px;
        color: #aaa;
        transition: color 0.2s;
        text-indent: 0;
        border-radius: 50%;

        &:hover {
          color: #333;
        }
      }

    }

    

    .sys-more-tab-item-w {
      position: relative;
      float: left;

      .sys-tab-bridge {
        display: none;
        width: 200px;
        height: 15px;
        position: absolute;
        left: -20px;
        top: 35px;
      }

      ul {
        display: none;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        position: absolute;
        left: -20px;
        top: 45px;
        border-radius: 3px;
        width: 200px;
        font-size: 14px;
        color: #333;
        padding: 5px 0;

        li {
          overflow: hidden;
          line-height: 40px;
          text-indent: 20px;

          &.active {
            border-left: 3px solid #fb794c;
            text-indent: 17px;
            background: #eee;
          }

          span {
            float: left;
          }
          i {
            float: right;
            margin: 13px 15px 0 0;
            text-indent: 0;
          }

          &:hover {
            background: #eee;
          }
        }
      }

      &:hover {
        .sys-tab-bridge, ul {
          display: block;
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
        v-if="nav_chunk[0]"
        @click="ng(item)" :class="item.active ? 'active': ''" 
        v-for="(item, index) in nav_chunk[0]" 
        :key="index"
        :style="{zIndex: item.active ? headerState.nav.length + 1 : headerState.nav.length-index}"
      >
        {{item.meta.title}}<i class="el-icon-close" @click.stop="close(item)"></i>
      </div>

      <div class="sys-more-tab-item-w" v-if="nav_chunk[1] && nav_chunk[1].length > 0">
        <div class="sys-tab-item"
          v-if="show_item"
          @click="ng(show_item)" :class="show_item.active ? 'active': ''"
          :style="{zIndex: show_item.active ? headerState.nav.length + 1 : headerState.nav.length - dnum}"
        >
          {{show_item.meta.title}}<i class="el-icon-arrow-down"></i>
        </div>
        <s class="sys-tab-bridge"></s>
        <ul>
          <li
            v-show="item.name!='Index'"
            @click="ng(item)" :class="item.active ? 'active': ''" 
            v-for="(item, index) in nav_chunk[1]" 
            :key="index"
          >
            {{item.meta.title}}<i class="el-icon-close" @click.stop="close(item)"></i>
          </li>
        </ul>
      </div>


      
      <!-- 
      <div class="sys-tab-item"
        v-show="item.name!='Index'"
        @click="ng(item)" :class="item.active ? 'active': ''" 
        v-for="(item, index) in headerState.nav" 
        :key="index"
        :style="{zIndex: item.active ? headerState.nav.length + 1 : headerState.nav.length-index}"
      >
        {{item.meta.title}}<i class="el-icon-close" @click.stop="close(item)"></i>
      </div>

      <div class="sys-more-tab-item-w">
        <div class="sys-tab-item">
          更多菜单<i class="el-icon-arrow-down"></i>
        </div>
        <s class="sys-tab-bridge"></s>
        <ul>
          <li class="active"><span>用户列表</span><i class="el-icon-close"></i></li>
          <li><span>用户列表</span><i class="el-icon-close"></i></li>
          <li><span>用户列表</span><i class="el-icon-close"></i></li>
          <li><span>用户列表</span><i class="el-icon-close"></i></li>
          <li><span>用户列表</span><i class="el-icon-close"></i></li>
        </ul>
      </div> 
      -->
     
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      dnum: 0,
      mitem: {},
    }
  },
  watch: {
    'headerState.nav': 'checkTab'
  },
  computed: {
    ...Vuex.mapState({
      headerState: state => state.Layout.Header
    }),
    nav_chunk() {
      const that = this
      let res = []
      if (that.dnum > 0 && that.headerState.nav.length > that.dnum) {
        res[0] = _.take(that.headerState.nav, that.dnum - 1)
        res[1] = _.takeRight(that.headerState.nav, that.headerState.nav.length - (that.dnum - 1))
      } else {
        res = [[...that.headerState.nav], []]
      }
      return res
    },
    show_item() {
      const that = this
      const i = _.findIndex(that.nav_chunk[1], (o) => {
        return o.active
      })
      i > -1 && (that.mitem = that.nav_chunk[1][i])
      return that.mitem
    }
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
    /**
     * 基于页面宽带管理导航折叠状态
     */
    checkTab() {
      const that = this
      const tab = $('.sys-tab-w')
      const w = tab.width()
      const iw = 112
      const pad = 15
      console.log('checkTab')
      if (iw * that.headerState.nav.length + pad >= w) {
        that.dnum = parseInt((w - pad) / iw)
      } else {
        that.dnum = 0
      }
    },
    initFunc() {
      const that = this
      that.checkTab()
      $(window).resize(()=>{ that.checkTab() })
    }
  },
  mounted() {
    this.initFunc()
  }
}
</script>
