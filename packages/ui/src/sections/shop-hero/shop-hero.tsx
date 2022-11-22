import { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Container, Flex, Grid, Media, Section, Text } from '../../components';
import { UIComponentProps } from '../../components/types';
import { ShopHeroCard } from './shop-hero-card';

export type ShopHeroItem = {
  href: string;
  title: string;
  abstract?: string;
  media: IMedia;
  items?: ShopHeroItem[];
};

type Props = {
  item: ShopHeroItem;
};

export type ShopHeroProps = UIComponentProps<Props>;

export const ShopHero: React.FC<ShopHeroProps> = ({ item }: ShopHeroProps) => {
  return (
    <Section padding="0">
      <Card justifyContent="center" height="90vh">
        <Card.Background>
          <Media overlay={0.5} item={item.media} />
        </Card.Background>
        <Card.Content marginBottom="30vh">
          <Container.Fluid>
            <Flex.Col alignItems="center">
              <Text size="2" fontWeight="700" marginBottom="1rem">{item.title}</Text>
              {item.abstract && <Text size="8" marginBottom="1rem">{item.abstract}</Text>}
              <Link href={item.href} passHref>
                <Button as="a" variant="primary" size="lg">Shop Collection</Button>
              </Link>
            </Flex.Col>
          </Container.Fluid>
        </Card.Content>
      </Card>
      <Container marginTop="-30vh">
        <Grid.Row columnGap="1rem" rowGap="2rem">
          {item.items && item.items.map((item, i) => (
            <Grid sm={4} key={i}>
              <ShopHeroCard aspectRatio={4 / 5} item={item} />
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  );
};
