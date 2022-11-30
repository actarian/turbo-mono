
import { asServerProps, deserializeValue, IStaticContext } from '@websolute/core';
import { getLayout, getPage, getStaticPathsForSchema, IUser, PageProps } from '@websolute/models';
import { Auth, Container, Footer, Header, Layout, Meta, Page, Section } from '@websolute/ui';
import { useRouter } from 'next/router';

export default function Login({ layout, page, params }: PageProps) {
  const router = useRouter();

  const onSignedIn = (user: IUser) => {
    if (user) {
      router.push(layout.topLevelHrefs.reserved_area || '/');
    }
  };

  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <Section>
          <Container>
            <Auth onSignedIn={onSignedIn} />
          </Container>
        </Section>

        <Footer />
      </Page>
    </Layout>
  );
}

export async function getStaticProps(context: IStaticContext) {
  const id = deserializeValue(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('login', id, market, locale);
  const props = asServerProps({ ...context, layout, page });
  return {
    props,
    /*
    * Next.js will attempt to re-generate the page when a request comes in at most once every 60 seconds
    */
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('login');
  return {
    paths,
    /*
    * getStaticProps runs in the background when using fallback: true
    * getStaticProps is called before initial render when using fallback: blocking
    */
    fallback: 'blocking',
  };
}
