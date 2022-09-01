import Head from 'next/head';
import { Button, Container, Header, Layout, Page, Proposition } from 'ui';

export default function Index() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header fixed />

          <Container>
            <Button variant='primary'>Button</Button>
          </Container>

          <Proposition />

        </Page>
      </Layout>
    </>
  )
}
