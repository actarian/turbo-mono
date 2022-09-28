
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import { CategoriesPropositionDefaults, CategoryPropositionDefaults, ProductsHeroDefaults, ProductsPropositionDefaults } from '@websolute/mock';
import { getLayout, getPage, getStaticPathsForSchema, PageProps } from '@websolute/models';
import { CategoriesProposition, CategoryProposition, Footer, Header, Layout, Meta, Page, ProductsHero, ProductsProposition } from '@websolute/ui';

export default function Products({ layout, page, params }: ProductsProps) {

  return (
    <Layout>
      <Meta />
      <Page>
        <Header fixed />

        <ProductsHero items={ProductsHeroDefaults.items} />

        <CategoriesProposition items={CategoriesPropositionDefaults.items} />

        <ProductsProposition items={ProductsPropositionDefaults.items} />

        <CategoryProposition item={CategoryPropositionDefaults.item} />

        <Footer />
      </Page>
    </Layout>
  )
}

export interface ProductsProps extends PageProps {
}

/*
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
  params: {
    id: string;
    market: string;
    locale: string;
  }
}
*/

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('product_index', id, market, locale);
  const props = asStaticProps({ ...context, layout, page });
  // console.log('Products getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('product_index');
  return {
    paths,
    fallback: true,
  };
}
