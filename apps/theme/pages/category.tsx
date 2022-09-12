import { CategoryPropositionDefaults, HeaderDefaults, ProductsSearchDefaults } from '@websolute/mock';
import {
  Breadcrumb, CategoryHero, CategoryProposition, Container, Footer, Header, Layout, Page,
  ProductsIncentive, ProductsRelatedProps, ProductsSearch, Section
} from '@websolute/ui';
import Head from 'next/head';

export default function Category({ items }: ProductsRelatedProps) {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Category description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky menu={HeaderDefaults.menu} />

          {false &&
            <Section borderBottom="1px solid var(--color-neutral-200)">
              <Container>
                <Breadcrumb>
                  <Breadcrumb.Item href="/products">Shop</Breadcrumb.Item>
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
