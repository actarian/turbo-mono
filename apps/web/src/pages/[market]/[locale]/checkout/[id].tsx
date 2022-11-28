
import { asServerProps, IStaticContext } from '@websolute/core';
import { CheckoutProvider, useCart, useMounted } from '@websolute/hooks';
import { getCountries, getLayout, getListByKeys, getPage, getProvinces, getRegions, getStaticPathsForSchema, IAddressOptions, ICheckoutPartial, PageProps } from '@websolute/models';
import { Breadcrumb, CheckoutEmpty, CheckoutWizard, Container, Footer, Header, Layout, Meta, Page, Section } from '@websolute/ui';

export default function Checkout({ layout, page, data, params }: CheckoutProps) {

  const mounted = useMounted();

  const items = useCart((state) => state.items);

  const onCheckout = (checkout: ICheckoutPartial) => {
    console.log('Checkout.onCheckout', checkout);
  };

  // const storage = typeof window !== 'undefined' ? window.localStorage : undefined;

  return (
    <CheckoutProvider data={data}>
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
            items.length > 0 ?
              <CheckoutWizard onCheckout={onCheckout} /> :
              <CheckoutEmpty />
          )}

          <Footer />
        </Page>
      </Layout>
    </CheckoutProvider>
  );
}

export type CheckoutProps = PageProps & {
  data: IAddressOptions;
};

export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('checkout', id, market, locale);
  const lists = await getListByKeys(['occupations'], locale);
  const countries = await getCountries(locale);
  const provinces = await getProvinces(locale);
  const regions = await getRegions(locale);
  const data = { ...lists, countries, regions, provinces };
  const props = asServerProps({ ...context, layout, page, data });
  return {
    props,
    /*
    * Next.js will attempt to re-generate the page when a request comes in at most once every 60 seconds
    */
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('checkout');
  return {
    paths,
    /*
    * getStaticProps runs in the background when using fallback: true
    * getStaticProps is called before initial render when using fallback: blocking
    */
    fallback: 'blocking',
  };
}

/*

export type CheckoutProps = PageProps & {
  user?: IUser;
}

import { promises as fs } from 'fs';
import { withIronSessionSsr } from 'iron-session/next';
import path from 'path';
import { sessionOptions } from 'src/config/session';

export const getServerSideProps = withIronSessionSsr(async function (context) {

  const params = context.params as IContextParams;
  const query = context.query;

  // Layout
  const id = parseInt(params.id);
  const market = params.market;
  const locale = params.locale;
  const layout = await getLayout(market, locale);

  // Page
  const page = await getPage('checkout', id, market, locale);

  const user = context.req.session.user;

  const props = asServerProps({ params, query, layout, page, user });
  // console.log('ProductSearchSSR getStaticProps', props);
  return {
    props,
  };
}, sessionOptions);

*/
