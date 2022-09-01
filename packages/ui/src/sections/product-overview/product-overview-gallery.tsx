import { Card, Container, Flex, Grid, Media, MediaType, Section } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';

type Props = {
  media: {
    type: MediaType;
    src: string;
  }[]
}

export type ProductOverviewProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const ProductOverviewGallery: React.FC<ProductOverviewProps> = ({ media, ...props }: ProductOverviewProps) => {
  return (
    <Section {...props}>
      <Container>
        <Grid.Row columnGap="2rem" rowGap="2rem">
          <Grid sm={4} orderSm={4}>
            <Card aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable borderRadius="0.4rem">
              <Card.Background>
                <Media rounded>
                  <img src={media[0].src} />
                </Media>
              </Card.Background>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable>
              <Card.Background>
                <Media rounded>
                  <img src={media[1].src} />
                </Media>
              </Card.Background>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Flex.Col rowGap="2rem">
              <Card aspectRatio={4 / 3} hoverable>
                <Card.Background>
                  <Media rounded >
                    <img src={media[2].src} />
                  </Media>
                </Card.Background>
              </Card>
              <Card aspectRatio={4 / 3} hoverable>
                <Card.Background>
                  <Media rounded >
                    <img src={media[3].src} />
                  </Media>
                </Card.Background>
              </Card>
            </Flex.Col>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

export const ProductOverviewGalleryDefaults = {
  media: [{
    type: MediaType.Image,
    src: '/product-04.jpg',
  }, {
    type: MediaType.Image,
    src: '/product-01.jpg',
  }, {
    type: MediaType.Image,
    src: '/product-02.jpg',
  }, {
    type: MediaType.Image,
    src: '/product-03.jpg',
  }]
};

ProductOverviewGallery.defaultProps = ProductOverviewGalleryDefaults;

export default ProductOverviewGallery;
