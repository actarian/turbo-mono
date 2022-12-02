import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Container, Grid, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../../lazy/lazy-loader/lazy-loader';
import { ProductsDetailRelatedCard, ProductsDetailRelatedCardItem } from './products-detail-related-card';

export type ProductsDetailRelatedItem = ILazyComponent & {
  schema: string;
  title?: string;
  items: ProductsDetailRelatedCardItem[];
};

export type ProductsDetailRelatedProps = ILazyComponentProps & {
  id?: string;
  item: ProductsDetailRelatedItem;
};

export const ProductsDetailRelated: React.FC<ProductsDetailRelatedProps> = ({ id, item }: ProductsDetailRelatedProps) => {
  const classNames = getClassNames(item.schema);
  if (!item) {
    return null;
  }
  return (
    <Section id={id} className={classNames} padding="6rem 0">
      <Container>
        {item.title && <Text size="3" textAlign="center" marginBottom="4rem" dangerouslySetInnerHTML={{ __html: item.title }} />}
        <Grid.Row rowGap="3rem">
          {item.items && item.items.map((related, r) => (
            <Grid key={r} sm={6} justifyContent="center">
              <ProductsDetailRelatedCard item={related} />
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  );
};

export const ProductsDetailRelatedExport = {
  'products-detail-related': dynamic<ProductsDetailRelatedProps>(() => import('./products-detail-related').then(
    module => module.ProductsDetailRelated
  )),
};
