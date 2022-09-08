import {
  Breadcrumb, CategoryHero, CategoryProposition, CategoryPropositionDefaults, Container, Footer, Header, Layout, Page,
  ProductsIncentive, ProductsRelatedProps, ProductsSearch, Section
} from '@websolute/ui';
import Head from 'next/head';

export default function Category({ items }: ProductsRelatedProps) {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Category description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

          {false &&
            <Section borderBottom="1px solid var(--color-neutral-200)">
              <Container>
                <Breadcrumb>
                  <Breadcrumb.Item href="/products">Shop</Breadcrumb.Item>
                  <Breadcrumb.Item>New Arrivals</Breadcrumb.Item>
                </Breadcrumb>
              </Container>
            </Section>
          }

          <CategoryHero />

          <ProductsSearch id="serp" padding="3rem 0" items={items}></ProductsSearch>

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <ProductsIncentive />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

Category.defaultProps = {
  items: [{
    id: 1,
    href: '/product',
    title: 'Earthen Bottle',
    abstract: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    price: 48,
    media: {
      type: 'image',
      src: '/product-list-01.jpg',
    },
  }, {
    id: 2,
    href: '/product',
    title: 'Nomad Tumbler',
    abstract: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    price: 35,
    media: {
      type: 'image',
      src: '/product-list-02.jpg',
    },
  }, {
    id: 3,
    href: '/product',
    title: 'Focus Paper Refill',
    abstract: 'Person using a pen to cross a task off a productivity paper card.',
    price: 89,
    media: {
      type: 'image',
      src: '/product-list-03.jpg',
    },
  }, {
    id: 4,
    href: '/product',
    title: 'Machined Mechanical Pencil',
    abstract: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    price: 35,
    media: {
      type: 'image',
      src: '/product-list-04.jpg',
    }
  }, {
    id: 5,
    href: '/product',
    title: 'Focus Card Tray',
    abstract: 'Paper card sitting upright in walnut card holder on desk.',
    price: 64,
    media: {
      type: 'image',
      src: '/product-list-05.jpg',
    }
  }, {
    id: 6,
    href: '/product',
    title: 'Focus Multi-Pack',
    abstract: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    price: 39,
    media: {
      type: 'image',
      src: '/product-list-06.jpg',
    }
  }, {
    id: 7,
    href: '/product',
    title: 'Brass Scissors',
    abstract: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    price: 50,
    media: {
      type: 'image',
      src: '/product-list-07.jpg',
    }
  }, {
    id: 8,
    href: '/product',
    title: 'Focus Carry Pouch',
    abstract: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    price: 32,
    media: {
      type: 'image',
      src: '/product-list-08.jpg',
    }
  }]
};
