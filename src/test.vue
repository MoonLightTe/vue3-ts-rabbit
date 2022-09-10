<script setup lang="ts">
//1,直接导入vue源文件，导入多个组件
// import Button from '@/components/Button/index.vue'
// import Skeleton from '@/components/Skeleton/Skeleton.vue';
// import {XtxButton,XtxSkeleton} from '@/components/index'
</script>

<template>
  <h1>Hello vue3 + ts👍</h1>
  <!-- <Button type="primary" size="small">1111</Button>
  <Skeleton :height="30" :width="100" bg="pink"></Skeleton> -->
  <XtxButton type="primary" size="small"></XtxButton>
  <XtxSkeleton :height="30" :width="100" bg="pink"></XtxSkeleton>
</template>

<style lang="less" scoped></style>
