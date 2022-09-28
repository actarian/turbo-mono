import { CategoryPropositionDefaults, ProductDefaults, ProductsRelatedDefaults } from '@websolute/mock';
import type { IMedia } from '@websolute/models';
import {
  Breadcrumb, CategoryProposition, Container, Footer, Header, Layout, Page,
  ProductOverview, ProductsIncentive, ProductsRelated, Section
} from '@websolute/ui';
import Head from 'next/head';

export type ProductsDetailItem = {
  id: number;
  schema: string;
  href: string;
  title: string;
  abstract: string;
  price: number;
  date: string | Date;
  media: IMedia[];
}

type Props = {
  item: ProductsDetailItem
}

export default function ProductsDetail({ item, ...props }: Props) {
  return (
    <>
      <Head>
        <title>Products detail</title>
        <meta name="description" content="Products detail description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          <Section paddingBottom="0">
            <Container>
              <Breadcrumb marginBottom="1rem">
                <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
                <Breadcrumb.Item href="/shop_category">Men</Breadcrumb.Item>
                <Breadcrumb.Item>Basic Tee 6-Pack</Breadcrumb.Item>
              </Breadcrumb>
            </Container>
          </Section>

          <ProductOverview.Gallery media={item.media} paddingTop="0" />

          <ProductOverview item={item} />

          <ProductsIncentive />

          <ProductsRelated items={ProductsRelatedDefaults.items} />

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

ProductsDetail.defaultProps = ProductDefaults;
