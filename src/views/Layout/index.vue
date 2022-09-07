<script setup lang="ts">
import AppTopnav from './components/app-topnav.vue';
import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
// 引入仓库实例
import useStore from '@/store';
const { useHome } = useStore();
const res=useHome().getAllCategory()
console.log('res: ', res);
</script>

<template>
  <AppTopnav />
  <AppHeader />
  <AppFooter />
</template>

<style lang="less" scoped></style>
