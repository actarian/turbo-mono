import type { IMedia } from '@websolute/models';
import { Container, Flex, Grid, Media, MediaImage, Section, Text } from '../../components';

type TextMedia1Props = {
  type: 'text-media-1';
  title?: string;
  abstract?: string;
  description?: string;
  media: IMedia;
};

const TextMedia1 = ({ item }: { item: TextMedia1Props }) => {
  return (
    <Section borderBottom="1px solid var(--color-neutral-300)">
      <Container>
        <Grid.Row rowGap="3rem">
          <Grid sm={6} justifyContent="center">
            <Flex.Col gap="2rem">
              {item.title && <Text size="3" dangerouslySetInnerHTML={{ __html: item.title }} />}
              {item.abstract && <Text size="6" dangerouslySetInnerHTML={{ __html: item.abstract }} />}
              {item.description && <Text size="7" dangerouslySetInnerHTML={{ __html: item.description }} />}
            </Flex.Col>
          </Grid>
          <Grid sm={6} justifyContent="center">
            <Media className="media" aspectRatio={880 / 1120}>
              {item.media.type === 'video' ?
                (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
                  <source src={item.media.src} type="video/mp4"></source>
                </video>) :
                (<MediaImage {...item.media} alt={item.media.alt} draggable={false} />)}
            </Media>
            {item.media.alt && <Text size="8" marginTop="1rem">{item.media.alt}</Text>}
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  );
}

export default TextMedia1;
