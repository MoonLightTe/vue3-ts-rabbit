import { defineStore } from 'pinia';
import { login } from '@/api/login';

const useMemberStore = defineStore('member', {
  state: () => ({}),
  getters: {},
  actions: {
    async login(data:{account:string,password:string}){
      const res = await login(data)
      console.log('res: ', res.data.result);
    }
  },
});

export default useMemberStore;
