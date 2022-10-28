import { asServerProps, IStaticContext } from '@websolute/core';
import { Send } from '@websolute/icons';
import { getErrorPageLayout, PageProps } from '@websolute/models';
import { Box, Button, Container, Flex, Footer, Header, Layout, Meta, NavLink, Page, Section, Text } from '@websolute/ui';

export default function Error404({ layout, page, params }: PageProps) {
  // console.log('Error404.params', page, params);
  return (
    <Layout>
      <Meta />
      <Page>
        <Header sticky />

        <Section>
          <Container>
            <Flex.Col minHeight="60vh" justifyContent="center" alignItems="center">
              <Flex.Row alignItems="flex-start">
                <Box padding="0 1rem" borderRight="1px solid var(--color-neutral-300)">
                  <Text size="3" fontWeight="700" marginBottom="0.5rem" color="var(--color-primary-500)">404</Text>
                </Box>
                <Box padding="0 1rem">
                  <Text size="3" fontWeight="700" marginBottom="0.5rem">{page.title}</Text>
                  <Text color="var(--color-neutral-500)" marginBottom="2rem">{page.abstract}</Text>
                  <Flex.Responsive>
                    <NavLink href="/">
                      <Button variant="primary"><span>Go back home</span></Button>
                    </NavLink>
                    <NavLink href="/ww/en/contact-us">
                      <Button variant="secondary"><span>Contact Support</span> <Send /></Button>
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

export async function getStaticProps(context: IStaticContext) {
  const { layout, page } = await getErrorPageLayout();
  // console.log('Error404 getStaticProps', props);
  const props = asServerProps({ ...context, layout, page });
  return {
    props,
  };
}
