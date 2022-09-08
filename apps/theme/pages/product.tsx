import {
  Breadcrumb, CategoryProposition, CategoryPropositionDefaults, Container, Footer, Header, Layout, MediaType, Page,
  ProductOverview, ProductsIncentive, ProductsRelated, ProductsRelatedDefaults, Section
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

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

Product.defaultProps = {
  item: {
    id: 1,
    href: '/product',
    title: 'Basic Tee 6-Pack',
    abstract: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    price: 36,
    media: [{
      type: MediaType.Image,
      src: '/product-04.jpg',
    }, {
      type: MediaType.Image,
      src: '/product-01.jpg',
    }, {
      type: MediaType.Image,
      src: '/product-02.jpg',
    }, {
      type: MediaType.Image,
      src: '/product-03.jpg',
    }],
  }
};
