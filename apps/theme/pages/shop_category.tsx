import { CategoryPropositionDefaults, ProductsSearchDefaults } from '@websolute/mock';
import {
  Breadcrumb, CategoryHero, CategoryProposition, Container, Footer, Header, Layout, Page,
  ProductsIncentive, ProductsRelatedProps, ProductsSearch, Section
} from '@websolute/ui';
import Head from 'next/head';

export default function ShopCategory({ items }: ProductsRelatedProps) {
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

          <CategoryHero />

          <ProductsSearch id="serp" padding="3rem 0" items={ProductsSearchDefaults.items}></ProductsSearch>

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <ProductsIncentive />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}
