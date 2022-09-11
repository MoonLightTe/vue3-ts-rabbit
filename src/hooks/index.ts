import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

export const useObserver = (ApiFn: () => void) => {
  const target = ref(null);
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if(isIntersecting){
        ApiFn()
        stop()
      }
    }
  );
  return {target}
};