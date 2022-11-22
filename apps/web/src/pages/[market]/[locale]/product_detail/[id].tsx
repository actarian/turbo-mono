
import { asServerProps, IStaticContext } from '@websolute/core';
import { ChevronLeft } from '@websolute/icons';
import { ProductsDetailDefaults } from '@websolute/mock';
import { getLayout, getPage, getStaticPathsForSchema, PageProps } from '@websolute/models';
import { Button, Container, Flex, Footer, Header, Layout, LazyLoader, MediaGallery, Meta, Nav, NavLink, Page, PageNav, ProductsDetailDownload, ProductsDetailRelated, ProductsDetailSizeColor, Section, Text } from '@websolute/ui';

export default function ProductDetail({ layout, page, params }: ProductDetailProps) {
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
    <Layout>
      <Meta />
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
                {page.parentRoute && page.parentRoute.href && <NavLink href={page.parentRoute.href} passHref>
                  <Button as="a" variant="nav" marginBottom="1rem">
                    <ChevronLeft />
                    <Text size="10" fontWeight="700" textTransform="uppercase">{page.parentRoute.title}</Text>
                  </Button>
                </NavLink>}
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
  );
}

export type ProductDetailProps = PageProps & {

};

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  let page = await getPage('product_detail', id, market, locale);

  if (page && !page.related) {
    const item = ProductsDetailDefaults.item;
    page = {
      ...page,
      abstract: item.abstract,
      components: item.components,
      sizeColor: item.sizeColor,
      download: item.download,
      related: item.related,
    };
  }

  const props = asServerProps({ ...context, layout, page });
  // console.log('ProductDetail getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('product_detail');
  return {
    paths,
    fallback: true,
  };
}
