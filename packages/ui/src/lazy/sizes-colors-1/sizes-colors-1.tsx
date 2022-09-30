import { IMedia } from '@websolute/models';
import { Box, Button, Container, Flex, Grid, Media, MediaImage, Section, Text } from '../../components';

type SizesColors1Props = {
  type: 'sizes-colors-1';
  title: string;
  list: {
    title: string;
    abstract: string;
  }[];
  medias: IMedia[];
};

const SizesColors1 = ({ item }: { item: SizesColors1Props }) => {
  return (
    <Section borderBottom="1px solid var(--color-neutral-300)">
      <Container>
        <Grid.Row rowGap="3rem">
          <Grid sm={6} justifyContent="center">
            <Flex.Col>
              {item.title && <Text size="3" marginBottom="3rem">{item.title}</Text>}
              {item.list.map((item, i) => (
                <Flex.Row key={i} padding="2rem 0" borderBottom="2px solid var(--color-neutral-900)">
                  <Text flexBasis="20%" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <Text dangerouslySetInnerHTML={{ __html: item.abstract }} />
                </Flex.Row>
              ))}
            </Flex.Col>
          </Grid>
          <Grid sm={6} alignItems="center" justifyContent="center" gap="2rem">
            <Box width="100%" maxWidth="300px">
              <Media className="media" aspectRatio={1}>
                {item.medias.map((media, m) => media.type === 'video' ?
                  (<video key={m} playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src={media.src} type="video/mp4"></source>
                  </video>) :
                  (<MediaImage key={m} {...media} alt={media.alt} draggable={false} />)
                )}
              </Media>
            </Box>
            <Button variant="outline">Vedi tutti i colori</Button>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  );
}

export default SizesColors1;
