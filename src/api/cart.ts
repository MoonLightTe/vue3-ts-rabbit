//添加商品
import request from '@/utils/request'
import type { AddGoods } from '@/type'

export const addCart = (data:AddGoods)=>{
  return request.post('/member/cart',data)
}

