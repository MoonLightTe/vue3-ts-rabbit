<script setup lang="ts">
import AppTopnav from './components/app-topnav.vue';
import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
import AppHeaderSticky from './components/app-header-sticky.vue';
</script>

<template>
  <AppTopnav />
  <AppHeaderSticky />
  <AppHeader />
  <RouterView :key="$route.fullPath"/>
  <AppFooter />
</template>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
