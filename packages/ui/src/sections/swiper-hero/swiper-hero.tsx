import { ArrowRight } from '@websolute/icons';
import Link from 'next/link';
import styled from 'styled-components';
import { SwiperProps } from 'swiper/react';
import { Button, Card, Container, Grid, Media, Swiper, Text } from '../../components';

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

export type SwiperHeroItemMedia = {
  type: string;
  src: string;
}

export type SwiperHeroItemLink = {
  href: string;
  label: string;
}

export type SwiperHeroItem = {
  id: number;
  title: string;
  abstract: string;
  link: SwiperHeroItemLink;
  media: SwiperHeroItemMedia;
}

export type SwiperHeroProps = {
  items: SwiperHeroItem[];
} & SwiperProps;

const SwiperHero: React.FC<SwiperHeroProps> = (props: SwiperHeroProps) => {
  const items = props.items;
  return (
    <Swiper {...props} navigation pagination={{ clickable: true }}>
      {items.map((item, i) => (
        <CardHero key={i} justifyContent="flex-end" height="100vh" overflow="hidden">
          <Card.Background>
            <Media className="media" overlay>
              {item.media.type === 'video' ?
                (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
                  <source src={item.media.src} type="video/mp4"></source>
                </video>) :
                (<img draggable={false} alt={item.title} src={item.media.src} />)}
            </Media>
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
                    <Link href={item.link.href} passHref={true}>
                      <Button variant="link" as="a"><Text>{item.link.label}</Text> <ArrowRight /></Button>
                    </Link>}
                </Grid>
              </Grid.Row>
            </Container.Fluid>
          </Card.Content>
        </CardHero>
      ))}
    </Swiper>
  )
}

export default SwiperHero;
