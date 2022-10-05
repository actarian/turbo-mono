import { CategoryPropositionDefaults, ProductsCategoryHeroDefaults, ProductsSearchDefaults, ProductsSearchFeaturesDefaults } from '@websolute/mock';
import type { IFeatureType } from '@websolute/models';
import type { ProductSearchItem } from '@websolute/ui';
import {
  Breadcrumb, CategoryHero, CategoryProposition, Container, Footer, Header, Layout, Page,
  ProductsSearch, Section, withPageTransition
} from '@websolute/ui';
import Head from 'next/head';

const ProductsCategory = ({ items = [], featureTypes = [] }) => {
  return (
    <>
      <Head>
        <title>ProductsCategory</title>
        <meta name="description" content="ProductsCategory description" />
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
import type { PageProps } from '@websolute/models';
export interface ProductsSearchProps extends PageProps {
  items: ProductSearchItem[];
  featureTypes: IFeatureType[];
}
*/

export type ProductsSearchProps = {
  items: ProductSearchItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(): Promise<{ props: ProductsSearchProps }> {
  const props = {
    items: ProductsSearchDefaults.items,
    featureTypes: ProductsSearchFeaturesDefaults
  };
  return {
    props,
  };
}

export default withPageTransition(ProductsCategory);
