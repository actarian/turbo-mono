import { IFeatureType } from '@websolute/hooks';
import { HeaderDefaults, SplitDefaults, StoreLocatorDefaults, StoreLocatorFeaturesDefaults, StoreLocatorSearchDefaults } from '@websolute/mock';
import { Footer, Header, Layout, Page, Split, StoreLocatorItem, StoreLocatorSearch } from '@websolute/ui';
import Head from 'next/head';

const StoreLocator: React.FC<StoreLocatorProps> = ({ locale, country, items = [], featureTypes = [] }) => {
  return (
    <>
      <Head>
        <title>Store locator</title>
        <meta name="description" content="Store locator description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky menu={HeaderDefaults.menu} />

          <StoreLocatorSearch locale={locale} country={country} item={StoreLocatorSearchDefaults.item} items={items} featureTypes={featureTypes} />

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
    items: StoreLocatorDefaults.sort((a, b) => {
      return a.rank - b.rank;
    }),
    featureTypes: StoreLocatorFeaturesDefaults
  };
  return {
    props,
  };
}
