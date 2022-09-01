import { Container, Flex, Grid, MediaType, Section, Text } from '../../components';
import { ComponentProps } from '../../components/types';
import ProductsRelatedCard, { ProductsRelatedItem } from './products-related-card';

type Props = {
  items: ProductsRelatedItem[],
}

export type ProductsRelatedProps = ComponentProps<Props, HTMLDivElement>;

const ProductsRelated: React.FC<ProductsRelatedProps> = ({ items }: ProductsRelatedProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Flex.Row justifyContent="space-between" marginBottom="1rem">
          <Text size="7" fontWeight="700">Customers also bought</Text>
        </Flex.Row>
        <Grid.Row columnGap="1rem" rowGap="1rem">
          {items.map((item, i) => (
            <Grid sm={6} md={3} key={i}>
              <ProductsRelatedCard item={item}></ProductsRelatedCard>
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  )
}

export const ProductsRelatedDefaults = {
  items: [{
    id: 1,
    schema: 'product',
    href: '/product',
    title: 'Focus Paper Refill',
    abstract: '3 sizes available',
    price: 13,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/q10VITrVYUM/download?force=true&h=960',
    },
  }, {
    id: 2,
    schema: 'product',
    href: '/product',
    title: 'Focus Card Holder',
    abstract: 'Walnut',
    price: 64,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/-lN0HnySy7w/download?force=true&h=960',
    },
  }, {
    id: 3,
    schema: 'product',
    href: '/product',
    title: 'Focus Carry Case',
    abstract: 'Heather Gray',
    price: 32,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/xcGSvYOLcwE/download?force=true&h=960',
    },
  }, {
    id: 4,
    schema: 'product',
    href: '/product',
    title: 'Focus Multi Pack',
    abstract: '3 refill packs',
    price: 39,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/5u2qJ1YW91w/download?force=true&h=960',
    }
  }]
};

ProductsRelated.defaultProps = ProductsRelatedDefaults;

export default ProductsRelated;
