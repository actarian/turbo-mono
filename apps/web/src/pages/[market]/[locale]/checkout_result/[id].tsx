
import { asServerProps, IContextParams } from '@websolute/core';
import { getLayout, getOrder, getPage, IOrder, IOrderStatus, IUser, PageProps } from '@websolute/models';
import { Breadcrumb, CheckoutError, CheckoutSuccess, Container, Footer, Header, Layout, Meta, Page, Section } from '@websolute/ui';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'src/config/session';


export default function CheckoutResult({ layout, page, user, order, params }: CheckoutResultProps) {

  // const mounted = useMounted();
  // deserialize queryString encoded params
  // const { params: searchParams } = useSearchParams();
  // const [order] = useApiGet<IOrder>(`/order/${params.id}`);

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        {false && (
          <Section>
            <Container.Fluid>
              <Breadcrumb.Group items={page.breadcrumb} />
            </Container.Fluid>
          </Section>
        )}

        {!order || order.status === IOrderStatus.AwaitingPayment ?
          <CheckoutError order={order} /> :
          <CheckoutSuccess order={order} />
        }

        <Footer />
      </Page>
    </Layout>
  );
}

export type CheckoutResultProps = PageProps & {
  user?: IUser;
  order?: IOrder;
};

export const getServerSideProps = withIronSessionSsr(async function (context) {

  const params = context.params as IContextParams;
  const query = context.query;

  // Layout
  const id = parseInt(params.id);
  const market = params.market;
  const locale = params.locale;
  const layout = await getLayout(market, locale);

  const user = context.req.session.user;
  const order = await getOrder(query.orderId as string, market, locale);

  if (order && order.status === IOrderStatus.Pending) {
    order.status = query.status === 'OK' ? IOrderStatus.AwaitingFulfillment : IOrderStatus.AwaitingPayment;
  }

  // Page
  const page = await getPage('checkout_result', id, market, locale);
  const props = asServerProps({ params, query, layout, page, user, order });

  return {
    props,
  };
}, sessionOptions);


/*
import { IStaticContext } from '@websolute/core';
import { getStaticPathsForSchema } from '@websolute/models';

export type CheckoutResultProps = PageProps & {
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
*/
