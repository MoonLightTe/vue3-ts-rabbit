<script setup lang="ts">
import { ref } from 'vue';
import { requestAddress, reqFindAddAddress } from '@/api/order';
import { message } from '@/components';
import useStore from '@/store';
import { storeToRefs } from 'pinia';
//  准备控制弹框展示的响应式数据
const props = defineProps<{
  addVisible: boolean;
}>();
const emit = defineEmits<{
  (e: 'update:addVisible', isShow: boolean): void;
}>();
// 表单数据
let formData = ref({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  address: '',
  postalCode: '',
  addressTags: '',
  isDefault: 0,
  fullLocation: '',
});
const closeDialog = () => {
  formData.value = {
    receiver: '',
    contact: '',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
    address: '',
    postalCode: '',
    addressTags: '',
    isDefault: 0,
    fullLocation: '',
  };
  emit('update:addVisible', false);
};
interface ChangeResult {
  provinceCode: string;
  provinceName: string;
  cityCode: string;
  cityName: string;
  countyCode: string;
  countyName: string;
}
const { checkout } = useStore();
const { checkoutInfo } = storeToRefs(checkout);
// 选择地区
const changeCty = (data: ChangeResult) => {
  formData.value.provinceCode = data.provinceCode;
  formData.value.cityCode = data.cityCode;
  formData.value.countyCode = data.countyCode;
  // formData.fullLocation = data.fullLocation
};
// 提交新增地址表单成功
const submitForm = async () => {
  const res = await requestAddress(formData.value);
  if (res.data.code === '1') {
    message({ type: 'success', text: '新增地址成功' });
    emit('update:addVisible', false);
    const addressList = await reqFindAddAddress();
    checkoutInfo.value.userAddresses = addressList.data.result;
  }
};
</script>

<template>
  <!-- 弹框布局 -->
  <XtxDialog title="添加收货地址" :visible="addVisible" @close="closeDialog">
    <div class="address-edit">
      <div class="xtx-form">
        <div class="xtx-form-item">
          <div class="label">收货人：</div>
          <div class="field">
            <input
              v-model="formData.receiver"
              class="input"
              placeholder="请输入收货人"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">手机号：</div>
          <div class="field">
            <input
              v-model="formData.contact"
              class="input"
              placeholder="请输入手机号"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">地区：</div>
          <div class="field">
            <XtxCity placeholder="请选择所在地区" @change="changeCty" />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">详细地址：</div>
          <div class="field">
            <input
              v-model="formData.address"
              class="input"
              placeholder="请输入详细地址"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">邮政编码：</div>
          <div class="field">
            <input
              v-model="formData.postalCode"
              class="input"
              placeholder="请输入邮政编码"
            />
          </div>
        </div>
        <div class="xtx-form-item">
          <div class="label">地址标签：</div>
          <div class="field">
            <input
              v-model="formData.addressTags"
              class="input"
              placeholder="请输入地址标签，逗号分隔"
            />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <XtxButton type="gray" style="margin-right: 20px" @click="closeDialog"
        >取消</XtxButton
      >
      <XtxButton type="primary" @click="submitForm">确认</XtxButton>
    </template>
  </XtxDialog>
</template>

<style scoped lang="less">
// 样式优化：
.xtx-city {
  margin-left: 0px;
  /deep/ .select {
    height: 50px;
    line-height: 50px;
  }
  /deep/ .select .value {
    font-size: 14px;
  }
}
</style>
