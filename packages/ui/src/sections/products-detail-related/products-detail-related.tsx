import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Container, Grid, Section, Text } from '../../components';
import type { ILazyComponent, ILazyComponentProps } from '../../lazy/lazy-loader/lazy-loader';
import type { ProductsDetailRelatedCardItem } from './products-detail-related-card';
import ProductsDetailRelatedCard from './products-detail-related-card';

export interface ProductsDetailRelatedItem extends ILazyComponent {
  schema: string;
  title?: string;
  items: ProductsDetailRelatedCardItem[];
};

export interface ProductsDetailRelatedProps extends ILazyComponentProps {
  id?: string;
  item: ProductsDetailRelatedItem;
}

const ProductsDetailRelated: React.FC<ProductsDetailRelatedProps> = ({ id, item }: ProductsDetailRelatedProps) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section id={id} className={classNames} padding="6rem 0">
      <Container>
        {item.title && <Text size="3" textAlign="center" marginBottom="4rem" dangerouslySetInnerHTML={{ __html: item.title }} />}
        <Grid.Row rowGap="3rem">
          {item.items.map((related, r) => (
            <Grid key={r} sm={6} justifyContent="center">
              <ProductsDetailRelatedCard item={related} />
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  );
}

export default ProductsDetailRelated;

export const ProductsDetailRelatedExport = {
  'products-detail-related': dynamic<ProductsDetailRelatedProps>(() => import('./products-detail-related')),
};
