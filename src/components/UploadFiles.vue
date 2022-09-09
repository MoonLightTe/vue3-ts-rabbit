<script lang="ts" setup>
import { ref } from 'vue';
const fileInput= ref<HTMLInputElement>()
console.log('4fileInput: ', fileInput.value);
</script>

<template>
  <input ref="fileInput" type="file" placeholder="选择你的文件" />
  <!-- <button @click="onSubmit">提交</button> -->
</template>
