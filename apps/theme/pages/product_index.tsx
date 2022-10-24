import { CategoriesPropositionDefaults, CategoryPropositionDefaults, ProductsHeroDefaults, ProductsPropositionDefaults } from '@websolute/mock';
import {
  CategoriesProposition, CategoryProposition, Footer, Header,
  Layout, Page, ProductsHero, ProductsProposition, withPageTransition
} from '@websolute/ui';
import Head from 'next/head';

// !!! unused, header menu goes directly to products_category

const ProductIndex = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header fixed />

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

export default withPageTransition(ProductIndex);
