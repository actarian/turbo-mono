import { ChevronLeft } from '@websolute/icons';
import { CategoryPropositionDefaults, ProductsDetailDefaults, ProductsRelatedDefaults } from '@websolute/mock';
import type { IMedia } from '@websolute/models';
import {
  Button, Card, CategoryProposition, Container, Flex, Footer, Header, Layout, LazyLoader, Media, MediaImage, NavLink, Page,
  ProductOverview, ProductsRelated, Section, ShopIncentive, Text
} from '@websolute/ui';
import Head from 'next/head';

export type ProductsDetailItem = {
  id: number;
  schema: string;
  href: string;
  title: string;
  abstract: string;
  price: number;
  date: string | Date;
  media: IMedia[];
  category: {
    href: string;
    title: string;
  };
  components: any[];
}

export default function ProductsDetail({ item }: ProductsDetailProps) {
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
                <NavLink href={item.category.href} passHref={true}>
                  <Button variant="nav" as="a" marginBottom="1rem">
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
              <Media className="media" aspectRatio={16 / 10}>
                {item.media[0].type === 'video' ?
                  (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src={item.media[0].src} type="video/mp4"></source>
                  </video>) :
                  (<MediaImage {...item.media[0]} alt={item.title} draggable={false} />)}
              </Media>

              <Card justifyContent="center" height="50vh" overflow="hidden">
                <Card.Background>
                  <Media className="media">
                    {item.media[0].type === 'video' ?
                      (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
                        <source src={item.media[0].src} type="video/mp4"></source>
                      </video>) :
                      (<MediaImage {...item.media[0]} alt={item.title} draggable={false} />)}
                  </Media>
                </Card.Background>
              </Card>

              <ProductOverview item={item} />

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
