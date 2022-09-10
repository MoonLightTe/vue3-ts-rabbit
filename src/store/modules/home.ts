import { defineStore } from 'pinia';
import { getHomeCategory, getBannerList } from '@/api/home';
import type { CategoryList, BannerList } from '@/type/modules/home';
import { http } from '@/utils/request';

const useHome = defineStore('home', {
  state: () => {
    return {
      categoryList: [] as CategoryList,
      bannerList: [] as BannerList,
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
      console.log('res: ', res);
      return res;
    },
    async getBannerList() {
      const res = await getBannerList();
      this.bannerList = res.data.result;
    },
  },
});
export default useHome;
