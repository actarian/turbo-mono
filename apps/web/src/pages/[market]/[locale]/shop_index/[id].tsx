
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import {
  CategoryPropositionDefaults, ShopItemsPropositionDefaults
} from '@websolute/mock';
import type { PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import {
  CategoriesProposition, CategoryProposition, Footer, Header, Layout, Meta, Page, ShopHero,
  ShopItemsProposition
} from '@websolute/ui';
import { getShopCategories, IShopCategory } from 'src/models';

export default function ShopIndex({ layout, page, categories, heroCategory, secondaryCategories, params }: ShopIndexProps) {
  return (
    <Layout>
      <Meta />
      <Page>
        <Header fixed />

        <ShopHero item={heroCategory} />

        <CategoriesProposition items={secondaryCategories.items} />

        <ShopItemsProposition items={ShopItemsPropositionDefaults.items} />

        <CategoryProposition item={CategoryPropositionDefaults.item} />

        <Footer />
      </Page>
    </Layout>
  )
}

export interface ShopIndexProps extends PageProps {
  categories: IShopCategory[];
  heroCategory: IShopCategory;
  secondaryCategories: { items: IShopCategory[] };
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('shop_index', id, market, locale);

  const categories = await getShopCategories();

  const heroMainCategory = categories.find(x => x.categoryId === 'shop_category_sale');
  const heroCategory = {
    ...heroMainCategory,
    items: categories.filter(x => ['shop_category_women', 'shop_category_men', 'shop_category_desk'].includes(x.categoryId.toString())),
  };
  const secondaryCategories = {
    items: categories.filter(x => ['shop_category_new', 'shop_category_accessory', 'shop_category_workspace'].includes(x.categoryId.toString())),
  };

  const props = asStaticProps({ ...context, layout, page, categories, heroCategory, secondaryCategories });
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
