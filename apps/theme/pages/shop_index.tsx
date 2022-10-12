import {
  CategoriesPropositionDefaults, CategoryPropositionDefaults, ShopHeroDefaults,
  ShopItemsPropositionDefaults
} from '@websolute/mock';
import {
  CategoriesProposition, CategoryProposition, Footer, Header,
  Layout, Page, ShopHero, ShopItemsProposition, withPageTransition
} from '@websolute/ui';
import Head from 'next/head';

const ShopIndex = () => {
  return (
    <>
      <Head>
        <title>ShopIndex</title>
        <meta name="description" content="ShopIndex description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header fixed />

          <ShopHero item={ShopHeroDefaults.item} />

          <CategoriesProposition items={CategoriesPropositionDefaults.items} />

          <ShopItemsProposition items={ShopItemsPropositionDefaults.items} />

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export default withPageTransition(ShopIndex);
