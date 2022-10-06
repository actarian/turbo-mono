
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import { useDateTimeFormat } from '@websolute/hooks';
import { ChevronLeft } from '@websolute/icons';
import type { PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import { Button, Container, Flex, Footer, Grid, Header, Layout, LazyLoader, MagazineRelated, Media, MediaGallery, Meta, NavLink, Page, Section, Text } from '@websolute/ui';

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
                <Grid sm={6}>
                  <Media item={page.media} />
                </Grid>
                <Grid sm={6}>
                  <Flex.Col gap="3rem" gapSm="4rem" gapMd="5rem" gapLg="6rem">
                    <Flex.Row justifyContent="space-between">
                      <NavLink href={page.category.href} passHref>
                        <Button as="a" variant="nav">
                          <ChevronLeft />
                          <Text size="10" fontWeight="700" textTransform="uppercase">{page.category.title}</Text>
                        </Button>
                      </NavLink>
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
  )
}

export interface MagazineDetailProps extends PageProps {

}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('magazine_detail', id, market, locale);

  const props = asStaticProps({ ...context, layout, page });
  // console.log('MagazineDetail getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('magazine_detail');
  return {
    paths,
    fallback: true,
  };
}
