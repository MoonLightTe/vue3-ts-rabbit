import { def } from "@vue/shared";
import { defineStore } from "pinia";

const userCartStore =defineStore('cart',{
  // 状态
  state:()=>({
    // 购物车列表
    cartList:[],
  }),
  // 计算
  getters:{},
  // 方法
  actions:{}
})

export default userCartStore;

