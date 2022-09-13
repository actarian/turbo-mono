
import ContactForm, { IContactForm } from '@components/contact-form/contact-form';
import { asStaticProps, getCountries, getLayout, getListByKeys, getPage, getProvinces, getRegions, getStaticPathsForSchema, PageProps } from '@websolute/core';
import { BlogMoreDefaults, BlogPropositionDefaults, ContactDefaults, ContactHeroDefaults, SplitDefaults } from '@websolute/mock';
import {
  Accordion, BlogMore, BlogProposition, ContactCard, ContactCardItem, ContactHero,
  Container, Divider, Flex, Footer, Grid, Header, Layout, Media, Page, Section, Split,
  Tabs, Text
} from '@websolute/ui';

import { GetStaticPropsContext } from 'next/types';
import { useState } from 'react';

export default function Contact({ layout, page, data, params }: ContactProps) {

  const items: ContactCardItem[] = ContactDefaults;

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (value: any) => {
    setSubmitted(true);
  }

  return (
    <>
      <Layout>
        <Page>

          <Header sticky menu={layout.tree ? layout.tree.items : []} />

          <ContactHero item={ContactHeroDefaults.item} />

          <Section>
            <Container>
              <Grid.Row columnGap="1rem" rowGap="1rem">
                {items.map((item, i) => (
                  <Grid key={i} sm={6} md={4} lg={3}>
                    <ContactCard item={item} height="100%" />
                  </Grid>
                ))}
              </Grid.Row>
            </Container>
          </Section>

          <Section id="contact-request">
            <Container>
              <Divider marginBottom="4rem">Contact Request</Divider>
              <ContactForm data={data} onSubmit={onSubmit}></ContactForm>
            </Container>
          </Section>

          <Section>
            <Container>
              <Divider marginBottom="4rem">Tabs</Divider>
              <Tabs initialValue="1">
                <Tabs.Item label="Marketing" value="1">

                  <Grid.Row padding="4rem 0">
                    <Grid md={4}>
                      <Text size="2" fontWeight="700" marginBottom="1rem">Marketing.</Text>
                    </Grid>
                    <Grid md={8}>
                      <Text size="8" maxWidth="60ch">Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.</Text>
                      <Flex.Row marginTop="1rem">
                        <Media width="3rem" height="3rem" circle>
                          <img src="https://i.pravatar.cc/128?u=1" />
                        </Media>
                        <Text size="8" fontWeight="700">Tim Neutkens</Text>
                      </Flex.Row>
                    </Grid>
                  </Grid.Row>

                </Tabs.Item>
                <Tabs.Item label="Ecommerce" value="2">

                  <Grid.Row padding="4rem 0">
                    <Grid md={4}>
                      <Text size="2" fontWeight="700" marginBottom="1rem">Ecommerce.</Text>
                    </Grid>
                    <Grid md={8}>
                      <Text size="8" maxWidth="60ch">Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end.</Text>
                      <Flex.Row marginTop="1rem">
                        <Media width="3rem" height="3rem" circle>
                          <img src="https://i.pravatar.cc/128?u=5" />
                        </Media>
                        <Text size="8" fontWeight="700">JJ Kasper</Text>
                      </Flex.Row>
                    </Grid>
                  </Grid.Row>

                </Tabs.Item>
              </Tabs>
            </Container>
          </Section>

          <Section>
            <Container>
              <Divider marginBottom="4rem">Accordion</Divider>
              <Accordion.Group>
                <Accordion title="Question A">
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </Accordion>
                <Accordion title="Question B">
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </Accordion>
              </Accordion.Group>
            </Container>
          </Section>

          <Split item={SplitDefaults.item} />

          <BlogProposition item={BlogPropositionDefaults.item} />

          <BlogMore items={BlogMoreDefaults.items} />

          <Section aspectRatio={4 / 3} aspectRatioSm={2 / 1} aspectRatioMd={3 / 1} aspectRatioLg={4 / 1}>
            <Section.Background>
              <Media overlay>
                <img draggable={false} src='https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600' />
              </Media>
            </Section.Background>
            <Container textAlign='center'>
              <Text size="1" fontWeight="700">Workbench.</Text>
            </Container>
          </Section>

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export interface ContactProps extends PageProps {
  data: IContactForm;
}

export async function getStaticProps(context: GetStaticPropsContext<any>) {
  const id = parseInt(context.params.id);
  const market = context.params.market;
  const locale = context.params.locale;
  const layout = await getLayout(market, locale);
  const page = await getPage('contact', id, market, locale);
  const lists = await getListByKeys(['magazines', 'occupations'], locale);
  const countries = await getCountries(locale);
  const provinces = await getProvinces(locale);
  const regions = await getRegions(locale);
  const data = { ...lists, countries, regions, provinces };
  const props = asStaticProps({ ...context, layout, page, data });
  // console.log('About getStaticProps', props);
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await getStaticPathsForSchema('contact');
  return {
    paths,
    fallback: true,
  };
}
