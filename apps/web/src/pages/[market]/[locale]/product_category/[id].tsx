
import type { IStaticContext } from '@websolute/core';
import { asServerProps } from '@websolute/core';
import { ProductsSearchFeaturesDefaults } from '@websolute/mock';
import type { IFeatureType, PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import { CategoryHero, Footer, Header, Layout, Meta, Page, ProductSearchItem, ProductsSearch } from '@websolute/ui';
import { getProductDetails } from 'src/models';

export default function ProductCategory({ layout, page, items = [], featureTypes = [], params }: ProductCategoryProps) {

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <CategoryHero item={page} />

        <ProductsSearch id="serp" padding="3rem 0" items={items} featureTypes={featureTypes}></ProductsSearch>

        <Footer />

      </Page>
    </Layout>
  )
}

export interface ProductCategoryProps extends PageProps {
  items: ProductSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('product_category', id, market, locale);

  const items = await getProductDetails({ market, locale });
  const featureTypes = ProductsSearchFeaturesDefaults;

  const props = asServerProps({ ...context, layout, page, items, featureTypes });
  // console.log('ProductCategory getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('product_category');
  return {
    paths,
    fallback: true,
  };
}
