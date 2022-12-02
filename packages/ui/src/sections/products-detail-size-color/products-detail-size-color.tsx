import { getClassNames } from '@websolute/core';
import { IMedia } from '@websolute/models';
import dynamic from 'next/dynamic';
import { Box, Button, Container, Flex, Grid, Media, Section, Text } from '../../components';
import { ILazyComponent, ILazyComponentProps } from '../../lazy/lazy-loader/lazy-loader';

export type ProductsDetailSizeColorItem = ILazyComponent & {
  schema: string;
  title: string;
  list: {
    title: string;
    abstract: string;
  }[];
  medias: IMedia[];
};

export type ProductsDetailSizeColorProps = ILazyComponentProps & {
  id?: string;
  item: ProductsDetailSizeColorItem;
};

export const ProductsDetailSizeColor: React.FC<ProductsDetailSizeColorProps> = ({ id, item }: ProductsDetailSizeColorProps) => {
  const classNames = getClassNames(item.schema);
  if (!item) {
    return null;
  }
  return (
    <Section id={id} className={classNames} padding="6rem 0">
      <Container>
        <Grid.Row rowGap="3rem">
          <Grid sm={6} justifyContent="center">
            <Flex.Col>
              {item.title && <Text size="3" marginBottom="3rem">{item.title}</Text>}
              {item.list && item.list.map((item, i) => (
                <Flex.Row key={i} padding="2rem 0" borderBottom="2px solid var(--color-neutral-900)">
                  <Text flexBasis="20%" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <Text dangerouslySetInnerHTML={{ __html: item.abstract }} />
                </Flex.Row>
              ))}
            </Flex.Col>
          </Grid>
          <Grid sm={6} alignItems="center" justifyContent="center" gap="2rem">
            <Box width="100%" maxWidth="300px">
              <Media aspectRatio={1} item={item.medias} />
            </Box>
            <Button variant="outline">Vedi tutti i colori</Button>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  );
};

export const ProductsDetailSizeColorExport = {
  'products-detail-size-color': dynamic<ProductsDetailSizeColorProps>(() => import('./products-detail-size-color').then(
    module => ({ default: module.ProductsDetailSizeColor })
  )),
};
