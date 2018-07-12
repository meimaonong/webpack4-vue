<template>
<div>
  <div>UserEdit</div>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
</div>
</template>
<script src="./UserEdit.js"></script>