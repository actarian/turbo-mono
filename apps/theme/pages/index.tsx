import { BlogMoreDefaults, BlogPropositionDefaults, CategoriesPropositionDefaults, HeaderDefaults, ProductsPropositionDefaults, SplitDefaults, SwiperHeroDefaults } from '@websolute/mock';
import {
  BlogMore, BlogProposition, CategoriesProposition,
  Container, Flex, Footer, Header, Layout, Media, Page, ProductsProposition,
  Proposition, Section, Split, SwiperHero, Text
} from '@websolute/ui';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header fixed menu={HeaderDefaults.menu} />

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
