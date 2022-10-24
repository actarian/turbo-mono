
import type { IStaticContext } from '@websolute/core';
import { asServerProps } from '@websolute/core';
import { useMounted, useSearchParams } from '@websolute/hooks';
import type { PageProps } from '@websolute/models';
import { getLayout, getPage, getStaticPathsForSchema } from '@websolute/models';
import { Breadcrumb, CheckoutError, CheckoutSuccess, Container, Footer, Header, Layout, Meta, Page, Section } from '@websolute/ui';

export default function CheckoutResult({ layout, page, params }: CheckoutResultProps) {

  const mounted = useMounted();

  // deserialize queryString encoded params
  const { params: searchParams } = useSearchParams();
  console.log(searchParams);

  // const storage = typeof window !== 'undefined' ? window.localStorage : undefined;

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <Section>
          <Container.Fluid>
            <Breadcrumb.Group items={page.breadcrumb} />
          </Container.Fluid>
        </Section>

        {mounted && (
          searchParams.status === 'OK' ?
            <CheckoutSuccess /> :
            <CheckoutError />
        )}

        <Footer />
      </Page>
    </Layout>
  )
}

export interface CheckoutResultProps extends PageProps {
}

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('checkout_result', id, market, locale);
  const props = asServerProps({ ...context, layout, page });
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('checkout_result');
  return {
    paths,
    fallback: true,
  };
}
