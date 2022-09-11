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

// 封装轮播图数据
export const getBannerList=()=>{
  return request.get<Res<state.BannerList>>('/home/banner')
}

// 获取新鲜好物模块
export const getNewsGoodsList=(params:any)=>{
  return request.get<Res<state.newGoodsList>>('/home/new', {params})
}


