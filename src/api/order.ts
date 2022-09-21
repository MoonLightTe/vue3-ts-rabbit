import request from "@/utils/request";
 interface Address {
  receiver:string,
  contact: string,
  provinceCode: string,
  cityCode: string,
  countyCode: string,
  address: string,
  postalCode: string,
  addressTags: string,
  isDefault: number,
  fullLocation: string,
 }
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



