import request from '@/utils/request';

export const createOrder = () => {
  return request.get('/member/order/pre')
};
