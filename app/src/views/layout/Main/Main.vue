<template>
  <div class="sys-main">

    <keep-alive 
      v-for="routeName in headerState.nameList" 
      :key="routeName" 
      v-if="headerState.obj != routeName && checkShow(routeName)"
    >
      <router-view v-if="$route.name==routeName" :key="$route.fullPath"></router-view>
    </keep-alive>

  </div>
</template>

<script src="./Main.js"></script>
<style lang="less" src="./Main.less"></style>
