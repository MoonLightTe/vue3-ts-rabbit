<script lang="ts" setup>
import { onMounted } from 'vue';
import request from './utils/request';
onMounted(async () => {
  const res = await request.get('/home/index');
  console.log('res6: ', res);
  console.log(1111);
});
</script>

<template>
    <ul>
    <li><RouterLink to="/">去首页</RouterLink></li>
    <li><RouterLink to="/login">去登录页</RouterLink></li>
  </ul>
  <router-view></router-view>
</template>

<style lang="less" scoped>
h1 {
  background-color: @xtxColor;
  .hoverShadow ();
}
</style>
