// 引入home模块数据管理
import useHome from './modules/home';
import useMemberStore from './modules/member';
import userCartStore from './modules/cart';
import useCheckoutStore from './modules/checkout'

const useStore = () => {
  return {
    useHome,
    member:useMemberStore(),
    cart:userCartStore(),
    checkout:useCheckoutStore()
  };
};

export default useStore;
