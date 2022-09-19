//添加商品
import request from '@/utils/request'
import type { AddGoods,CartItem,CartList,mergeItem } from '@/type'
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
 * @param data SKUID的数组 必须传一个数组
 *
 */
export const deleteCart=(data:{ids:string[]})=>{
  return request.delete('/member/cart',{
    data
  })
}
/**
 * 更新表单的状态
 * @params id 商品的skuid
 * @params data 可选的更改数据
 *
 */
export const updateCart =(id:string,data?:{selected?:boolean,count?:number})=>{
  return request.put<Res<any>>(`/member/cart/${id}`,data)
}

/**
 * 封装全选和反选的接口
 * @params selected 是否选中
 * @params ids skuId即商品id的合集
 *
 */
export const AllCheck=(data:{selected:boolean,ids?:string[]})=>{
  return request.put('/member/cart/selected',data)
}

/**
 * 查询商品库存的价格信息
 */
export const queryGoodsInfo=(id:string)=>{
  return request.get<Res<CartItem>>(`/goods/stock/${id}`)
}

/**
 * 合并本地的购物车
 */
export const mergeLocalCarts=(data:mergeItem[])=>{
  return request.post('/member/cart/merge',data)
}


