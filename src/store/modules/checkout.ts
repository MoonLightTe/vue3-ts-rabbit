import { defineStore } from "pinia";
import {createOrder} from '@/api/checkout'
import type { CheckoutInfo } from "@/type";


const useCheckoutStore=defineStore('checkout',{
  // state 相当于data
  state:()=>({
    checkoutInfo:{} as CheckoutInfo
  }),
  // getters 相当于computed
  getters:{},
  // actions 相当于methods
  actions:{
  async  getCheckoutInfo(){
     const res =await createOrder()
     this.checkoutInfo=res.data.result
    }
  }
})

export default useCheckoutStore;


