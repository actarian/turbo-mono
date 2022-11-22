import { BlogMoreDefaults, BlogPropositionDefaults, CategoriesPropositionDefaults, ProductsPropositionDefaults, SplitDefaults, SwiperHeroDefaults } from '@websolute/mock';
import {
  BlogMore, BlogProposition, CategoriesProposition,
  Container, Flex, Footer, Header, Layout, Media, MediaImage, Page, ProductsProposition,
  Proposition, Section, Split, SwiperHero, Text, withPageTransition
} from '@websolute/ui';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>
      <Layout>
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
                <MediaImage draggable={false} src="https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600" />
              </Media>
            </Section.Background>
            <Container textAlign="center">
              <Text size="1" fontWeight="700">Workbench.</Text>
            </Container>
          </Section>

          <Footer />

        </Page>
      </Layout>
    </>
  );
};

export default withPageTransition(Index);
