
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import { SplitDefaults, StoreLocatorDefaults, StoreLocatorFeaturesDefaults, StoreLocatorSearchDefaults } from '@websolute/mock';
import { getLayout, getPage, getStaticPathsForSchema, IFeatureType, PageProps } from '@websolute/models';
import { Footer, Header, Layout, Meta, Page, Split, StoreLocatorItem, StoreLocatorSearch } from '@websolute/ui';

export default function StoreLocator({ layout, page, country, items = [], featureTypes = [], params }: StoreLocatorProps) {

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <StoreLocatorSearch locale={layout.locale} country={country} item={StoreLocatorSearchDefaults.item} items={items} featureTypes={featureTypes} />

        <Split item={SplitDefaults.item} />

        <Footer />
      </Page>
    </Layout>
  )
}

export interface StoreLocatorProps extends PageProps {
  country: { id: string, name: string },
  items: StoreLocatorItem[],
  featureTypes: IFeatureType[],
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('product_index', id, market, locale);

  const country = {
    id: 'it',
    name: 'Italy',
  };

  const items = StoreLocatorDefaults.sort((a, b) => {
    return a.rank - b.rank;
  });

  const featureTypes = StoreLocatorFeaturesDefaults;

  const props = asStaticProps({ ...context, layout, page, country, items, featureTypes });
  // console.log('StoreLocator getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('product_index');
  return {
    paths,
    fallback: true,
  };
}
