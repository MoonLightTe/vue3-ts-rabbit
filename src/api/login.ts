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
