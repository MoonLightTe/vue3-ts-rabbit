import axios from 'axios';
import useStore from '@/store';
import { message } from '@/components';

// 创建axios实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    //设置请求拦截器
    const {member} =useStore();
    const {token} =member.profile;
    if(token && config.headers){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if(error.code === 'ERR_NETWORK'){
      // 无网络，错误提示
      message({type:'error',text:"亲，换个网络试试~"})
    }else{
      message({type:'error',text:error.response.data.message})
    }
    return Promise.reject(error);
  }
);
interface Res<T> {
  code: string;
  msg: string;
  result: T;
}
export const http = <U>(method: string, url: string, submitData?: object) => {
  const res = request.request<Res<U>>({
    method,
    url,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData,
  });
  return res;
};

export default request;
