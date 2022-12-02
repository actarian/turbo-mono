import { asServerProps, deserializeValue, IStaticContext } from '@websolute/core';
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
  );
}

export type StoreLocatorProps = PageProps & {
  country: { id: string, name: string },
  items: StoreLocatorItem[],
  featureTypes: IFeatureType[],
};

export async function getStaticProps(context: IStaticContext) {
  const id = deserializeValue(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('store_index', id, market, locale);

  const country = {
    id: 'it',
    name: 'Italy',
  };

  const items = StoreLocatorDefaults.sort((a, b) => {
    return a.rank - b.rank;
  });

  const featureTypes = StoreLocatorFeaturesDefaults;

  const props = asServerProps({ ...context, layout, page, country, items, featureTypes });
  // console.log('StoreLocator getStaticProps', props);
  return {
    props,
    /*
    * Next.js will attempt to re-generate the page when a request comes in at most once every 60 seconds
    */
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('store_index');
  return {
    paths,
    /*
    * getStaticProps runs in the background when using fallback: true
    * getStaticProps is called before initial render when using fallback: blocking
    */
    fallback: 'blocking',
  };
}
