import { ArrowRight } from '@websolute/icons';
import { ILink, IMedia } from '@websolute/models';
import Link from 'next/link';
import styled from 'styled-components';
import { SwiperProps } from 'swiper/react';
import { Button, Card, Container, Grid, Media, SwiperComponent, Text } from '../../components';

const CardHero = styled(Card)`
  .media {
    transform: scale(1.1);
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

export type SwiperHeroItem = {
  id: number;
  title: string;
  abstract: string;
  link: ILink;
  media: IMedia;
}

export type SwiperHeroProps = {
  items: SwiperHeroItem[];
} & SwiperProps;

export const SwiperHero: React.FC<SwiperHeroProps> = (props: SwiperHeroProps) => {
  const items = props.items;
  return (
    <SwiperComponent {...props} navigation pagination={{ clickable: true }}>
      {items.map((item, i) => (
        <CardHero key={i} justifyContent="flex-end" height="100vh" overflow="hidden">
          <Card.Background>
            <Media overlay item={item.media} />
          </Card.Background>
          <Card.Content>
            <Container.Fluid>
              <Grid.Row>
                <Grid className='left' md={6} padding="3rem 0 6rem 0">
                  <Text size="2" fontWeight="700">{item.title}</Text>
                </Grid>
                <Grid className='right' md={6} padding="3rem 0 6rem 0">
                  <Text size="6" marginBottom="1rem">{item.abstract}</Text>
                  {item.link &&
                    <Link href={item.link.href} passHref>
                      <Button as="a" variant="link"><Text>{item.link.title}</Text> <ArrowRight /></Button>
                    </Link>}
                </Grid>
              </Grid.Row>
            </Container.Fluid>
          </Card.Content>
        </CardHero>
      ))}
    </SwiperComponent>
  )
}
