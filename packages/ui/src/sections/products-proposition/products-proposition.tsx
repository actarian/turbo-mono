import { Container, Grid, Section } from '../../components';
import { ComponentProps } from '../../components/types';
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

export default ProductsProposition;
