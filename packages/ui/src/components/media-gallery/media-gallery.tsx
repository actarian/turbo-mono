import { useModal } from '@websolute/hooks';
import { X } from '@websolute/icons';
import { IMedia } from '@websolute/models';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useCallback, useId, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../button/button';
import { Flex } from '../flex/flex';
import { Media } from '../media/media';
import { Modal } from '../modal/modal';
import { Text } from '../text/text';
import { UIComponentWithRef, UIStyledComponentProps } from '../types';
import { MediaGalleryConfig, MediaGalleryContext } from './media-gallery-context';
import { MediaGalleryNext, MediaGalleryPrev } from './media-gallery-navigation';

const MediaGalleryWrapper = styled.div`
  height: 100vh;
`;

const MediaGalleryClose = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 100;
`;

const StyledMedia = styled(Media)`
  height: calc(100vh - 40px);
  background: transparent;

  .image {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

type Props = {
  children?: React.ReactNode;
};

export type MediaGalleryProps = UIStyledComponentProps<Props>;

export type MediaGalleryComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

export const MediaGallery: MediaGalleryComponent = forwardRef(({ children, as = 'div', ...props }, ref) => {
  const [modal, openModal, closeModal] = useModal();

  const [items, setItems] = useState<IMedia[]>([]);
  const [item, setItem] = useState<IMedia>();
  const [initialSlide, setInitialSlide] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const id = useId();

  const open = useCallback((media?: IMedia | IMedia[]) => {
    // console.log('open', media);
    const elements: HTMLElement[] = [...document.querySelectorAll('[data-gallery]')] as HTMLElement[];
    const medias = elements.map(element => {
      const data = element.dataset.gallery;
      return data ? JSON.parse(data) : null;
    }).filter(x => x && x.galleryId === id).map(x => x.media);
    // console.log('MediaGallery.open', medias, media);
    const initialSlide = (media && !Array.isArray(media)) ? medias.reduce((p, c, i) => {
      if (c.src === media.src) {
        return i;
      } else {
        return p;
      }
    }, 0) : 0;
    if (medias.length) {
      setItems(medias);
      setItem(medias[initialSlide]);
      setInitialSlide(initialSlide);
      setCurrentSlide(initialSlide);
      openModal('gallery');
    }
  }, [id, setItems, openModal]);

  const close = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const mediaGalleryContextValue: MediaGalleryConfig = useMemo(() => {
    return { id, open, close };
  }, [id]);

  const onSlideChange = (swiper: { realIndex: number }) => {
    // console.log('onSlideChange', swiper.realIndex, swiper.slides.length);
    const currentSlide = swiper.realIndex;
    setCurrentSlide(currentSlide);
    setItem(items[currentSlide]);
  };

  return (
    <>
      <MediaGalleryContext.Provider value={mediaGalleryContextValue}>
        {children}
      </MediaGalleryContext.Provider>
      {true && (
        <Modal width="100vw" positionClassName="position--full" wrapClassName="wrapper--full" disableBackdropClick={true}
          visible={modal == 'gallery'} onClose={closeModal}>
          <Modal.Content padding="0">
            {true && (
              <MediaGalleryWrapper>
                <Swiper initialSlide={initialSlide} spaceBetween={0} slidesPerView={1} loop={false} navigation onSlideChange={onSlideChange}>
                  {items.map((item, i) => (
                    <SwiperSlide key={i} virtualIndex={i}>
                      <StyledMedia item={item} />
                    </SwiperSlide>
                  ))}
                  <MediaGalleryPrev />
                  <MediaGalleryNext />
                </Swiper>
                <Flex.Row justifyContent="space-between" padding="0.5rem">
                  <Flex flexBasis="40px"></Flex>
                  <Flex flexGrow="1" textAlign="center">
                    {item && (
                      <AnimatePresence mode="wait">
                        <motion.div style={{ width: '100%', textAlign: 'center' }}
                          key={item.src}
                          initial={{ opacity: 0, y: '100%' }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: '100%' }}
                        >
                          <Text>{item.alt}</Text>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </Flex>
                  <Flex flexBasis="40px">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: '-70%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '70%' }}
                        transition={{ delay: 0.1 }}
                      >
                        <Text>{currentSlide + 1}</Text>
                      </motion.div>
                    </AnimatePresence>
                    <Text>/{items.length}</Text>
                  </Flex>
                </Flex.Row>
              </MediaGalleryWrapper>
            )}
          </Modal.Content>
          {true && (
            <MediaGalleryClose variant="circle" onClick={closeModal}>
              <X />
            </MediaGalleryClose>
          )}
        </Modal>
      )}
    </>
  );
});

MediaGallery.displayName = 'MediaGallery';
