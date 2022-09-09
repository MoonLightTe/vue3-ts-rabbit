import axios from 'axios';

// 创建axios实例
const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  function (config) {
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
    return Promise.reject(error);
  }
);
export const http = (method:string,url:string,submitData?:object)=>{
  return request.request({
    method,
    url,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']:submitData
  })
}

export default request;
