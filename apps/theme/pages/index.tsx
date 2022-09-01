import Head from 'next/head';
import { Container, Flex, Layout, Media, Page, Section, Text } from 'ui/components';
import { BlogMore, BlogMoreDefaults, BlogProposition, CategoriesProposition, CategoriesPropositionDefaults, Footer, Header, ProductsProposition, ProductsPropositionDefaults, Proposition, Split, SplitDefaults, SwiperHero, SwiperHeroDefaults } from 'ui/sections';

export default function Index() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header fixed />

          <SwiperHero items={SwiperHeroDefaults.items} />

          <BlogProposition />

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
                <img draggable={false} src='https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600' />
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
