import type { IMedia } from '@websolute/models';
import { Card, Container, Grid, Media, Section, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';

type Props = {
  item: HeroItem,
}

export type HeroItem = {
  id: number;
  href: string;
  title: string;
  abstract: string;
  media: IMedia;
}

export type HeroProps = UIComponentProps<Props>;

const Hero: React.FC<HeroProps> = ({ item, ...props }: HeroProps) => {
  return (
    <Section padding="0">
      <Card justifyContent="flex-end" height="100vh">
        <Card.Background>
          <Media overlay item={item.media} />
        </Card.Background>
        <Card.Content>
          <Container.Fluid>
            <Grid.Row>
              <Grid md={6} padding="3rem 0">
                <Text size="2" fontWeight="700">{item.title}</Text>
              </Grid>
              <Grid md={6} padding="3rem 0">
                <Text size="6">{item.abstract}</Text>
              </Grid>
            </Grid.Row>
          </Container.Fluid>
        </Card.Content>
      </Card>
    </Section>
  )
}

export default Hero;
