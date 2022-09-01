import { Container, Grid, MediaType, Section } from '@ui-components';
import { ComponentProps } from '@ui-components/types';
import ProductsPropositionCard, { ProductsPropositionItem } from './products-proposition-card';

type Props = {
  items: ProductsPropositionItem[],
}

export type ProductsPropositionProps = ComponentProps<Props, HTMLDivElement>;

const ProductsProposition: React.FC<ProductsPropositionProps> = ({ items }: ProductsPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row columnGap="1rem" rowGap="2rem">
          {items.map((item, i) => (
            <Grid sm={6} md={4} key={i}>
              <ProductsPropositionCard item={item}></ProductsPropositionCard>
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  )
}

export const ProductsPropositionDefaults = {
  items: [{
    id: 1,
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
    href: '/product',
    title: 'Focus Multi Pack',
    abstract: '3 refill packs',
    price: 39,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/5u2qJ1YW91w/download?force=true&h=960',
    }
  }, {
    id: 5,
    href: '/product',
    title: 'Machined Mechanical Pencil',
    abstract: 'Black and brass',
    price: 35,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/fxg4TT2T2xM/download?force=true&h=960',
    },
  }, {
    id: 6,
    href: '/product',
    title: 'Brass Scissors',
    abstract: 'Includes brass stand',
    price: 50,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/-CtAY9dnZb8/download?force=true&h=960',
    },
  }]
};

ProductsProposition.defaultProps = ProductsPropositionDefaults;

export default ProductsProposition;
