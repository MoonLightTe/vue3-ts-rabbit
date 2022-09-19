import { defineStore } from 'pinia';
import {
  addCart,
  getCartList,
  deleteCart,
  updateCart,
  AllCheck,
} from '@/api/cart';
import type { AddGoods, CartList,CartItem } from '@/type/index';
import useStore from '..';
import { message } from '@/components';

const userCartStore = defineStore('cart', {
  // 开启本地数据持久化
  persist:true,
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
    effectiveListPrice(): number {
      return this.effectiveList.reduce(
        (sum, item) => sum + Number(item.nowPrice) * item.count,
        0
      );
    },
    /**
     * 计算全选按钮的状态
     *
     */
    isAllCheck(): boolean {
      return (
        this.effectiveList.length > 0 &&
        this.effectiveList.every((item) => item.selected)
      );
    },
    /**
     * 是否登录
     */
    isLogin(): boolean {
      const { member } = useStore();
      return member.isLogin;
    },
    /**
     * 已选中的列表
     *
     */
    selectedList(): CartList {
      return this.effectiveList.filter((item) => item.selected);
    },
    /**
     * 已选择的商品总数
     */
    selectedListCount(): number {
      return this.selectedList.reduce((sum, item) => sum + item.count, 0);
    },
    /**
     * 已选择的列表总价
     */
    selectedListPrice(): string {
      return this.selectedList
        .reduce((sum, item) => sum + item.count * Number(item.nowPrice), 0)
        .toFixed(2);
    },
  },
  // 方法
  actions: {
    async addCart(data: AddGoods | CartItem) {
      if (this.isLogin) {
        //登录状态 调用接口
        await addCart(data as AddGoods) ;
        this.getCartList();
      } else {
        // 未登录状态，操作本地数据
        // 购物车是否有本地数据
        const cartItem= this.cartList.find(item=>item.skuId===data.skuId)
        if(cartItem){
          cartItem.count += data.count
        }else{
          //没有就push进去
          this.cartList.unshift(data as CartItem)
        }
        // 提示用户 添加成功
        message({type:'success',text:'成功添加到数据车'})
      }
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
    async delCart(data: { ids: string[] }) {
      if(this.isLogin){
        // 删除此条数据
        await deleteCart(data);
        this.getCartList();
      }else{
        this.cartList=this.cartList.filter(item=>item.skuId !== data.ids[0])
      }
      message({type:"error",text:'删除成功'})
    },
    /**
     * 更新购物车的选中和数量
     */
    async updateCart(
      skuId: string,
      data?: { selected?: boolean; count?: number }
    ) {

      if(this.isLogin){
     await updateCart(skuId, data);
      // 获取最新的购物车列表
      this.getCartList();
      }else{
      const cartItem= this.cartList.find(item=>item.skuId === skuId) as CartItem;
        if(data?.count){
          cartItem.count=data.count
        }
        if(data?.selected !== undefined){
          cartItem.selected=data.selected
        }

      }

    },
    /**
     *更改全选按钮的状态
     */
    async changeAllCheckState(data: { selected: boolean; ids?: string[] }) {
      if (this.isLogin) {
       await AllCheck(data);
        message({ type: 'success', text: '操作成功' });
        this.getCartList();
      } else {
        this.cartList.forEach(item=>item.selected = data.selected)
        message({ type: 'success', text: '操作成功' });
      }
    },
    /**
     * 退出登录，清空购物车
     */
    clearCart() {
      this.cartList = [];
    },
  },
});

export default userCartStore;
