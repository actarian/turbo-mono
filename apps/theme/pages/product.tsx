import { CategoryPropositionDefaults, HeaderDefaults, ProductDefaults, ProductsRelatedDefaults } from '@websolute/mock';
import {
  Breadcrumb, CategoryProposition, Container, Footer, Header, Layout, MediaType, Page,
  ProductOverview, ProductsIncentive, ProductsRelated, Section
} from '@websolute/ui';
import Head from 'next/head';

export type ProductItem = {
  id: number;
  schema: string;
  href: string;
  title: string;
  abstract: string;
  price: number;
  date: string | Date;
  media: {
    type: MediaType;
    src: string;
  }[];
}

type Props = {
  item: ProductItem
}

export default function Product({ item, ...props }: Props) {
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky menu={HeaderDefaults.menu} />

          <Section paddingBottom="0">
            <Container>
              <Breadcrumb marginBottom="1rem">
                <Breadcrumb.Item href="/products">Shop</Breadcrumb.Item>
                <Breadcrumb.Item href="/category">Men</Breadcrumb.Item>
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

Product.defaultProps = ProductDefaults;
