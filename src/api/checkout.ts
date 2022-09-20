import request from '@/utils/request';
import type { CheckoutInfo } from '@/type';
type Res<T> = {
  code: string;
  msg: string;
  result: T;
};

export const createOrder = () => {
  return request.get<Res<CheckoutInfo>>('/member/order/pre')
};
