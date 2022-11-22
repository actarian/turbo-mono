import { ArrowLeft, ArrowRight } from '@websolute/icons';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

const SwiperButton = styled.button`
  border: none;
  text-decoration: none;
  background: none;
  appearance: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  width: 4rem;
  height: 4rem;
  margin-top: -2rem;
  font-size: 2rem;
  line-height: 1;
  border-radius: 50%;
  border: 2px solid transparent;
  color: var(--color-neutral-100);
  cursor: pointer;
  z-index: 1;
  transition: all ease-in-out 250ms;

  svg {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    border-color: var(--color-primary-300);
  }

  &>span {
    font-size: 0;
  }
`;

const SwiperButtonNext = styled(SwiperButton)`
  right: var(--grid-column-gap);
`;

export const SwiperNext: React.FC<{}> = () => {
  const swiper = useSwiper();
  return (
    <SwiperButtonNext className="btn--navigation btn--navigation-next" onClick={() => swiper.slideNext()}>
      <span>next</span>
      <ArrowRight />
    </SwiperButtonNext>
  );
};

const SwiperButtonPrev = styled(SwiperButton)`
  left: var(--grid-column-gap);
`;

export const SwiperPrev: React.FC<{}> = () => {
  const swiper = useSwiper();
  return (
    <SwiperButtonPrev className="btn--navigation btn--navigation-prev" onClick={() => swiper.slidePrev()}>
      <span>next</span>
      <ArrowLeft />
    </SwiperButtonPrev>
  );
};
