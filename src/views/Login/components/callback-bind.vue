<script setup lang="ts">
// import type { QQUserInfo } from '@/types';
import useStore from '@/store';
import type { QQUserInfo } from '@/type';
import { reactive,ref } from 'vue';
import { message } from '@/components';
const props= defineProps<{
  userInfo: QQUserInfo,
  unionId:string
}>()
const { member } = useStore();

// keepAlive 会把 form 的数据保留下来const props=
const form = reactive({
  mobile: '15915876393',
  code:'',
});
// 验证手机号是否正确
const isMobile=()=>{
  return /^1[3-9]\d{9}$/.test(form.mobile)
}
const sendCode=()=>{
  if(isMobile()){
    member.sendCode({mobile:form.mobile})
  }else{
    message({type:'error',text:'手机号验证不通过'})
  }
}
const loginSocialBind = () => {
  const data = {
    unionId:props.unionId,
    mobile: form.mobile,
    code: form.code,
  };
  member.loginSocialBind(data);
};

// 点击验证码
</script>

<template>
  <div class="xtx-form" v-if="userInfo">
    <div class="user-info">
      <!-- <img
        src="http://thirdqq.qlogo.cn/g?b=oidb&k=0V4hAibF6g8BBKUPlg7gR4w&s=640&t=1562057721"
        alt=""
      />
      <p>Hi，QQ用户名 欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~</p> -->
      <img :src="userInfo?.data?.figureurl" alt="" />
      <p>
        Hi，{{ userInfo?.data?.nickname }}
        欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~
      </p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          type="text"
          v-model="form.mobile"
          placeholder="绑定的手机号"
        />
      </div>
      <div class="error"></div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input class="input" type="text" placeholder="短信验证码" v-model="form.code" />
        <span class="code" @click="sendCode">发送验证码</span>
      </div>
      <div class="error"></div>
    </div>
    <a href="javascript:;" class="submit" @click="loginSocialBind">立即绑定</a>
  </div>
</template>

<style scoped lang="less">
.user-info {
  width: 320px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 25px;
  img {
    background: #f2f2f2;
    width: 50px;
    height: 50px;
  }
  p {
    padding-left: 10px;
  }
}
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
