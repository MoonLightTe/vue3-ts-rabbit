import request from '@/utils/request';
import type state from '@/type/index';
type Res<T> = {
  code: string;
  msg: string;
  result: T;
};
// 获取商品详情
export const getGoodsDetaile=(params:{id:string |string[]})=>{
  return request.get<Res<state.Goods>>('/goods',{params})
}


