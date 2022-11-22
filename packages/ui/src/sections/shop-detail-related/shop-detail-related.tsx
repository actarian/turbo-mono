import { getClassNames } from '@websolute/core';
import dynamic from 'next/dynamic';
import { Container, Grid, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../../lazy/lazy-loader/lazy-loader';
import { ShopDetailRelatedCard, ShopDetailRelatedCardItem } from './shop-detail-related-card';

export type ShopDetailRelatedItem = ILazyComponent & {
  schema: string;
  title?: string;
  items: ShopDetailRelatedCardItem[];
};

export type ShopDetailRelatedProps = ILazyComponentProps & {
  id?: string;
  item: ShopDetailRelatedItem;
};

export const ShopDetailRelated: React.FC<ShopDetailRelatedProps> = ({ id, item }: ShopDetailRelatedProps) => {
  const classNames = getClassNames(item.schema);
  return (
    <Section id={id} className={classNames} padding="6rem 0">
      <Container.Fluid>
        {item.title && <Text size="3" textAlign="center" marginBottom="4rem" dangerouslySetInnerHTML={{ __html: item.title }} />}
        <Grid.Row rowGap="3rem">
          {item.items.map((related, r) => (
            <Grid key={r} sm={6} md={3} justifyContent="center">
              <ShopDetailRelatedCard item={related} />
            </Grid>
          ))}
        </Grid.Row>
      </Container.Fluid>
    </Section>
  );
};

export const ShopDetailRelatedExport = {
  'shop-detail-related': dynamic<ShopDetailRelatedProps>(() => import('./shop-detail-related').then(
    module => module.ShopDetailRelated
  )),
};
