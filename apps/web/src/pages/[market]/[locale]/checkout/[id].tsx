
import { asStaticProps, IContextParams } from '@websolute/core';
import { CheckoutProvider } from '@websolute/hooks';
import type { IUser, PageProps } from '@websolute/models';
import { getLayout, getPage } from '@websolute/models';
import { StoreStrategy, storeStrategy } from '@websolute/store';
import { Breadcrumb, CheckoutWizard, Container, Footer, Header, Layout, Meta, Page, Section } from '@websolute/ui';
import { ICheckout } from '@websolute/ui/src/sections/checkout/checkout-wizard';
import { promises as fs } from 'fs';
import { withIronSessionSsr } from 'iron-session/next';
import { useRouter } from 'next/router';
import path from 'path';
import { IronSessionStorage, sessionOptions } from 'src/config/session';

export default function Checkout({ layout, page, user, params }: CheckoutProps) {
  const router = useRouter();

  // const setUser = useUser((state) => state.setUser);

  const onCheckout = (checkout: ICheckout) => {
    console.log('Checkout.onCheckout', checkout);
  }

  return (
    <CheckoutProvider storage={IronSessionStorage}>
      <Layout>
        <Meta />
        <Page>
          <Header sticky />

          <Section>
            <Container.Fluid>
              <Breadcrumb.Group items={page.breadcrumb} />
            </Container.Fluid>
          </Section>

          <CheckoutWizard onCheckout={onCheckout} />

          <Footer />
        </Page>
      </Layout>
    </CheckoutProvider>
  )
}

export interface CheckoutProps extends PageProps {
  user?: IUser;
}

export const getServerSideProps = withIronSessionSsr(async function (context) {
  // !!! hack for vercel lambdas
  if (storeStrategy === StoreStrategy.Mock) {
    const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
    const data = await fs.readFile(pathname, 'utf8');
  }

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

  const props = asStaticProps({ params, query, layout, page, user });
  // console.log('ProductSearchSSR getStaticProps', props);
  return {
    props,
  };
}, sessionOptions);
