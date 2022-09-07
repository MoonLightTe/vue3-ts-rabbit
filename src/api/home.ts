import request from "@/utils/request";

export const  getHomeCategory=()=>{
    return request.get('/home/category/head')
}


