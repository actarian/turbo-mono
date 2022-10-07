
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import { MagazineSearchFeaturesDefaults } from '@websolute/mock';
import type { IFeatureType, PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import type { MagazineSearchItem } from '@websolute/ui';
import { CategoryHero, Footer, Header, Layout, MagazineSearch, Meta, Page } from '@websolute/ui';
import { getMagazineDetails } from 'src/models';

export default function MagazineIndex({ layout, page, items = [], featureTypes = [], params }: MagazineIndexProps) {
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

export interface MagazineIndexProps extends PageProps {
  items: MagazineSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('magazine_index', id, market, locale);

  const items = await getMagazineDetails({ market, locale });
  const featureTypes = MagazineSearchFeaturesDefaults;

  const props = asStaticProps({ ...context, layout, page, items, featureTypes });
  // console.log('MagazineIndex getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('magazine_index');
  return {
    paths,
    fallback: true,
  };
}
