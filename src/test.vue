<script setup lang="ts">
//1,直接导入vue源文件，导入多个组件
// import Button from '@/components/Button/index.vue'
// import Skeleton from '@/components/Skeleton/Skeleton.vue';
// import {XtxButton,XtxSkeleton} from '@/components/index'
import {  useIntersectionObserver } from '@vueuse/core';
import {  ref } from 'vue';
const target=ref(null)
useIntersectionObserver(target,([{isIntersecting}])=>{
  if(isIntersecting){
    console.log('进入了可视区');
  }else{
    console.log('没有进入可视区');
  }
})
const num = ref<number>(1)
const changeCount=(newValue:number)=>{
  num.value=newValue
}
</script>

<template>


  <!-- <Button type="primary" size="small">1111</Button>
  <Skeleton :height="30" :width="100" bg="pink"></Skeleton> -->
  <!-- <XtxButton type="primary" size="small"></XtxButton>
  <XtxSkeleton :height="30" :width="100" bg="pink"></XtxSkeleton> -->
  <MyCount :model-value="num" @update:modelValue="changeCount"></MyCount>
</template>

<style lang="less" scoped>
.height{
  padding: 2000px 0;
  height: 1000px;
}
</style>
