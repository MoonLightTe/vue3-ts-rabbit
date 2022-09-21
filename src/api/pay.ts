import request from "@/utils/request";
import type { OrderDetail } from "@/type";

type Res<T> = {
  code: string;
  msg: string;
  result: T;
};
export const  getOrderDetail=(id:string)=>{
  return  request.get<Res<OrderDetail>>(`/member/order/${id}`)
}




