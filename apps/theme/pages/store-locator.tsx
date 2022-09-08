import { IFeatureType } from '@websolute/hooks';
import {
  Footer, Header, Layout, Page, Split, SplitDefaults, StoreLocatorItem, StoreLocatorMapDefaults, StoreLocatorSearch
} from '@websolute/ui';
import Head from 'next/head';
import STORES from '../json/store-locator-all.json';
import STORES_FEATURES from '../json/store-locator-features.json';

const StoreLocator: React.FC<StoreLocatorProps> = ({ locale, country, items = [], featureTypes = [] }) => {
  return (
    <>
      <Head>
        <title>Store locator</title>
        <meta name="description" content="Store locator description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

          <StoreLocatorSearch locale={locale} country={country} item={StoreLocatorMapDefaults.item} items={items} featureTypes={featureTypes} />

          <Split item={SplitDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export default StoreLocator;

type StoreLocatorProps = {
  locale: string;
  country: { id: string, name: string },
  items: StoreLocatorItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(): Promise<{ props: StoreLocatorProps }> {
  const props = {
    locale: 'it',
    country: {
      id: 'it',
      name: 'Italy',
    },
    items: STORES.sort((a, b) => {
      return a.rank - b.rank;
    }),
    featureTypes: STORES_FEATURES
  };
  return {
    props,
  };
}
