import { defineStore } from 'pinia';
import { getHomeCategory } from '@/api/home';

const useHome = defineStore('home', {
  state: () => {
    return {
      money: 1000,
    };
  },
  getters: {},
  actions: {
   async getAllCategory(){
    const res = await getHomeCategory()
    console.log('res: ', res);
    return res
   }
  },
});
export default useHome;


