
import { Breadcrumbs } from '@components';
import { asStaticProps, getLayout, getPage, getStaticPathsForSchema, PageProps } from '@websolute/core';
import { BlogMoreDefaults, BlogPropositionDefaults, CategoriesPropositionDefaults, ProductsPropositionDefaults, SplitDefaults, SwiperHeroDefaults } from '@websolute/mock';
import {
  BlogMore, BlogProposition, CategoriesProposition, Container, Flex, Footer, Header, Layout,
  Media, Meta, Page, ProductsProposition, Proposition, Section, Split, SwiperHero, Text
} from '@websolute/ui';
import { GetStaticPropsContext } from 'next/types';

export default function Homepage({ layout, page, params }: PageProps) {
  console.log('Homepage.layout', layout);
  // console.log('Homepage.page', page);

  /*
  const { response } = useApiGet('/hello');
  if (response) {
    console.log('response', response);
  }
  */

  return (
    <>
      <Layout>
        <Meta />
        <Page>

          <Header fixed menu={layout.tree ? layout.tree.items : []} />

          <SwiperHero items={SwiperHeroDefaults.items} />

          <Breadcrumbs items={page.breadcrumb} />

          <Text size="1">{page.title}</Text>

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
                <img draggable={false} src='https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600' alt="title" />
              </Media>
            </Section.Background>
            <Container textAlign='center'>
              <Text size="1" fontWeight="700">Workbench.</Text>
            </Container>
          </Section>

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('homepage', id, market, locale);
  const props = asStaticProps({ ...context, layout, page });
  // console.log('Homepage getStaticProps', props, context);
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
