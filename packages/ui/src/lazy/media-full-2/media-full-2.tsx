import { IMedia } from '@websolute/models';
import { Container, Media, MediaImage, Section, Text } from '../../components';

type MediaFull2Props = {
  type: 'media-full-1';
  media: IMedia;
};

const MediaFull2 = ({ item }: { item: MediaFull2Props }) => {
  return (
    <Section>
      <Container>
        <Media className="media" aspectRatio={16 / 10}>
          {item.media.type === 'video' ?
            (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
              <source src={item.media.src} type="video/mp4"></source>
            </video>) :
            (<MediaImage {...item.media} alt={item.media.alt} draggable={false} />)}
        </Media>
        {item.media.alt && <Text size="8" marginTop="1rem">{item.media.alt}</Text>}
      </Container>
    </Section>
  );
}

export default MediaFull2;
