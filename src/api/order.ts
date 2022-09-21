import request from "@/utils/request";
/**
 * 添加收货地址信息
 * @params {object} address -地址对象
 */
export const requestAddress=(address:object)=>request.post('/member/address',address)
/**
 * 获取收货地址列表
 */
export const reqFindAddAddress =()=>{
  return request.get('/member/address')
}



