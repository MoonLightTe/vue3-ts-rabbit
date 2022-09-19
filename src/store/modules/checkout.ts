import { defineStore } from "pinia";
import {createOrder} from '@/api/checkout'


const useCheckoutStore=defineStore('checkout',{
  // state 相当于data
  state:()=>({
    checkoutInfo:{}
  }),
  // getters 相当于computed
  getters:{},
  // actions 相当于methods
  actions:{
  async  getCheckoutInfo(){
     const res =await createOrder()
     console.log('res: ', res);
    }
  }
})

export default useCheckoutStore;


