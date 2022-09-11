<script setup lang="ts">
  import { useRoute,useRouter } from 'vue-router';
  const route=useRoute();
  console.log('setup----->',route.params);
  // const router =useRouter()
  // console.log('router: ', router);
  
</script>

<template>
  <div class="top-category">
    <div class="container">顶级类目</div>
  </div>
</template>

<style scoped lang="less"></style>
