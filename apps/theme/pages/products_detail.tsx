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

const ProductsDetail = ({ page }: ProductsDetailProps) => {
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
                  <NavLink href={page.category.href} passHref>
                    <Button as="a" variant="nav" marginBottom="1rem">
                      <ChevronLeft />
                      <Text size="10" fontWeight="700" textTransform="uppercase">{page.category.title}</Text>
                    </Button>
                  </NavLink>
                  <Text size="2" textAlign="center">{page.title}</Text>
                </Flex.Col>
              </Container.Fluid>
            </Section>

            <LazyLoader components={page.components} />

          </MediaGallery>

          <ProductsDetailSizeColor id="size-color" item={page.sizeColor} />

          <ProductsDetailDownload id="download" item={page.download} />

          <ProductsDetailRelated id="related" item={page.related} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export type ProductsDetailProps = {
  page: ProductsDetailItem;
}

export async function getStaticProps(): Promise<{ props: ProductsDetailProps }> {
  const props = {
    page: ProductsDetailDefaults.item,
  };
  return {
    props,
  };
}

export default withPageTransition(ProductsDetail);
