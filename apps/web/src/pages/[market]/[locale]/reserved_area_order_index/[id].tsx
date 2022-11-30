
import { asServerProps, deserializeValue, IContextParams } from '@websolute/core';
import { getLayout, getOrders, getPage, IOrderDetail, IUser, PageProps } from '@websolute/models';
import { Flex, Footer, Header, Layout, Meta, OrderItem, Page, ReservedArea, Text } from '@websolute/ui';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'src/config/session';

export default function ReservedAreaOrderIndex({ layout, page, user, orders, params }: ReservedAreaProps) {

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <ReservedArea layout={layout} page={page}>
          <Flex.Col gap="1rem">
            <Text size="6" fontWeight="700">{page.title}</Text>
            {orders.length > 0 && (
              <Flex.Col gap="1rem">
                {orders.map((order, i) => (
                  <OrderItem key={i} item={order} />
                ))}
              </Flex.Col>
            )}
          </Flex.Col>
        </ReservedArea>

        <Footer />
      </Page>
    </Layout>
  );
}

export type ReservedAreaProps = PageProps & {
  user: IUser;
  orders: IOrderDetail[];
};

export const getServerSideProps = withIronSessionSsr(async function (context) {
  const params = context.params as IContextParams;
  const query = context.query;

  // Layout
  const id = deserializeValue(params.id);
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
    };
  }
  const orders = await getOrders(market, locale);

  // Page
  const page = await getPage('reserved_area', id, market, locale);

  const props = asServerProps({ params, query, layout, page, user, orders });
  return {
    props,
  };
}, sessionOptions);
