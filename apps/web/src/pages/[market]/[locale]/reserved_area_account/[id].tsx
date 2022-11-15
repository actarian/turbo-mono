
import { asServerProps, IContextParams } from '@websolute/core';
import { getLayout, getPage, IUser, PageProps } from '@websolute/models';
import { AuthChangePassword, AuthUpdate, Button, Flex, Footer, Header, Layout, Meta, Page, ReservedArea, Text } from '@websolute/ui';
import { withIronSessionSsr } from 'iron-session/next';
import { useState } from 'react';
import { sessionOptions } from 'src/config/session';

export default function ReservedAreaAccount({ layout, page, user: initialUser, params }: ReservedAreaProps) {

  const [view, setView] = useState('view');

  const [user, setUser] = useState<IUser>(initialUser);

  const onEdit = () => {
    setView('edit');
  }

  const onUpdate = (user: IUser) => {
    setUser(user);
    setView('view');
  }

  const onChangePassword = () => {
    setView('change-password');
  }

  const onPasswordChanged = () => {
    setView('view');
  }

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <ReservedArea layout={layout} page={page}>
          <Flex.Col gap="1rem" maxWidth="60ch" alignItems="flex-start">
            <Text size="6" fontWeight="700">{page.title}</Text>

            {view === 'view' && (
              <>
                <Flex.Col gap="1rem">
                  <Flex.Col>
                    <Text fontWeight="700">{user.firstName} {user.lastName}</Text>
                    <Text>{user.email}</Text>
                  </Flex.Col>
                </Flex.Col>
                <Flex.Row>
                  <Button variant="underline" size="sm" onClick={onEdit}>Edit</Button>
                  <Button variant="underline" size="sm" onClick={onChangePassword}>Change password</Button>
                </Flex.Row>
              </>
            )}

            {view === 'edit' && (
              <AuthUpdate user={user} onUpdate={onUpdate} />
            )}

            {view === 'change-password' && (
              <AuthChangePassword onPasswordChanged={onPasswordChanged} />
            )}

          </Flex.Col>
        </ReservedArea>

        <Footer />
      </Page>
    </Layout>
  )
}

export type ReservedAreaProps = PageProps & {
  user: IUser;
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

  // Page
  const page = await getPage('reserved_area', id, market, locale);

  const props = asServerProps({ params, query, layout, page, user });
  return {
    props,
  };
}, sessionOptions);
