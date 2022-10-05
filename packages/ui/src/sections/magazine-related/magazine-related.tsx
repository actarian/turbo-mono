import { getClassNames, IEquatable } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Card, Container, Section, Text } from '../../components';
import type { ILazyComponent, ILazyComponentProps } from '../../lazy/lazy-loader/lazy-loader';
import MagazineSearchCard from '../magazine-search/magazine-search-card';

export type MagazineRelatedSubItem = {
  id: IEquatable;
  title: string;
  href: string;
  media: IMedia;
  date: Date | string;
}

export interface MagazineRelatedItem extends ILazyComponent {
  id: IEquatable;
  schema: string;
  title: string;
  items: MagazineRelatedSubItem[];
};

export interface MagazineRelatedProps extends ILazyComponentProps {
  item: MagazineRelatedItem
}

const StyledSection = styled(Section)`
  .swiper-slide {
    overflow: hidden;
    width: 400px;

    @media (max-width: 767px) {
      width: calc(100% - 40px);
    }
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

const MagazineRelated: React.FC<MagazineRelatedProps & SwiperProps> = ({ item, ...props }: MagazineRelatedProps & SwiperProps) => {
  const items = item.items;
  const classNames = getClassNames(item.schema);
  return (
    <StyledSection className={classNames} padding="7rem 0">
      <Container textAlign="center">
        {item.title && <Text size="3" marginBottom="4rem">{item.title}</Text>}
      </Container>
      <Swiper {...props} spaceBetween={60} slidesPerView={'auto'} centeredSlides style={{ width: '100%' }}>
        {items.map((item, i) => (
          <SwiperSlide key={i} virtualIndex={i}>
            <MagazineSearchCard fixedRatio item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  )
}

export default MagazineRelated;

export const MagazineRelatedExport = {
  'magazine-related': dynamic<MagazineRelatedProps>(() => import('../magazine-related/magazine-related')),
};
