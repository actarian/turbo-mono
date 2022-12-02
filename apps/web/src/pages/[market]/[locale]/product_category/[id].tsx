import { asServerProps, deserializeValue, IStaticContext } from '@websolute/core';
import { ProductsSearchFeaturesDefaults } from '@websolute/mock';
import { getLayout, getPage, getStaticPathsForSchema, IFeatureType, PageProps } from '@websolute/models';
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
  );
}

export type ProductCategoryProps = PageProps & {
  items: ProductSearchItem[];
  featureTypes: IFeatureType[];
};

export async function getStaticProps(context: IStaticContext) {
  const id = deserializeValue(context.params.id);
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
    /*
    * Next.js will attempt to re-generate the page when a request comes in at most once every 60 seconds
    */
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('product_category');
  return {
    paths,
    /*
    * getStaticProps runs in the background when using fallback: true
    * getStaticProps is called before initial render when using fallback: blocking
    */
    fallback: 'blocking',
  };
}
