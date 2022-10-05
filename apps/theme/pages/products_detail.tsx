import type { IEquatable } from '@websolute/core';
import { ChevronLeft } from '@websolute/icons';
import { CategoryPropositionDefaults, ProductsDetailDefaults, ProductsRelatedDefaults } from '@websolute/mock';
import type { IMedia } from '@websolute/models';
import type { ILazyComponent } from '@websolute/ui';
import {
  Button, Card, CategoryProposition, Container, Flex, Footer, Header, Layout, LazyLoader, Media, NavLink, Page, ProductsRelated, Section, ShopIncentive, Text, withPageTransition
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
}

const ProductsDetail = ({ item }: ProductsDetailProps) => {
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

          <Section padding="7rem 0">
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

          {false &&
            <>
              <Media aspectRatio={16 / 10} item={item.medias[0]} />
              <Card justifyContent="center" height="50vh" overflow="hidden">
                <Card.Background>
                  <Media item={item.medias[0]} />
                </Card.Background>
              </Card>

              <ShopIncentive />

              <ProductsRelated items={ProductsRelatedDefaults.items} />

              <CategoryProposition item={CategoryPropositionDefaults.item} />
            </>
          }

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
