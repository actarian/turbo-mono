import { CategoryPropositionDefaults, ShopSearchDefaults } from '@websolute/mock';
import {
  Breadcrumb, CategoryProposition, Container, Footer, Header, Layout, Page, Section,
  ShopCategoryHero, ShopIncentive, ShopSearch
} from '@websolute/ui';
import Head from 'next/head';

export default function ShopCategory() {
  return (
    <>
      <Head>
        <title>Shop category</title>
        <meta name="description" content="Shop category description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          {false &&
            <Section borderBottom="1px solid var(--color-neutral-200)">
              <Container>
                <Breadcrumb>
                  <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
                  <Breadcrumb.Item>New Arrivals</Breadcrumb.Item>
                </Breadcrumb>
              </Container>
            </Section>
          }

          <ShopCategoryHero />

          <ShopSearch id="serp" padding="3rem 0" items={ShopSearchDefaults.items}></ShopSearch>

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <ShopIncentive />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}
