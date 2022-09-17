import { defineStore } from 'pinia';
import { addCart, getCartList,deleteCart,updateCart } from '@/api/cart';
import type { AddGoods, CartList } from '@/type/index';

const userCartStore = defineStore('cart', {
  // 状态
  state: () => ({
    // 购物车列表
    cartList: [] as CartList,
  }),
  // 计算
  getters: {
    // 购物车的商品可能被下架，下架后就变成无效商品
    // 商品被其他用户购买了，库存需要动态变化，没有库存的商品，也不能购买
    // 有效商品列表
    effectiveList(): CartList {
      return this.cartList.filter((item) => item.stock && item.isEffective);
    },
    // 有效商品的总数量 把effctiveList 中的每一项的count 叠加起来
    effectiveListCount(): number {
      return this.effectiveList.reduce((sum, item) => (sum += item.count), 0);
    },
    // 有效商品的总价格
    effectiveListPrice():number{
      return this.effectiveList.reduce((sum,item)=>sum + Number(item.nowPrice)*item.count,0)
    }
  },
  // 方法
  actions: {
    async addCart(data: AddGoods) {
      const res = await addCart(data);
      console.log(' res: ', res);
      this.getCartList();
    },
    /**
     *  pinia中获取购物车列表
     */
    async getCartList() {
      const res = await getCartList();
      console.log('购物车列表 : ', res);
      this.cartList = res.data.result;
    },
    // 删除购物车数据
   async delCart(data:{ids:string[]}){
    const res = await deleteCart(data)
    console.log('删除购物车列表 ', res);
    this.getCartList();
    },
    /**
     * 更新购物车的选中和数量
     */
    async updateCart(skuId:string,data?:{selected?:boolean,count?:number}){
      const res =await updateCart(skuId,data)
      console.log('res : ', res );
      // 获取最新的购物车列表
      this.getCartList()
    }
  },
});

export default userCartStore;
