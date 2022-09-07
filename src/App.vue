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
  <router-view></router-view>
</template>

<style lang="less" scoped>
h1 {
  background-color: @xtxColor;
  .hoverShadow ();
}
</style>
