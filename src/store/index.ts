// 引入home模块数据管理
import useHome from './modules/home';
import useMemberStore from './modules/member';
import userCartStore from './modules/cart';

const useStore = () => {
  return {
    useHome,
    member:useMemberStore(),
    cart:userCartStore()
  };
};

export default useStore;
