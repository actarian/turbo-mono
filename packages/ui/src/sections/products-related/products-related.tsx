import { Container, Flex, Grid, Section, Text } from '../../components';
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

export default ProductsRelated;
