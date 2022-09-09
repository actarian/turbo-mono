import { asStaticProps, getErrorPageLayout, PageProps } from '@websolute/core';
import { Container, Header, Layout, Meta, Page, Section, Text } from '@websolute/ui';
import { GetStaticPropsContext } from 'next/types';

export default function Custom404({ layout, page, params }: PageProps) {
  // console.log('Custom404.params', page, params);
  return (
    <>
      <Layout>
        <Meta />
        <Page>

          <Header fixed />

          <Section>
            <Container>
              <Text size="1">{page.title}</Text>
              <Text size="2">{page.abstract}</Text>
            </Container>
          </Section>

        </Page>
      </Layout>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const { layout, page } = await getErrorPageLayout();
  // console.log('Custom404 getStaticProps', props);
  const props = asStaticProps({ ...context, layout, page });
  return {
    props,
  };
}
