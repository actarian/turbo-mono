import { Carousel } from '@ui-components/carousel/carousel';
import { useMemo } from 'react';

const TestFramerCarousel: React.FC<null> = () => {

  const items = useMemo(() => [{
    id: 1,
    title: 'Sustainable agriculture',
    abstract: 'We combine technology and creativity for the farmers of today and tomorrow.',
    link: {
      href: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'video',
      src: 'https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4',
    }
  }, {
    id: 2,
    title: 'Trusted Group',
    abstract: 'We are the only private and independent Italian multinational in the agrotechnology sector.',
    link: {
      href: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600',
    }
  }, {
    id: 3,
    title: 'Expertise and tailor-made services',
    abstract: 'We support our clients to develop both new and existing chemical solutions.',
    link: {
      href: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=1600',
    }
  }], []);

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Carousel>{({ index }) => {
        const modulo = index % items.length;
        const imageIndex = modulo < 0 ? items.length + modulo : modulo;
        return (
          <img draggable={false} alt="Mountain" style={{ width: "100%" }} src={items[imageIndex].media.src} />
        );
      }}</Carousel>
    </div>
  )
}

export default TestFramerCarousel;
