<script setup lang="ts">
import type { CheckoutInfo } from '@/type';
import { ref,} from 'vue';

const emit = defineEmits<{
  (event: 'update:visible', value: boolean): void;
  (event: 'update:index', value: number): void;
}>();
const props= defineProps<{
  visible: boolean;
  checkoutInfo:CheckoutInfo
  index:number
}>()
const temp = ref(props.index)
const verifyBtn = () => {
  emit('update:index',temp.value)
  emit('update:visible', false);
};
const cancelBtn = () => {
  emit('update:visible', false);
};
</script>

<template>
   <!--
   fixed 定位 会被祖先元素的 transform、perspective、filter 影响
    祖先元素 transform、perspective、filter 不为 none的时候
    fixed定位的参照物会是该祖先元素
   -->
 <!-- <div style="transform: translate(0)"> -->
  <Teleport to="#modul">
  <XtxDialog title="切换收货地址" :visible="visible" @close="cancelBtn">
    <template #default>
      <div class="addressWrapper">
            <div
              class="text item"
              v-for="(item, i) in checkoutInfo?.userAddresses"
              :key="item.id"
              :class="{ active: temp === i }"
              @click="temp = i"
            >
            <ul>
              <li><span>收&emsp;货&emsp;人：</span>{{ item.receiver }}</li>
              <li><span>联系方式：</span>{{ item.contact }}</li>
              <li>
                <span>收货地址：</span>{{ item.fullLocation + item.address }}
              </li>
            </ul>
          </div>
        </div>
    </template>
    <template #footer>
      <XtxButton type="gray" style="margin-right: 20px" @click="cancelBtn">
        取消
      </XtxButton>
      <XtxButton type="primary" @click="verifyBtn">确认</XtxButton>
    </template>
  </XtxDialog>
</Teleport>
  <!-- </div> -->
</template>

<style lang="less" scoped>
  .xtx-dialog {
  .addressWrapper {
    max-height: 500px;
    overflow-y: auto;
  }
  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;
    &.item {
      border: 1px solid #f5f5f5;
      margin-bottom: 10px;
      cursor: pointer;
      &.active,
      &:hover {
        border-color: @xtxColor;
        background: lighten(@xtxColor, 50%);
      }
      > ul {
        padding: 10px;
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
}
// common.less
*::-webkit-scrollbar {
    width: 5px;
    // height: 10px; // 高度写不写，都不影响，因为会根据内容的长度自动计算
}

*::-webkit-scrollbar-thumb {
    background: #ccc; // 滑块颜色
    border-radius: 5px; // 滑块圆角
}

// 兼容Firefox、IE
* {
    scrollbar-width: 10px;
    scrollbar-base-color: green;
    scrollbar-track-color: red;
    scrollbar-arrow-color: blue;
}
</style>
