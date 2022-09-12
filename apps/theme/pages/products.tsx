import { CategoriesPropositionDefaults, CategoryPropositionDefaults, HeaderDefaults, ProductsHeroDefaults, ProductsPropositionDefaults } from '@websolute/mock';
import {
  CategoriesProposition, CategoryProposition, Footer, Header,
  Layout, Page, ProductsHero, ProductsProposition
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

          <Header fixed menu={HeaderDefaults.menu} />

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
