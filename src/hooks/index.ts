import { useIntersectionObserver } from '@vueuse/core';
import { ref, onUnmounted } from 'vue';

export const useObserver = (ApiFn: () => void) => {
  const target = ref(null);
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      ApiFn();
      stop();
    }
  });
  return { target };
};

export const userCount = () => {
  //声明一个count
  let count = ref(0);
  // 声明一个定时器结束函数
  let timer = -1;
  const start = (time: number) => {
    if(count.value !== 0) return;
    count.value = time;
    timer = setInterval(() => {
      count.value--
      if(count.value <= 0){
      clearInterval(timer)
      }
    }, 1000);
  };
  onUnmounted(()=>{
    clearInterval(timer)
  })
  return {
    count,
    start
  }
};
