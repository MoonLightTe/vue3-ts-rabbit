import request from "@/utils/request";
import type state from '@/type/index'

type Res<T> ={
  code:string,
  msg:string,
  result:T
}

export const getHomeCategory=()=>{
    return request.get<Res<state.CategoryList>>('/home/category/head')
}


