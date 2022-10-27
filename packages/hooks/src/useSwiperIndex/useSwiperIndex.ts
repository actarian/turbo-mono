import { useCallback, useEffect, useState } from 'react';
import Swiper from 'swiper';
import { useSwiper } from 'swiper/react';

export function useSwiperIndex(): [number, (index: number) => void] {
  const swiper = useSwiper();

  const [index, setIndex] = useState<number>(swiper.realIndex);

  const slideTo = useCallback((index: number) => {
    swiper.slideTo(index);
  }, [swiper]);

  const onSlideChange = (swiper: Swiper) => {
    setIndex(swiper.realIndex);
  }

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', onSlideChange);
    }
    return () => {
      if (swiper) {
        swiper.off('slideChange', onSlideChange);
      }
    };
  }, [swiper]);

  return [index, slideTo];
}
