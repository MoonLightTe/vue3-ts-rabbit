import { defineStore } from 'pinia';
import { getHomeCategory } from '@/api/home';
import type { CategoryList } from '@/type/modules/home';

const useHome = defineStore('home', {
  state: () => {
    return {
      categoryList:[] as CategoryList,
    };
  },
  getters: {},
  actions: {
   async getAllCategory(){
    const res = await getHomeCategory()
    console.log('res: ', res);
    this.categoryList=res.data.result
   }
  },
});
export default useHome;


