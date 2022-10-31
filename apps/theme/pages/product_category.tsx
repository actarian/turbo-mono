import { CategoryPropositionDefaults, ProductsCategoryHeroDefaults, ProductsSearchDefaults, ProductsSearchFeaturesDefaults } from '@websolute/mock';
import { IFeatureType } from '@websolute/models';
import { Breadcrumb, CategoryHero, CategoryProposition, Container, Footer, Header, Layout, Page, ProductSearchItem, ProductsSearch, Section, withPageTransition } from '@websolute/ui';
import Head from 'next/head';

const ProductCategory = ({ items = [], featureTypes = [] }) => {
  return (
    <>
      <Head>
        <title>ProductCategory</title>
        <meta name="description" content="ProductCategory description" />
        <link rel="icon" href="/assets/head/favicon.ico" />
      </Head>

      <Layout>
        <Page>
          <Header sticky />

          <CategoryHero item={ProductsCategoryHeroDefaults.item} />

          {false &&
            <Section borderBottom="1px solid var(--color-neutral-200)">
              <Container>
                <Breadcrumb>
                  <Breadcrumb.Item>Collections</Breadcrumb.Item>
                  <Breadcrumb.Item>Our tiles collections</Breadcrumb.Item>
                </Breadcrumb>
              </Container>
            </Section>
          }

          <ProductsSearch id="serp" padding="3rem 0" items={items} featureTypes={featureTypes}></ProductsSearch>

          {false &&
            <CategoryProposition item={CategoryPropositionDefaults.item} />
          }

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

/*
import { PageProps } from '@websolute/models';
export type ProductsCategoryProps = PageProps & {
  items: ProductSearchItem[];
  featureTypes: IFeatureType[];
}
*/

export type ProductsCategoryProps = {
  items: ProductSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(): Promise<{ props: ProductsCategoryProps }> {
  const props = {
    items: ProductsSearchDefaults.items,
    featureTypes: ProductsSearchFeaturesDefaults
  };
  return {
    props,
  };
}

export default withPageTransition(ProductCategory);
