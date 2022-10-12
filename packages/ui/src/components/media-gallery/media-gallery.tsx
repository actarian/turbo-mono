import { useModal } from '@websolute/hooks';
import { IMedia } from '@websolute/models';
import { forwardRef, useCallback, useId, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '../../components/modal/modal';
import type { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import Media from '../media/media';
import type { MediaGalleryConfig } from './media-gallery-context';
import { MediaGalleryContext } from './media-gallery-context';

type Props = {
  children?: React.ReactNode;
};

export type MediaGalleryProps = UIStyledComponentProps<Props>;

export type MediaGalleryComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

const StyledMediaGallery = styled.div<MediaGalleryProps>`
  ${props => getCssResponsive(props)}
`;

const StyledModal = styled(Modal)`
  width: 100vw;

  .position {
    max-width: 100%;
    margin: 0;
  }
`;

const StyledMedia = styled(Media)`
  height: 80vh;
  background: transparent;

  .image {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

const MediaGallery: MediaGalleryComponent = forwardRef(({ children, as = 'div', ...props }, ref) => {
  const [modal, onOpenModal, onCloseModal] = useModal();

  const [items, setItems] = useState<IMedia[]>([]);

  const id = useId();

  const open = useCallback((media?: IMedia | IMedia[]) => {
    // console.log('open', media);
    const elements: HTMLElement[] = [...document.querySelectorAll(`[data-gallery]`)] as HTMLElement[];
    const medias = elements.map(element => {
      const data = element.dataset.gallery;
      return data ? JSON.parse(data) : null;
    }).filter(x => x && x.galleryId === id).map(x => x.media);
    console.log('MediaGallery.open', medias, elements);
    if (medias.length) {
      setItems(medias);
      onOpenModal('gallery');
    }
  }, [id, setItems, onOpenModal]);

  const close = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);

  const mediaGalleryContextValue: MediaGalleryConfig = useMemo(() => {
    return { id, open, close };
  }, [id]);

  return (
    <MediaGalleryContext.Provider value={mediaGalleryContextValue}>
      {children}
      <>
        {false && <StyledMediaGallery ref={ref} as={as} {...props}>{children}</StyledMediaGallery>}
        <StyledModal width="100vw" visible={modal == 'gallery'} onClose={onCloseModal}>
          <Swiper spaceBetween={60} slidesPerView={'auto'} centeredSlides style={{ width: '100%' }}>
            {items.map((item, i) => (
              <SwiperSlide key={i} virtualIndex={i}>
                <StyledMedia item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledModal>
      </>
    </MediaGalleryContext.Provider>
  )
});

MediaGallery.displayName = 'MediaGallery';

export default MediaGallery;
