
import { sessionOptions } from '@config/session';
import { asStaticProps, httpGet, IContextParams } from '@websolute/core';
import { getLayout, getPage, PageProps } from '@websolute/models';
import { Box, Button, Container, Flex, Footer, Header, Layout, Meta, NavLink, Page, Section, Text } from '@websolute/ui';
import { withIronSessionSsr } from 'iron-session/next';
import { useRouter } from 'next/router';

export default function ReservedArea({ layout, page, user, params }: ReservedAreaProps) {
  const router = useRouter();

  const onLogout = async () => {
    try {
      await httpGet('/api/auth/logout');
      /*
      mutateUser(
        await fetchJson('/api/logout', { method: 'POST' }),
        false
      )
      */
      router.push('/');

    } catch (error) {
      console.error('An unexpected error happened:', error);
    }
  };

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky menu={layout.tree ? layout.tree.items : []} />

        <Section>
          <Container>
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
                  <Flex.Responsive>
                    <NavLink href="/">
                      <Button variant="primary" onClick={() => onLogout()}><span>Logout</span></Button>
                    </NavLink>
                  </Flex.Responsive>
                </Box>
              </Flex.Row>
            </Flex.Col>
          </Container>
        </Section>


        <Footer />
      </Page>
    </Layout>
  )
}

export interface ReservedAreaProps extends PageProps {
  user: { name: string };
}

export const getServerSideProps = withIronSessionSsr(async function (context) {
  const params = context.params as IContextParams;
  const query = context.query;
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
        destination: '/',
      },
    }
  }

  // Layout
  const id = parseInt(params.id);
  const market = params.market;
  const locale = params.locale;
  const layout = await getLayout(market, locale);

  // Page
  const page = await getPage('reserved_area', id, market, locale);

  const props = asStaticProps({ params, query, layout, page, user });
  // console.log('ProductSearchSSR getStaticProps', props);
  return {
    props,
  };
}, sessionOptions);

/*
export async function getServerSideProps(context: IServerSideContext): Promise<GetServerSidePropsResult<ReservedAreaProps>> {
  const params = context.params;
  const query = context.query;

  // Layout
  const id = parseInt(params.id);
  const market = params.market;
  const locale = params.locale;
  const layout = await getLayout(market, locale);

  // Page
  const page = await getPage('reserved_area', id, market, locale);

  const user = {
    name: 'Pippo'
  };

  const props = asStaticProps({ params, query, layout, page, user });
  // console.log('ProductSearchSSR getStaticProps', props);
  return {
    props,
  };
}
*/

/*
export async function getStaticProps(context: IStaticContext) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('reserved_area', id, market, locale);
  const user = {
    name: 'Pippo'
  };
  const props = asStaticProps({ ...context, layout, page, user });
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
