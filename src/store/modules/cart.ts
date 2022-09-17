import { defineStore } from 'pinia';
import { addCart } from '@/api/cart';
import type { AddGoods } from '@/type/index';

const userCartStore = defineStore('cart', {
  // 状态
  state: () => ({
    // 购物车列表
    cartList: [],
  }),
  // 计算
  getters: {},
  // 方法
  actions: {
    async addCart(data: AddGoods) {
      const res = await addCart(data);
      console.log(' res: ', res);
    },
  },
});

export default userCartStore;
