
import { asStaticProps, getLayout, getPage, getStaticPathsForSchema, PageProps } from '@websolute/core';
import { CategoriesPropositionDefaults, CategoryPropositionDefaults, ProductsHeroDefaults, ProductsPropositionDefaults } from '@websolute/mock';
import { CategoriesProposition, CategoryProposition, Footer, Header, Layout, Page, ProductsHero, ProductsProposition } from '@websolute/ui';
import { GetStaticPropsContext } from 'next/types';

export default function Products({ layout, page, params }: ProductsProps) {

  return (
    <>
      <Layout>
        <Page>

          <Header fixed menu={layout.tree ? layout.tree.items : []} />

          <ProductsHero items={ProductsHeroDefaults.items} />

          <CategoriesProposition items={CategoriesPropositionDefaults.items} />

          <ProductsProposition items={ProductsPropositionDefaults.items} />

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export interface ProductsProps extends PageProps {
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
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
