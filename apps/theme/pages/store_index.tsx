import { SplitDefaults, StoreLocatorDefaults, StoreLocatorFeaturesDefaults, StoreLocatorSearchDefaults } from '@websolute/mock';
import { IFeatureType } from '@websolute/models';
import { Footer, Header, Layout, Page, Split, StoreLocatorItem, StoreLocatorSearch, withPageTransition } from '@websolute/ui';
import Head from 'next/head';

const StoreIndex: React.FC<StoreIndexProps> = ({ locale, country, items = [], featureTypes = [] }) => {
  return (
    <>
      <Head>
        <title>Store locator</title>
        <meta name="description" content="Store locator description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          <StoreLocatorSearch locale={locale} country={country} item={StoreLocatorSearchDefaults.item} items={items} featureTypes={featureTypes} />

          <Split item={SplitDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  );
};

type StoreIndexProps = {
  locale: string;
  country: { id: string, name: string },
  items: StoreLocatorItem[];
  featureTypes: IFeatureType[];
};

export async function getStaticProps(): Promise<{ props: StoreIndexProps }> {
  const props = {
    locale: 'it',
    country: {
      id: 'it',
      name: 'Italy',
    },
    items: StoreLocatorDefaults.sort((a, b) => {
      return a.rank - b.rank;
    }),
    featureTypes: StoreLocatorFeaturesDefaults
  };
  return {
    props,
  };
}

export default withPageTransition(StoreIndex);
