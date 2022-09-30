import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Container, Flex, Grid, Media, MediaImage, Section, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';
import ShopHeroCard from './shop-hero-card';

type Props = {
  items: ShopHeroItem[],
}

export type ShopHeroProps = UIComponentProps<Props>;

const ShopHero: React.FC<ShopHeroProps> = ({ items }: ShopHeroProps) => {
  return (
    <Section padding="0">
      <Card justifyContent="center" height="90vh">
        <Card.Background>
          <Media overlay={0.5}>
            <MediaImage draggable={false} alt="Shop" src="https://unsplash.com/photos/FV3GConVSss/download?force=true&w=1600" />
          </Media>
        </Card.Background>
        <Card.Content marginBottom="30vh">
          <Container.Fluid>
            <Flex.Col alignItems="center">
              <Text size="2" fontWeight="700" marginBottom="1rem">Mid-Season Sale</Text>
              {false && <Text size="8">We combine technology and creativity for the farmers of today and tomorrow.</Text>}
              <Link href="/shop_category"><Button variant="primary" as="a" size="lg">Shop Collection</Button></Link>
            </Flex.Col>
          </Container.Fluid>
        </Card.Content>
      </Card>
      <Container marginTop="-30vh">
        <Grid.Row columnGap="1rem" rowGap="2rem">
          {items.map((item, i) => (
            <Grid sm={4} key={i}>
              <ShopHeroCard aspectRatio={4 / 5} item={item} />
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  )
}

export type ShopHeroItem = {
  id: number;
  href: string;
  title: string;
  media: IMedia;
}

export default ShopHero;
