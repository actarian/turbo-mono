import { ArrowLeft, ArrowRight } from '@websolute/icons';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

const MediaGalleryButton = styled.button`
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
  width: 3rem;
  height: 3rem;
  margin-top: -1rem;
  font-size: 1rem;
  line-height: 1;
  border-radius: 50%;
  border: 2px solid transparent;
  color: var(--color-neutral-900);
  cursor: pointer;
  z-index: 1;
  transition: all ease-in-out 250ms;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    border-color: var(--color-primary-300);
  }

  &>span {
    font-size: 0;
  }
`;

const MediaGalleryButtonNext = styled(MediaGalleryButton)`
  right: 1rem;
`;

export const MediaGalleryNext: React.FC<{}> = () => {
  const swiper = useSwiper();
  return (
    <MediaGalleryButtonNext className="btn--navigation btn--navigation-next" onClick={() => swiper.slideNext()}>
      <span>next</span>
      <ArrowRight />
    </MediaGalleryButtonNext>
  );
};

const MediaGalleryButtonPrev = styled(MediaGalleryButton)`
  left: 1rem;
`;

export const MediaGalleryPrev: React.FC<{}> = () => {
  const swiper = useSwiper();
  return (
    <MediaGalleryButtonPrev className="btn--navigation btn--navigation-prev" onClick={() => swiper.slidePrev()}>
      <span>next</span>
      <ArrowLeft />
    </MediaGalleryButtonPrev>
  );
};
