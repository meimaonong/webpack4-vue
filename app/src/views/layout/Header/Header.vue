<style lang="less">
.sys-header {

  transition :transform 1s;

  height: 60px;
  background: #fff;
  display: flex;

  .sys-logo {
    width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>

<template>
  <div class="sys-header">
    <div class="sys-logo">
      logo
    </div>
    <sys-tab></sys-tab>
    <sys-sub-tab></sys-sub-tab>
  </div>
</template>

<script>
import sysTab from './components/SysTab/SysTab.vue'
import sysSubTab from './components/SysSubTab/SysSubTab.vue'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...Vuex.mapState({
      state: state => state.Layout.Header
    })
  },
  mounted() {
    
  },
  components: {
    sysTab,
    sysSubTab,
  }
}
</script>


