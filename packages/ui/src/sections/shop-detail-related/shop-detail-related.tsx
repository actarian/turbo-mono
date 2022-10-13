import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Container, Grid, Section, Text } from '../../components';
import type { ILazyComponent, ILazyComponentProps } from '../../lazy/lazy-loader/lazy-loader';
import type { ShopDetailRelatedCardItem } from './shop-detail-related-card';
import ShopDetailRelatedCard from './shop-detail-related-card';

export interface ShopDetailRelatedItem extends ILazyComponent {
  schema: string;
  title?: string;
  items: ShopDetailRelatedCardItem[];
};

export interface ShopDetailRelatedProps extends ILazyComponentProps {
  id?: string;
  item: ShopDetailRelatedItem;
}

const ShopDetailRelated: React.FC<ShopDetailRelatedProps> = ({ id, item }: ShopDetailRelatedProps) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section id={id} className={classNames} padding="6rem 0">
      <Container>
        {item.title && <Text size="3" textAlign="center" marginBottom="4rem" dangerouslySetInnerHTML={{ __html: item.title }} />}
        <Grid.Row rowGap="3rem">
          {item.items.map((related, r) => (
            <Grid key={r} sm={6} md={3} justifyContent="center">
              <ShopDetailRelatedCard item={related} />
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  );
}

export default ShopDetailRelated;

export const ShopDetailRelatedExport = {
  'shop-detail-related': dynamic<ShopDetailRelatedProps>(() => import('./shop-detail-related')),
};
