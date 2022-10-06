import type { IEquatable } from '@websolute/core';
import { ChevronLeft } from '@websolute/icons';
import { ProductsDetailDefaults } from '@websolute/mock';
import type { IMedia } from '@websolute/models';
import {
  Button, Container, Flex, Footer, Header, ILazyComponent, Layout, LazyLoader, MediaGallery, Nav, NavLink,
  Page, PageNav, ProductsDetailDownload, ProductsDetailDownloadItem, ProductsDetailRelated,
  ProductsDetailRelatedItem, ProductsDetailSizeColor, ProductsDetailSizeColorItem, Section, Text,
  withPageTransition
} from '@websolute/ui';
import Head from 'next/head';

export type ProductsDetailItem = {
  id: IEquatable;
  schema: string;
  href: string;
  title: string;
  abstract: string;
  medias: IMedia[];
  categoryId: IEquatable;
  category: {
    href: string;
    title: string;
  };
  components: ILazyComponent[];
  sizeColor: ProductsDetailSizeColorItem;
  download: ProductsDetailDownloadItem;
  related: ProductsDetailRelatedItem;
}

const ProductsDetail = ({ item }: ProductsDetailProps) => {
  const pageNavItems = [{
    href: '#overview',
    title: 'Overview'
  }, {
    href: '#in-use',
    title: 'In Use'
  }, {
    href: '#designer',
    title: 'Designer'
  }, {
    href: '#size-color',
    title: 'Size & Color'
  }, {
    href: '#download',
    title: 'Download'
  }];
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

          <PageNav items={pageNavItems}>
            {false && <Nav.Row gap="3rem" display="none" displaySm="flex">
              <Button as="a" variant="primary">More</Button>
            </Nav.Row>}
          </PageNav>

          <MediaGallery>

            <Section padding="7rem 0" id="overview">
              <Container.Fluid>
                <Flex.Col alignItems="center">
                  <NavLink href={item.category.href} passHref>
                    <Button as="a" variant="nav" marginBottom="1rem">
                      <ChevronLeft />
                      <Text size="10" fontWeight="700" textTransform="uppercase">{item.category.title}</Text>
                    </Button>
                  </NavLink>
                  <Text size="2" textAlign="center">{item.title}</Text>
                </Flex.Col>
              </Container.Fluid>
            </Section>

            <LazyLoader components={item.components} />

          </MediaGallery>

          <ProductsDetailSizeColor id="size-color" item={item.sizeColor} />

          <ProductsDetailDownload id="download" item={item.download} />

          <ProductsDetailRelated id="related" item={item.related} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export type ProductsDetailProps = {
  item: ProductsDetailItem;
}

export async function getStaticProps(): Promise<{ props: ProductsDetailProps }> {
  const props = {
    item: ProductsDetailDefaults.item,
  };
  return {
    props,
  };
}

export default withPageTransition(ProductsDetail);
