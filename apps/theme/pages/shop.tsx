import { CategoriesPropositionDefaults, CategoryPropositionDefaults, ShopHeroDefaults, ShopItemsPropositionDefaults } from '@websolute/mock';
import {
  CategoriesProposition, CategoryProposition, Footer, Header,
  Layout, Page, ShopHero, ShopItemsProposition
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

          <ShopHero items={ShopHeroDefaults.items} />

          <CategoriesProposition items={CategoriesPropositionDefaults.items} />

          <ShopItemsProposition items={ShopItemsPropositionDefaults.items} />

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}
