import { defineStore } from 'pinia';
import { login } from '@/api/login';
// 引人类型声明
import type { Profile } from '@/type/modules/member';
import { message } from '@/components';
// 导入路由实例
import router from '@/router/index'

const useMemberStore = defineStore('member', {
  // 开启数据持久化
  persist:true,
  state: () => ({
    // 用户信息
    profile:{} as Profile
  }),
  getters: {
    // 在getters 中使用this需要声明返回值
    isLogin():boolean{
      return Boolean(this.profile.token)
    }
  },
  actions: {
    async login(data:{account:string,password:string}){
      const res = await login(data)
      this.profile=res.data.result
      // 调用message组件
      message({type:"success",text:"登录成功"})
      // 调用路由
      router.push('/')
    }
  },
});

export default useMemberStore;
