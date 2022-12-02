import { asServerProps, deserializeValue, IStaticContext } from '@websolute/core';
import { MagazineSearchFeaturesDefaults } from '@websolute/mock';
import { getLayout, getPage, getStaticPathsForSchema, IFeatureType, PageProps } from '@websolute/models';
import { CategoryHero, Footer, Header, Layout, MagazineSearch, MagazineSearchItem, Meta, Page } from '@websolute/ui';
import { getMagazineDetails } from 'src/models';

export default function MagazineCategory({ layout, page, items = [], featureTypes = [], params }: MagazineCategoryProps) {
  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <CategoryHero item={page} />

        <MagazineSearch id="serp" padding="3rem 0" items={items} featureTypes={featureTypes} category={page.category}></MagazineSearch>

        <Footer />

      </Page>
    </Layout>
  );
}

export type MagazineCategoryProps = PageProps & {
  items: MagazineSearchItem[];
  featureTypes: IFeatureType[];
};

export async function getStaticProps(context: IStaticContext) {
  const id = deserializeValue(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('magazine_category', id, market, locale);

  const items = await getMagazineDetails({ market, locale });
  const featureTypes = MagazineSearchFeaturesDefaults;

  const props = asServerProps({ ...context, layout, page, items, featureTypes });
  // console.log('MagazineCategory getStaticProps', props);
  return {
    props,
    /*
    * Next.js will attempt to re-generate the page when a request comes in at most once every 60 seconds
    */
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('magazine_category');
  return {
    paths,
    /*
    * getStaticProps runs in the background when using fallback: true
    * getStaticProps is called before initial render when using fallback: blocking
    */
    fallback: 'blocking',
  };
}
