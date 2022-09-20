<script setup lang="ts">
const emit = defineEmits<{
  (event: 'update:visible', value: boolean): void;
}>();
defineProps<{
  visible: boolean;
}>();
const verifyBtn = () => {
  
};
const cancelBtn = () => {
  emit('update:visible', false);
};
</script>

<template>
  <XtxDialog title="切换收货地址" :visible="visible" @close="cancelBtn">
    <template #default>
      <h1>对话框内容</h1>
    </template>
    <template #footer>
      <XtxButton type="gray" style="margin-right: 20px" @click="cancelBtn">
        取消
      </XtxButton>
      <XtxButton type="primary" @click="verifyBtn">确认</XtxButton>
    </template>
  </XtxDialog>
</template>

<style lang="less" scoped></style>
