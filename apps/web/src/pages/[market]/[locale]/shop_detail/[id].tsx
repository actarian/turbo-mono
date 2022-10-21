
import type { IStaticContext } from '@websolute/core';
import { asServerProps } from '@websolute/core';
import { useCart, useCurrency, useDrawer } from '@websolute/hooks';
import { ProductsRelatedDefaults } from '@websolute/mock';
import { getLayout, getPage, getPageCategory, getStaticPathsForSchema, IPage, PageProps } from '@websolute/models';
import {
  Breadcrumb, Button, CategoryProposition, Container, Flex, Footer, Grid, Header, Layout, Media, Meta, NavLink,
  Page, ProductsRelated, Section, ShopDetailRelated, ShopIncentive, ShopSearchItem, Text
} from '@websolute/ui';
import type { IShopDetail } from 'src/models';
import { getShopDetails } from 'src/models';

export default function ShopDetail({ layout, page, category, params }: ShopDetailProps) {
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();

  const add = useCart(state => state.add);

  function onAddToCart() {
    const cartItem = { ...page };
    add(cartItem, 1);
    onOpenDrawer('cart');
  }

  const currency = useCurrency();

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <Section paddingBottom="0">
          <Container.Fluid>
            <Breadcrumb.Group marginBottom="1rem" items={page.breadcrumb} />
          </Container.Fluid>
        </Section>

        <Section padding="2rem 0">
          <Container.Fluid>
            <Grid.Row rowGap="1rem">
              <Grid md={6}>
                <Media item={page.media} />
              </Grid>
              <Grid md={6} justifyContent="center">
                <Flex.Col gap="2rem" gapSm="3rem" gapMd="4rem" gapLg="5rem">
                  {page.parentRoute && page.parentRoute.href &&
                    <Flex.Row justifyContent="space-between">
                      <NavLink href={page.parentRoute.href} passHref>
                        <Button as="a" variant="nav">
                          <Text size="10" fontWeight="700" textTransform="uppercase">{page.collection + (page.designer ? ` by ${page.designer}` : '')}</Text>
                        </Button>
                      </NavLink>
                    </Flex.Row>
                  }
                  <Text size="3">{page.title}</Text>
                  {page.abstract && <Text size="7" lineHeight="2" dangerouslySetInnerHTML={{ __html: page.abstract }}></Text>}
                  {page.description && <Text size="8" lineHeight="2" dangerouslySetInnerHTML={{ __html: page.description }}></Text>}
                  <Flex.Row justifyContent="space-between">
                    <Text size="8" marginBottom="1rem">{currency(page.price)}</Text>
                    <Button variant="primary" type="submit" onClick={onAddToCart}>Add to cart</Button>
                  </Flex.Row>
                </Flex.Col>
              </Grid>
            </Grid.Row>
          </Container.Fluid>
        </Section>

        <ShopDetailRelated id="related" item={page.related} />

        <ShopIncentive />

        <ProductsRelated items={ProductsRelatedDefaults.items} />

        <CategoryProposition item={category} />

        <Footer />
      </Page>
    </Layout>
  )
}

type ShopDetailItem = ShopSearchItem & IPage & {
  related: {
    title: string;
    schema: string;
    items: IShopDetail[];
  }
};

export interface ShopDetailProps extends PageProps<ShopDetailItem> {
  category: IPage;
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage<ShopDetailItem>('shop_detail', id, market, locale);
  const category = await getPageCategory('shop_category', page, market, locale);

  if (page) {
    const related = await getShopDetails({ where: { categoryId: page.categoryId }, market, locale });
    page.related = {
      title: 'You may also like',
      schema: 'related',
      items: related.slice(0, Math.min(4, related.length))
    };
  }

  const props = asServerProps({ ...context, layout, page, category });
  // console.log('ShopDetail getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('shop_detail');
  return {
    paths,
    fallback: true,
  };
}
