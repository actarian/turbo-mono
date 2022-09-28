import { CategoriesPropositionDefaults, CategoryPropositionDefaults, ProductsHeroDefaults, ProductsPropositionDefaults } from '@websolute/mock';
import {
  CategoriesProposition, CategoryProposition, Footer, Header,
  Layout, Page, ProductsHero, ProductsProposition
} from '@websolute/ui';
import Head from 'next/head';

export default function ShopIndex() {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Shop description" />
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
