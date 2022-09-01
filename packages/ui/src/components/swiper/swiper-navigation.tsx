import { ArrowLeft, ArrowRight } from '@ui-icons';
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
  font-size: 1em;
  line-height: 1;
  margin-top: -1.5rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid transparent;
  color: var(--color-neutral-100);
  position: absolute;
  top: 50%;
  right: 2rem;
  cursor: pointer;
  z-index: 1;
  font-size: 2rem;
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
    <SwiperButtonNext onClick={() => swiper.slideNext()}>
      <span>next</span>
      <ArrowRight />
    </SwiperButtonNext>
  );
}

const SwiperButtonPrev = styled(SwiperButton)`
  left: var(--grid-column-gap);
`;

export const SwiperPrev: React.FC<{}> = () => {
  const swiper = useSwiper();
  return (
    <SwiperButtonPrev onClick={() => swiper.slidePrev()}>
      <span>next</span>
      <ArrowLeft />
    </SwiperButtonPrev>
  );
}
