import { IMedia } from '@websolute/models';
import styled from 'styled-components';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Box, Container, Media, MediaImage, Section, Text } from '../../components';

const StyledBox = styled(Box)`
  .media {
    // transform: scale(1.1);
    transition: all ease-in-out 850ms 350ms;
  }
  .left,
  .right {
    opacity: 0;
    transform: translateY(30%);
  }
  .left {
    transition: all ease-out 350ms 200ms;
  }
  .right {
    transition: all ease-out 250ms 500ms;
  }
  .swiper-slide-active & {
    .media {
      transform: scale(1);
    }
    .left, .right {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export type Carousel1Item = {
  title: string;
  href: string;
  media: IMedia;
}

export type Carousel1Props = {
  type: 'carousel-1';
  title: string;
  items: Carousel1Item[];
};

const StyledSection = styled(Section)`
.swiper-slide {
  width: 60vw;
  overflow: hidden;
}
`

const Carousel1 = ({ item, ...props }: { item: Carousel1Props } & SwiperProps) => {
  const items = item.items;
  return (
    <StyledSection borderBottom="1px solid var(--color-neutral-300)">
      <Container textAlign="center">
        {item.title && <Text size="2" marginBottom="4rem">{item.title}</Text>}
      </Container>
      <Swiper {...props} spaceBetween={60} slidesPerView={'auto'} centeredSlides
        style={{ width: '100%' }}>
        {items.map((item, i) => (
          <SwiperSlide key={i} virtualIndex={i} style={{ width: '60vw' }}>
            <StyledBox width="60vw">
              <Media className="media" aspectRatio={16 / 9}>
                {item.media.type === 'video' ?
                  (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src={item.media.src} type="video/mp4"></source>
                  </video>) :
                  (<MediaImage {...item.media} alt={item.title} draggable={false} />)}
              </Media>
              {item.title && <Text size="8" marginTop="1rem">{item.title}</Text>}
            </StyledBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  )
}

export default Carousel1;
