
import { asServerProps, IContextParams } from '@websolute/core';
import { useLabel } from '@websolute/hooks';
import { getLayout, getOrder, getPage, IOrderDetail, IUser, PageProps } from '@websolute/models';
import { Badge, Box, Button, Flex, Footer, Grid, Header, Layout, Meta, OrderAddress, OrderSummary, Page, ReservedArea, Text } from '@websolute/ui';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'src/config/session';

export default function ReservedAreaOrderDetail({ layout, page, user, order, params }: ReservedAreaProps) {

  const label = useLabel();

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <ReservedArea layout={layout} page={page}>

          <Box position="sticky" top="80px" padding="1rem 0" zIndex="800" background="var(--color-neutral-100)" borderBottom="1px solid var(--color-neutral-300)">
            <Flex.Row justifyContent="space-between">
              <Text size="8" fontWeight="700">Order #{order.id} <Badge>{label(`order.status.${order.status}`)}</Badge></Text>
              <Button variant="primary">Print</Button>
            </Flex.Row>
          </Box>

          <Grid.Row padding="2em 0">
            <Grid md={6}>
              {order.shippingAddress && (
                <OrderAddress item={order.shippingAddress} title={'Shipping address'} />
              )}
            </Grid>
            <Grid md={6}>
              {order.billingAddress && (
                <OrderAddress item={order.billingAddress} title={'Billing address'} />
              )}
            </Grid>
          </Grid.Row>

          {order && (<OrderSummary order={order} />)}

        </ReservedArea>

        <Footer />
      </Page>
    </Layout>
  )
}

export type ReservedAreaProps = PageProps & {
  user: IUser;
  order: IOrderDetail;
}

export const getServerSideProps = withIronSessionSsr(async function (context) {
  const params = context.params as IContextParams;
  const query = context.query;

  // Layout
  const id = parseInt(params.id);
  const market = params.market;
  const locale = params.locale;
  const layout = await getLayout(market, locale);

  // console.log('topLevelHrefs', layout.topLevelHrefs);

  const user = context.req.session.user;
  if (user === undefined) {
    /*
    res.setHeader('location', '/');
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: undefined,
      },
    }
    */
    return {
      redirect: {
        permanent: false,
        destination: layout.topLevelHrefs.login || '/',
      },
    }
  }
  const order = await getOrder(query.orderId as string, market, locale);

  // Page
  const page = await getPage('reserved_area', id, market, locale);

  const props = asServerProps({ params, query, layout, page, user, order });
  return {
    props,
  };
}, sessionOptions);
