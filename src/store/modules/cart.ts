import { defineStore } from 'pinia';
import { addCart,getCartList } from '@/api/cart';
import type { AddGoods,CartList } from '@/type/index';

const userCartStore = defineStore('cart', {
  // 状态
  state: () => ({
    // 购物车列表
    cartList: [] as CartList ,
  }),
  // 计算
  getters: {},
  // 方法
  actions: {

    async addCart(data: AddGoods) {
      const res = await addCart(data);
      console.log(' res: ', res);
      this.getCartList()
    },
    /**
     *  pinia中获取购物车列表
     */
   async getCartList(){
      const res = await getCartList()
      console.log('购物车列表 : ', res );
      this.cartList=res.data.result
    }
  },
});

export default userCartStore;
