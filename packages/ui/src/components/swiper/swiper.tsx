// Import Swiper React components
import { withSchema } from '@websolute/core';
import React, { ReactNode } from 'react';
// import { Virtual } from 'swiper';
// import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { SwiperNext, SwiperPrev } from './swiper-navigation';
import { SwiperPagination } from './swiper-pagination';

export type SwiperBaseProps = SwiperProps & { children: ReactNode[] };

const SwiperBase = (props: SwiperBaseProps) => {
  const defaultProps = {
    // modules: [Virtual],
    // virtual: true,
    // modules: [Navigation, Pagination, Scrollbar, A11y],
    // scrollbar: { draggable: true },
    // modules: [Navigation, Pagination],
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    // onSlideChange: () => console.log('slide change'),
    // onSwiper: (swiper: any) => console.log(swiper),
  };
  const swiperProps = { ...defaultProps, ...props };
  return (
    <Swiper {...swiperProps}>
      {React.Children.map(swiperProps.children, (child, i) => (
        <SwiperSlide key={i} virtualIndex={i}>{child}</SwiperSlide>
      ))}
      {swiperProps.navigation && <>
        <SwiperPrev />
        <SwiperNext />
      </>}
      {swiperProps.pagination && <SwiperPagination items={swiperProps.children} />}
    </Swiper>
  );
};

export const SwiperComponent = withSchema(SwiperBase, {
  Prev: SwiperPrev,
  Next: SwiperNext,
  Pagination: SwiperPagination,
  displayName: 'SwiperComponent',
});
