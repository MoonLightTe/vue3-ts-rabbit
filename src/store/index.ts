// 引入home模块数据管理
import useHome from './modules/home';

const useStore = () => {
  return {
    useHome,
  };
};

export default useStore;
