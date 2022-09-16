<script setup lang="ts">
//接收父祖件的数据
import type { QQUserInfo } from '@/type';
import { reactive, ref } from 'vue';
import { message } from '@/components';
import { checkUserName, registerCode, RegisterUser } from '@/api/login';
import { userCount } from '@/hooks';
import useStore from '@/store';
const { member } = useStore();
const { count, start } = userCount();
const props = defineProps<{
  userInfo: QQUserInfo;
  unionId: string;
}>();
const form = reactive({
  account: '',
  mobile: '',
  code: '',
  password: '',
});
// 声明一个非法字符的数组
// const illegalCharacter=[' ']
// 密码格式的要求
const passwordReg =
  /^([a-zA-Z]+[0-9]+[,._!@#$%^&*]+)|([a-zA-Z]+[,._!@#$%^&*]+[0-9]+)|([0-9]+[,._!@#$%^&*]+[a-zA-Z]+)|([0-9]+[a-zA-Z]+[,._!@#$%^&*]+)|([,._!@#$%^&*]+[a-zA-Z]+[0-9]+)|([,._!@#$%^&*]+[0-9]+[a-zA-Z]+)$/;
// 用户名的要求
const userNameReg = /^\w+$/;
const password = ref(''); // 校验密码的的双向绑定
const checkPassword = () => {
  if (!form.password) return message({ type: 'error', text: '密码不能为空' });
  if (!passwordReg.test(form.password))
    return message({
      type: 'error',
      text: '密码只要8位,且至少包含数字，大小写字符，特殊符号',
    });
};
const checkPasswordAlign = () => {
  if (!password.value) return message({ type: 'error', text: '密码不能为空' });
  if (password.value !== form.password)
    return message({ type: 'error', text: '两次密码不一致' });
};
const chenckAccount = async () => {
  if (!form.account) return message({ type: 'error', text: '用户名不能为空' });
  if (!userNameReg.test(form.account))
    return message({ type: 'error', text: '用户名不合法' });
  const res = await checkUserName({ account: form.account });
  if (res.data.result.valid) {
    message({ type: 'error', text: '用户名已经存在' });
  }
};
const checkMobile = async () => {
  if (!form.mobile) {
    message({ type: 'error', text: '手机号不能为空' });
    return false;
  }
  if (!/^1[3-9]\d{9}$/.test(form.mobile)) {
    message({ type: 'error', text: '手机号不正确' });
    return false;
  }
  const res = await checkUserName({ account: form.mobile });
  if (res.data.result.valid) {
    message({ type: 'error', text: '手机号已经存在' });
    return false;
  }
  return true;
};
// 发送验证码
const sendCode = async () => {
  const res = await checkMobile();
  if (res) {
    const code = await registerCode({ mobile: form.mobile, type: 'register' });
    console.log('res: ', code);
    start(60);
  } else {
    message({ type: 'error', text: '手机号已经存在' });
  }
};
// 验证code
const checkCode = () => {
  if (!form.code) return message({ type: 'error', text: '验证码不能为空' });
};
// 注册用户
const registerUser = async () => {
  checkPassword();
  checkPasswordAlign();
  chenckAccount();
  checkMobile();
  checkCode();
  const res = await RegisterUser(form, props.unionId);
  console.log('res: ', res);
  member.profile = res.data.result;
  if (member.isLogin) {
    member.loginSuccess();
  }
};
</script>

<template>
  <div class="xtx-form">
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-user"></i>
        <input
          class="input"
          type="text"
          placeholder="请输入用户名"
          v-model.trim="form.account"
          @blur="chenckAccount"
        />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          type="text"
          placeholder="请输入手机号"
          v-model.trim="form.mobile"
          @blur="checkMobile"
        />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input
          class="input"
          type="text"
          placeholder="请输入验证码"
          v-model.trim="form.code"
          @blur="checkCode"
        />
        <span class="code" @click="sendCode">{{
          count === 0 ? '发送验证码' : count
        }}</span>
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          type="password"
          placeholder="请输入密码"
          v-model.trim="form.password"
          @blur="checkPassword"
        />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          type="password"
          placeholder="请确认密码"
          v-model="password"
          @blur="checkPasswordAlign"
        />
      </div>
      <div class="error"></div>
    </div>
    <a href="javascript:;" class="submit" @click="registerUser">立即提交</a>
  </div>
</template>

<style scoped lang="less">
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
  &:hover {
    cursor: pointer;
  }
}
</style>
