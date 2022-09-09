import { defineStore } from 'pinia';
import { getHomeCategory } from '@/api/home';
import type { CategoryList } from '@/type/modules/home';
import { http } from '@/utils/request';

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
   },
   async getList(){
  const res = http<CategoryList>('get','/home/category/head')
  console.log('res: ', res);
   }
  },
});
export default useHome;


