
import { asStaticProps, IContextParams } from '@websolute/core';
import { CheckoutProvider, useCart } from '@websolute/hooks';
import type { IUser, PageProps } from '@websolute/models';
import { getLayout, getPage } from '@websolute/models';
import { StoreStrategy, storeStrategy } from '@websolute/store';
import {
  Breadcrumb, Button, CheckoutWizard, Container, Flex, Footer, Header, Layout, Meta, NavLink, Page, Section, Text
} from '@websolute/ui';
import { ICheckout } from '@websolute/ui/src/sections/checkout/checkout-wizard';
import { promises as fs } from 'fs';
import { withIronSessionSsr } from 'iron-session/next';
import path from 'path';
import { IronSessionStorage, sessionOptions } from 'src/config/session';

export default function Checkout({ layout, page, user, params }: CheckoutProps) {

  const items = useCart((state) => state.items);

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

          {items.length ?
            <CheckoutWizard onCheckout={onCheckout} /> :
            <Section>
              <Container minHeight="50vh">
                <Flex.Col gap="1rem" alignItems="center" textAlign="center">
                  <Text size="4" fontWeight="700">Your cart is empty.</Text>
                  <Text size="8" marginBottom="1rem" maxWidth="80ch">All’interno di Hexagon Shop è possibile acquistare i campioni delle collezioni Tiles, 3D Elements e Paints, complementi d’arredo in materiali inediti, elementi decorativi esclusivi e oggettistica legata all’universo del brand.</Text>
                  <NavLink href={layout.topLevelHrefs.shop_index || ''} passHref>
                    <Button as="a" variant="primary">Continue shopping</Button>
                  </NavLink>
                </Flex.Col>
              </Container>
            </Section>
          }

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
