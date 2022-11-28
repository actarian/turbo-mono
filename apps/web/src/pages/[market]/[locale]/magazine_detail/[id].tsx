
import { asServerProps, IStaticContext } from '@websolute/core';
import { useDateTimeFormat } from '@websolute/hooks';
import { ChevronLeft } from '@websolute/icons';
import { MagazineDetailDefaults } from '@websolute/mock';
import { getLayout, getPage, getStaticPathsForSchema, PageProps } from '@websolute/models';
import { Button, Container, Flex, Footer, Grid, Header, Layout, LazyLoader, MagazineRelated, Media, MediaGallery, Meta, NavLink, Page, Section, Text } from '@websolute/ui';
import { getMagazineDetails } from 'src/models';

export default function MagazineDetail({ layout, page, params }: MagazineDetailProps) {
  const dateTimeFormat = useDateTimeFormat({
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <MediaGallery>

          <Section padding="7rem 0">
            <Container.Fluid>
              <Grid.Row rowGap="1rem">
                <Grid md={6}>
                  <Media item={page.media} />
                </Grid>
                <Grid md={6}>
                  <Flex.Col gap="3rem" gapSm="4rem" gapMd="5rem" gapLg="6rem">
                    <Flex.Row justifyContent="space-between">
                      {page.parentRoute && page.parentRoute.href && <NavLink href={page.parentRoute.href} passHref>
                        <Button as="a" variant="nav">
                          <ChevronLeft />
                          <Text size="10" fontWeight="700" textTransform="uppercase">{page.parentRoute.title}</Text>
                        </Button>
                      </NavLink>}
                      <Text size="10" fontWeight="700" textTransform="uppercase">{dateTimeFormat(page.date)}</Text>
                    </Flex.Row>
                    <Text size="2">{page.title}</Text>
                    <Text size="10" fontWeight="700" textTransform="uppercase">{page.photographer}</Text>
                    {page.abstract && <Text size="7" lineHeight="2" dangerouslySetInnerHTML={{ __html: page.abstract }}></Text>}
                  </Flex.Col>
                </Grid>
              </Grid.Row>
            </Container.Fluid>
          </Section>

          <LazyLoader components={page.components} />

        </MediaGallery>

        <MagazineRelated item={page.related} />

        <Footer />

      </Page>
    </Layout>
  );
}

export type MagazineDetailProps = PageProps & {
};

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('magazine_detail', id, market, locale);

  if (page) {
    /*
    pick first 10 related items of the same category
    */
    let relatedItems = await getMagazineDetails({ where: { categoryId: page.categoryId }, market, locale });
    relatedItems = relatedItems.filter(x => x.id !== page.id).slice(0, Math.min(relatedItems.length, 10));

    // fake data
    const item = MagazineDetailDefaults.item;
    page.abstract = item.abstract;
    page.photographer = item.photographer;
    page.components = item.components;
    page.related = item.related;
    page.related.items = relatedItems;
  }

  const props = asServerProps({ ...context, layout, page });
  // console.log('MagazineDetail getStaticProps', props);
  return {
    props,
    /*
    * Next.js will attempt to re-generate the page when a request comes in at most once every 60 seconds
    */
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('magazine_detail');
  return {
    paths,
    /*
    * getStaticProps runs in the background when using fallback: true
    * getStaticProps is called before initial render when using fallback: blocking
    */
    fallback: 'blocking',
  };
}
