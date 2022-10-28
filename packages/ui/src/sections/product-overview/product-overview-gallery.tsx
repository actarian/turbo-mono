import { IMedia } from '@websolute/models';
import { Card, Container, Flex, Grid, Media, Section } from '../../components';
import { UIStyledComponentProps } from '../../components/types';

type Props = {
  media: IMedia[]
}

export type ProductOverviewProps = UIStyledComponentProps<Props>;

export const ProductOverviewGallery: React.FC<ProductOverviewProps> = ({ media, ...props }: ProductOverviewProps) => {
  return (
    <Section {...props}>
      <Container>
        <Grid.Row columnGap="2rem" rowGap="2rem">
          <Grid sm={4} orderSm={4}>
            <Card aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable borderRadius="0.4rem">
              <Card.Background>
                <Media rounded item={media[0]} />
              </Card.Background>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable>
              <Card.Background>
                <Media rounded item={media[1]} />
              </Card.Background>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Flex.Col rowGap="2rem">
              <Card aspectRatio={4 / 3} hoverable>
                <Card.Background>
                  <Media rounded item={media[2]} />
                </Card.Background>
              </Card>
              <Card aspectRatio={4 / 3} hoverable>
                <Card.Background>
                  <Media rounded item={media[3]} />
                </Card.Background>
              </Card>
            </Flex.Col>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}
