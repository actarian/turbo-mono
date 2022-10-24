import { CategoryPropositionDefaults, ProductDefaults, ProductsRelatedDefaults } from '@websolute/mock';
import type { IMedia } from '@websolute/models';
import {
  Breadcrumb, CategoryProposition, Container, Footer, Header, Layout, Page,
  ProductOverview, ProductsRelated, Section, ShopIncentive, withPageTransition
} from '@websolute/ui';
import Head from 'next/head';

export type ShopDetailItem = {
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
  page: ShopDetailItem
}

const ShopDetail = ({ page, ...props }: Props) => {
  return (
    <>
      <Head>
        <title>Shop detail</title>
        <meta name="description" content="Shop detail description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          <Section paddingBottom="0">
            <Container>
              <Breadcrumb marginBottom="1rem">
                <Breadcrumb.Item href="/shop_index">Shop</Breadcrumb.Item>
                <Breadcrumb.Item href="/shop_category">Men</Breadcrumb.Item>
                <Breadcrumb.Item>Basic Tee 6-Pack</Breadcrumb.Item>
              </Breadcrumb>
            </Container>
          </Section>

          <ProductOverview.Gallery media={page.media} paddingTop="0" />

          <ProductOverview item={page} />

          <ShopIncentive />

          <ProductsRelated items={ProductsRelatedDefaults.items} />

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

ShopDetail.defaultProps = {
  page: ProductDefaults.item
};

export default withPageTransition(ShopDetail);
