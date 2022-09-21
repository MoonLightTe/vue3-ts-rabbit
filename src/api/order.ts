import request from "@/utils/request";
 import type {Address,SubOrder,SubmitCheckout} from '@/type'
 type Res<T> = {
  code: string;
  msg: string;
  result: T;
};
/**
 * 添加收货地址信息
 * @params {object} address -地址对象
 */
export const requestAddress=(address:Address)=>request.post<Res<any>>('/member/address',address)
/**
 * 获取收货地址列表
 */
export const reqFindAddAddress =()=>{
  return request.get<Res<any>>('/member/address')
}
/**
 * 提交订单信息
 * @param data
 */
export const submitOrder=(data:SubOrder)=>{
  return request.post<Res<SubmitCheckout>>('/member/order',data)
}



