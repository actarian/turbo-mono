
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import {
  CategoriesPropositionDefaults, CategoryPropositionDefaults, ShopHeroDefaults,
  ShopItemsPropositionDefaults
} from '@websolute/mock';
import type { PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import {
  CategoriesProposition, CategoryProposition, Footer, Header, Layout, Meta, Page, ShopHero,
  ShopItemsProposition
} from '@websolute/ui';

export default function ShopIndex({ layout, page, params }: ShopIndexProps) {

  return (
    <Layout>
      <Meta />
      <Page>
        <Header fixed />

        <ShopHero items={ShopHeroDefaults.items} />

        <CategoriesProposition items={CategoriesPropositionDefaults.items} />

        <ShopItemsProposition items={ShopItemsPropositionDefaults.items} />

        <CategoryProposition item={CategoryPropositionDefaults.item} />

        <Footer />
      </Page>
    </Layout>
  )
}

export interface ShopIndexProps extends PageProps {
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('shop_index', id, market, locale);
  const props = asStaticProps({ ...context, layout, page });
  // console.log('ShopIndex getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('shop_index');
  return {
    paths,
    fallback: true,
  };
}
