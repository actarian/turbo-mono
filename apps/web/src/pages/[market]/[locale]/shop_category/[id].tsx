
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import { CategoryPropositionDefaults, ProductsSearchFeaturesDefaults } from '@websolute/mock';
import type { IFeatureType, PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import type { ShopSearchItem } from '@websolute/ui';
import {
  Breadcrumb, CategoryProposition, Container, Footer, Header, Layout, Meta, Page, Section,
  ShopCategoryHero, ShopIncentive, ShopSearch
} from '@websolute/ui';
import { getShopDetails } from 'src/models';

export default function ShopCategory({ layout, page, items = [], featureTypes = [], params }: ShopCategoryProps) {
  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        {false &&
          <Section borderBottom="1px solid var(--color-neutral-200)">
            <Container>
              {page.breadcrumb && <Breadcrumb.Group items={page.breadcrumb} />}
            </Container>
          </Section>
        }

        <ShopCategoryHero item={page} />

        <ShopSearch id="serp" padding="3rem 0" title={page.title || ''} items={items} featureTypes={featureTypes}></ShopSearch>

        <CategoryProposition item={CategoryPropositionDefaults.item} />

        <ShopIncentive />

        <Footer />

      </Page>
    </Layout>
  )
}

export interface ShopCategoryProps extends PageProps {
  items: ShopSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('shop_category', id, market, locale);

  // const items = ShopSearchDefaults.items; // await getProductDetails({ market, locale });
  const items = await getShopDetails({ market, locale });
  const featureTypes = ProductsSearchFeaturesDefaults;

  const props = asStaticProps({ ...context, layout, page, items, featureTypes });
  // console.log('ShopCategory getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('shop_category');
  return {
    paths,
    fallback: true,
  };
}
