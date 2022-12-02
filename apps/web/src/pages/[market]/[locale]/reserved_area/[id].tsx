import { asServerProps, deserializeValue, httpGet, IContextParams } from '@websolute/core';
import { useUser } from '@websolute/hooks';
import { LogOut } from '@websolute/icons';
import { getLayout, getPage, IUser, PageProps } from '@websolute/models';
import { StoreStrategy, storeStrategy } from '@websolute/store';
import { Box, Button, Flex, Footer, Header, Layout, Meta, Page, ReservedArea, Text } from '@websolute/ui';
import { promises as fs } from 'fs';
import { withIronSessionSsr } from 'iron-session/next';
import { useRouter } from 'next/router';
import path from 'path';
import { sessionOptions } from 'src/config/session';

export default function ReservedAreaPage({ layout, page, user, params }: ReservedAreaProps) {

  const router = useRouter();

  const { setUser } = useUser((state) => state.actions);

  const onLogout = async () => {
    try {
      await httpGet('/api/auth/logout');
      setUser();
      router.push('/');

    } catch (error) {
      console.error('An unexpected error happened:', error);
    }
  };

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <ReservedArea layout={layout} page={page}>
          <Flex.Col gap="1rem" maxWidth="60ch">
            <Text size="6" fontWeight="700">{page.title}</Text>
            <Text size="7">Hi {user.firstName} {user.lastName}</Text>
            <Flex.Row>
              <Text size="8" lineHeight="2">Aren't you {user.firstName} {user.lastName}?</Text>
              <Button variant="nav" as="a" onClick={() => onLogout()}>
                <LogOut />
                <span>Logout</span>
              </Button>
            </Flex.Row>
            <Text size="8" lineHeight="2">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and change your password and account details.</Text>
          </Flex.Col>
          {false && (
            <Flex.Col minHeight="60vh" justifyContent="center" alignItems="center">
              <Flex.Row alignItems="flex-start">
                <Box padding="0 1rem" borderRight="1px solid var(--color-neutral-300)">
                  <Text size="3" fontWeight="700" marginBottom="0.5rem" color="var(--color-primary-500)">OK</Text>
                </Box>
                <Box padding="0 1rem">
                  <Text size="3" fontWeight="700" marginBottom="0.5rem">{page.title}</Text>
                  <Text color="var(--color-neutral-500)" marginBottom="2rem">
                    <ul>{
                      Object.entries(user).map(([key, value]) => (
                        <li key={key}><b>{key}</b> {value}</li>
                      ))}
                    </ul>
                  </Text>
                </Box>
              </Flex.Row>
            </Flex.Col>
          )}
        </ReservedArea>

        <Footer />
      </Page>
    </Layout>
  );
}

export type ReservedAreaProps = PageProps & {
  user: IUser;
};

export const getServerSideProps = withIronSessionSsr(async function (context) {
  // !!! hack for vercel lambdas (put it in one page only)
  if (storeStrategy === StoreStrategy.Mock) {
    const pathname = path.join(process.cwd(), '.mock', 'store', 'store.json');
    const data = await fs.readFile(pathname, 'utf8');
  }

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

  // Page
  const page = await getPage('reserved_area', id, market, locale);

  const props = asServerProps({ params, query, layout, page, user });
  return {
    props,
  };
}, sessionOptions);

/*
export async function getServerSideProps(context: IServerSideContext): Promise<GetServerSidePropsResult<ReservedAreaProps>> {
  const params = context.params;
  const query = context.query;

  // Layout
  const id = deserializeValue(params.id);
  const market = params.market;
  const locale = params.locale;
  const layout = await getLayout(market, locale);

  // Page
  const page = await getPage('reserved_area', id, market, locale);

  const user = {
    name: 'Pippo'
  };

  const props = asServerProps({ params, query, layout, page, user });
  // console.log('ProductSearchSSR getStaticProps', props);
  return {
    props,
  };
}
*/

/*
export async function getStaticProps(context: IStaticContext) {
  const id = deserializeValue(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('reserved_area', id, market, locale);
  const user = {
    name: 'Pippo'
  };
  const props = asServerProps({ ...context, layout, page, user });
  // console.log('About getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('reserved_area');
  return {
    paths,
    fallback: true,
  };
}
*/
