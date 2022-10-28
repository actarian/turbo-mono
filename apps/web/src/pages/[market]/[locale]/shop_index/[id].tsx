
import { asServerProps, IStaticContext } from '@websolute/core';
import { ShopSearchFeaturesDefaults } from '@websolute/mock';
import { getLayout, getPage, getStaticPathsForSchema, IFeatureType, PageProps } from '@websolute/models';
import { Footer, Header, Layout, Meta, Page, ShopIncentive, ShopSearch, ShopSearchItem } from '@websolute/ui';
import { getShopDetails } from 'src/models';

export default function ShopIndex({ layout, page, items = [], featureTypes = [], params }: ShopIndexProps) {
  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <ShopSearch id="serp" padding="3rem 0" items={items} featureTypes={featureTypes}></ShopSearch>

        <ShopIncentive />

        <Footer />
      </Page>
    </Layout>
  )
}

export interface ShopIndexProps extends PageProps {
  items: ShopSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('shop_index', id, market, locale);

  // const items = ShopSearchDefaults.items; // await getProductDetails({ market, locale });
  const items = await getShopDetails({ market, locale });
  const featureTypes = ShopSearchFeaturesDefaults;

  featureTypes.forEach(featureType => {
    featureType.features.sort((a, b) => {
      const textA = a.title.toUpperCase();
      const textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  });

  const props = asServerProps({ ...context, layout, page, items, featureTypes });
  // console.log('ShopIndex getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('shop_index');
  return {
    paths,
    fallback: true,
  };
}
