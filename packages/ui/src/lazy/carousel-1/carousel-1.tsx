import { getClassNames } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import styled from 'styled-components';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Button, Card, Container, Media, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../lazy-loader/lazy-loader';

export type Carousel1SubItem = {
  title: string;
  href: string;
  media: IMedia;
}

export interface Carousel1Item extends ILazyComponent {
  schema: 'carousel-1';
  title: string;
  items: Carousel1SubItem[];
};

export interface Carousel1Props extends ILazyComponentProps {
  item: Carousel1Item
}

const StyledSection = styled(Section)`
  .swiper-slide {
    width: 60vw;
    overflow: hidden;
  }
`

const StyledCard = styled(Card)`
  .media>.image {
    transform: scale(1.1);
    transition: all ease-in-out 350ms 200ms;
  }
  .button {
    opacity: 0;
    transform: translateY(30%);
  }
  .button {
    transition: all ease-out 350ms 200ms;
  }
  .swiper-slide-active & {
    .media>.image {
      transform: scale(1);
    }
    .button {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Carousel1: React.FC<Carousel1Props & SwiperProps> = ({ item, ...props }: Carousel1Props & SwiperProps) => {
  const items = item.items;
  const classNames = getClassNames(item.schema);
  return (
    <StyledSection className={classNames} padding="7rem 0">
      <Container textAlign="center">
        {item.title && <Text size="2" marginBottom="4rem">{item.title}</Text>}
      </Container>
      <Swiper {...props} spaceBetween={60} slidesPerView={'auto'} centeredSlides style={{ width: '100%' }}>
        {items.map((item, i) => (
          <SwiperSlide key={i} virtualIndex={i} style={{ width: '60vw' }}>
            <StyledCard width="60vw" hoverable>
              <Link href={item.href} passHref>
                <Media as="a" aspectRatio={16 / 9} item={item.media} />
              </Link>
              {item.title &&
                <Card.Content>
                  <Button variant="nav">
                    <Text size="8" marginTop="1rem" dangerouslySetInnerHTML={{ __html: item.title }}></Text>
                  </Button>
                </Card.Content>
              }
            </StyledCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  )
}

export const Carousel1Export = {
  'carousel-1': dynamic<Carousel1Props>(() => import('../carousel-1/carousel-1').then(
    module => module.Carousel1
  )),
};
