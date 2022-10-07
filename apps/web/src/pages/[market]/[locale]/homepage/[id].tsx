
import type { IStaticContext } from '@websolute/core';
import { asStaticProps } from '@websolute/core';
import { BlogMoreDefaults, BlogPropositionDefaults, CategoriesPropositionDefaults, ProductsPropositionDefaults, SplitDefaults, SwiperHeroDefaults } from '@websolute/mock';
import type { PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import {
  BlogMore, BlogProposition, CategoriesProposition, Container, Flex, Footer, Header, Layout,
  Media, MediaImage, Meta, Page, ProductsProposition, Proposition, Section, Split, SwiperHero, Text
} from '@websolute/ui';

export default function Homepage({ layout, page, params }: PageProps) {
  // console.log('Homepage.layout', layout);
  // console.log('Homepage.page', page);

  /*
  const { response } = useApiGet('/hello');
  if (response) {
    console.log('response', response);
  }
  */

  // console.log('layout.tree', JSON.stringify(layout.tree));

  return (
    <Layout>
      <Meta />
      <Page>
        <Header fixed />

        <SwiperHero items={SwiperHeroDefaults.items} />

        <BlogProposition item={BlogPropositionDefaults.item} />

        <BlogMore items={BlogMoreDefaults.items} />

        <CategoriesProposition items={CategoriesPropositionDefaults.items} />

        <ProductsProposition items={ProductsPropositionDefaults.items} />

        <Split item={SplitDefaults.item} />

        <Proposition />

        <Section padding="3rem 0" backgroundColor="var(--color-neutral-900)">
          <Container>
            <Flex.Row justifyContent="center">
              <Text size="1" as="span" fontWeight="700" gradient>Workbench.</Text>
            </Flex.Row>
          </Container>
        </Section>

        <Section aspectRatio={4 / 3} aspectRatioSm={2 / 1} aspectRatioMd={3 / 1} aspectRatioLg={4 / 1}>
          <Section.Background>
            <Media overlay>
              <MediaImage draggable={false} src='https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600' alt="title" />
            </Media>
          </Section.Background>
          <Container textAlign='center'>
            <Text size="1" fontWeight="700">Workbench.</Text>
          </Container>
        </Section>

        <Footer />
      </Page>
    </Layout>
  )
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('homepage', id, market, locale);
  const props = asStaticProps({ ...context, layout, page });
  // console.log('Homepage getStaticProps', props, context);
  // console.log(layout.tree?.items);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('homepage');
  return {
    paths,
    fallback: true,
  };
}
