import { MagazineHeroDefaults, MagazineSearchDefaults, MagazineSearchFeaturesDefaults } from '@websolute/mock';
import { IFeatureType } from '@websolute/models';
import { CategoryHero, Footer, Header, Layout, MagazineSearch, MagazineSearchItem, Page, withPageTransition } from '@websolute/ui';
import Head from 'next/head';

const MagazineIndex = ({ items = [], featureTypes = [] }) => {
  return (
    <>
      <Head>
        <title>Magazine</title>
        <meta name="description" content="Magazine description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          <CategoryHero item={MagazineHeroDefaults.item} />

          <MagazineSearch id="serp" padding="3rem 0" items={items} featureTypes={featureTypes}></MagazineSearch>

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export type MagazineIndexProps = {
  items: MagazineSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(): Promise<{ props: MagazineIndexProps }> {
  const props = {
    items: MagazineSearchDefaults.items,
    featureTypes: MagazineSearchFeaturesDefaults
  };
  return {
    props,
  };
}

export default withPageTransition(MagazineIndex);
