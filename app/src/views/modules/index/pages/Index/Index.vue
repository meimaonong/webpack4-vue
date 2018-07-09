<template>
<div class="index-index">
  <h1>index</h1>
  <div v-for="item in list" :key="item">item</div>
  <button @click="change">click</button>
</div>
</template>

<script src="./Index.js"></script>
<style lang="less" src="./Index.less"></style>




