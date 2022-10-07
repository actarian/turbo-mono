
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import { MagazineSearchFeaturesDefaults } from '@websolute/mock';
import type { IFeatureType, PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import type { MagazineSearchItem } from '@websolute/ui';
import { CategoryHero, Footer, Header, Layout, MagazineSearch, Meta, Page } from '@websolute/ui';
import { getMagazineDetails } from 'src/models';

export default function MagazineCategory({ layout, page, items = [], featureTypes = [], params }: MagazineCategoryProps) {
  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <CategoryHero item={page} />

        <MagazineSearch id="serp" padding="3rem 0" items={items} featureTypes={featureTypes}></MagazineSearch>

        <Footer />

      </Page>
    </Layout>
  )
}

export interface MagazineCategoryProps extends PageProps {
  items: MagazineSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('magazine_category', id, market, locale);

  const items = await getMagazineDetails({ market, locale });
  const featureTypes = MagazineSearchFeaturesDefaults;

  const props = asStaticProps({ ...context, layout, page, items, featureTypes });
  // console.log('MagazineCategory getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('magazine_category');
  return {
    paths,
    fallback: true,
  };
}
