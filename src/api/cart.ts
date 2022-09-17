//添加商品
import request from '@/utils/request'
import type { AddGoods,CartList } from '@/type'
type Res<T> = {
  code: string;
  msg: string;
  result: T;
};
// 添加商品到购物车
export const addCart = (data:AddGoods)=>{
  return request.post('/member/cart',data)
}
// 获取到购物车列表 jsDoc
/**
 *  获取购物车列表
 *  @return 返回一个promise 其中有购物车的列表
 */
export const getCartList=()=>{
  return request.get<Res<CartList>>('/member/cart')
}

/**
 * 删除购物车信息
 * @param data SKUID 集合
 *
 */
export const deleteCart=(data:{ids:string[]})=>{
  return request.delete('/member/cart',{
    data
  })
}
