import { CategoryPropositionDefaults, ShopCategoryDefaults, ShopSearchDefaults, ShopSearchFeaturesDefaults } from '@websolute/mock';
import { IFeatureType } from '@websolute/models';
import { CategoryProposition, Footer, Header, Layout, Page, ShopCategoryHero, ShopCategoryHeroItem, ShopIncentive, ShopSearch, ShopSearchItem, withPageTransition } from '@websolute/ui';
import Head from 'next/head';

const ShopCategory = ({ page, items = [], featureTypes = [] }: ShopCategoryProps) => {
  return (
    <>
      <Head>
        <title>Shop category</title>
        <meta name="description" content="Shop category description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          <ShopCategoryHero item={page} />

          <ShopSearch id="serp" padding="3rem 0" title={page.title || ''} items={items} featureTypes={featureTypes}></ShopSearch>

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <ShopIncentive />

          <Footer />

        </Page>
      </Layout>
    </>
  );
};

export type ShopCategoryProps = {
  page: ShopCategoryHeroItem;
  items: ShopSearchItem[];
  featureTypes: IFeatureType[];
};

export async function getStaticProps(): Promise<{ props: ShopCategoryProps }> {
  const props = {
    page: ShopCategoryDefaults.item,
    items: ShopSearchDefaults.items,
    featureTypes: ShopSearchFeaturesDefaults
  };
  return {
    props,
  };
}

export default withPageTransition(ShopCategory);
