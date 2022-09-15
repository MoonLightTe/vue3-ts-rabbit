// 引入home模块数据管理
import useHome from './modules/home';
import useMemberStore from './modules/member';

const useStore = () => {
  return {
    useHome,
    member:useMemberStore(),
  };
};

export default useStore;
