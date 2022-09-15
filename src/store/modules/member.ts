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
    // 登录逻辑
    async login(data:{account:string,password:string}){
      const res = await login(data)
      this.profile=res.data.result
      // 调用message组件
      message({type:"success",text:"登录成功"})
      console.log('router:11111 ', router.currentRoute.value);
      const { target = "/" } = router.currentRoute.value.query;
      // 跳转到指定地址
      router.push(target as string);
      // 调用路由
      // router.push('/')
    },
    // 退出登录
    async logout(){
      // 清除pPinia中的用户信息
      this.profile={} as Profile;
      // 2.提示用户
      message({type:'success',text:'退出成功'})
      //
      router.push('/login')
    }
  },
});

export default useMemberStore;
