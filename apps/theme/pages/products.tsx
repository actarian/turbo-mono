import {
  CategoriesProposition, CategoriesPropositionDefaults, CategoryProposition, CategoryPropositionDefaults, Footer, Header,
  Layout, Page, ProductsHero, ProductsHeroDefaults, ProductsProposition, ProductsPropositionDefaults
} from '@websolute/ui';
import Head from 'next/head';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products description" />
        <link rel="icon" href="/favicon.ico" />
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
