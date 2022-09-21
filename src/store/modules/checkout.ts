import { defineStore } from "pinia";
import {createOrder} from '@/api/checkout'
import type { CheckoutInfo,OrderDetail } from "@/type";
import {getOrderDetail} from '@/api/pay'


const useCheckoutStore=defineStore('checkout',{
  // state 相当于data
  state:()=>({
    checkoutInfo:{} as CheckoutInfo,
    orderDetail:{} as OrderDetail
  }),
  // getters 相当于computed
  getters:{},
  // actions 相当于methods
  actions:{
  async  getCheckoutInfo(){
     const res =await createOrder()
     this.checkoutInfo=res.data.result
    },
    // 获取支付详情
  async getOrderDetail(id:string){
    const res =await getOrderDetail(id)
    this.orderDetail=res.data.result
  }
  }
})

export default useCheckoutStore;


