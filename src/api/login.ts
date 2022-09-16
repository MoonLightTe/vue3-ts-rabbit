import request from '@/utils/request';
import type state from '@/type/index';

type Res<T> = {
  code: string;
  msg: string;
  result: T;
};

export const login = (data: { account: string; password: string }) => {
  return request.post<Res<state.Profile>>('/login', data);
};

// qq登录后绑定账号
export const loginSocialBind = (data: {
  unionId: string;
  mobile: string;
  code: string;
}) => {
  return request.post('/login/social/bind', data);
};

//  发送验证码
export const sendCode = (params: { mobile: string }) => {
  return request.get('/login/social/code', {
    params
  });
};
