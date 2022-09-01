import { Button, Card, Container, Grid, Media, MediaType, Swiper, Text } from '@ui-components';
import { ArrowRight } from '@ui-icons';
import Link from 'next/link';
import styled from 'styled-components';
import { SwiperProps } from 'swiper/react';

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
                    <Link href={item.link.href}>
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

export const SwiperHeroDefaults = {
  items: [
    {
      id: 1,
      title: 'Trusted Group',
      abstract: 'We are the only private and independent Italian multinational in the agrotechnology sector.',
      link: {
        href: '#',
        label: 'Do you want to know more?',
      },
      media: {
        type: MediaType.Image,
        src: 'https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600',
      }
    }, {
      id: 2,
      title: 'Expertise and tailor-made services',
      abstract: 'We support our clients to develop both new and existing chemical solutions.',
      link: {
        href: '#',
        label: 'Do you want to know more?',
      },
      media: {
        type: MediaType.Image,
        src: 'https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=1600',
      }
    }, {
      id: 3,
      title: 'Sustainable agriculture',
      abstract: 'We combine technology and creativity for the farmers of today and tomorrow.',
      link: {
        href: '#',
        label: 'Do you want to know more?',
      },
      media: {
        type: MediaType.Video,
        src: '/video.mp4', // https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4',
      }
    }
  ]
};

SwiperHero.defaultProps = SwiperHeroDefaults;

export default SwiperHero;
