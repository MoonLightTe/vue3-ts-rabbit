import { defineStore } from 'pinia';
import { getHomeCategory, getBannerList,getNewsGoodsList } from '@/api/home';
import type { CategoryList, BannerList,newGoodsList } from '@/type/modules/home';
import { http } from '@/utils/request';

const useHome = defineStore('home', {
  persist:true,
  state: () => {
    return {
      categoryList: [] as CategoryList,
      bannerList: [] as BannerList,
      newGoodsList :[] as newGoodsList
    };
  },
  getters: {},
  actions: {
    async getAllCategory() {
      const res = await getHomeCategory();
      this.categoryList = res.data.result;
    },
    async getList() {
      const res = await http<CategoryList>('get', '/home/category/head');
      return res;
    },
    async getBannerList() {
      const res = await getBannerList();
      this.bannerList = res.data.result;
    },
    async getNewsGoodsList(){
      const res = await getNewsGoodsList({ limit:4 })
      this.newGoodsList=res.data.result
    }
  },
});
export default useHome;
