<script setup lang="ts">
import useStore from '@/store';
const { checkout } = useStore();
checkout.getCheckoutInfo()
</script>

<template>
  <div>结算页面</div>
</template>
