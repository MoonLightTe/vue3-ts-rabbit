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
  <h1>ts + vue</h1>
</template>

<style lang="less" scoped>
h1 {
  background-color: @xtxColor;
  .hoverShadow ();
}
</style>
