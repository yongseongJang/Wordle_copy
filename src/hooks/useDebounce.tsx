import { useEffect, useRef } from 'react';

function useDebounce() {
  const timer = useRef(null);

  const debounce = (callback, time) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback();
      timer.current = null;
    }, time);
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return debounce;
}

export default useDebounce;
