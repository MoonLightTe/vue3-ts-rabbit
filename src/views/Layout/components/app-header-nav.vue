<script lang="ts" setup>
import { onMounted } from 'vue';
import useStore from '@/store';
const { useHome } = useStore();
onMounted(async () => {
  await useHome().getAllCategory();
});
</script>

<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <template v-if="useHome().categoryList.length > 0">
      <li v-for="item in useHome().categoryList" :key="item.id">
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
      </li>
    </template>
    <template v-else>
      <li v-for="i in 9" :key="i">
        <XtxSkeleton :width="50" :height="20" style="margin: 8px 5px 0 0" bg="pink" />
      </li>
    </template>
  </ul>
</template>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}
</style>
