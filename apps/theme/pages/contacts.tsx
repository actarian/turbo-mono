import {
  Accordion, BlogMore, BlogMoreDefaults, BlogProposition, ContactCard, ContactCardItem, ContactForm, ContactHero,
  ContactHeroDefaults, Container, Divider, Flex, Footer, Grid, Header, Layout, Media, Page, Section, Split, SplitDefaults,
  Tabs, Text
} from '@websolute/ui';
import Head from 'next/head';

export default function Contact() {

  const items: ContactCardItem[] = [{
    id: 1,
    name: 'Hexagon Headquarters',
    address: 'Via Manzoni 20<br>20821 Meda (MB)<br>Italy',
    phoneNumber: '+39.0362.75275',
    faxNumber: '+39.0362.75575',
    contactEmail: 'info@hexagon.eu',
    pressEmail: 'marketing@hexagon.eu',
    evidence: true,
  }, {
    id: 2,
    name: 'Hexagon Showroom',
    address: 'Viale Brianza 54<br>20823 Lentate Sul Seveso (MB)<br>Italy',
    phoneNumber: '+39.0362.563001',
    note: 'Only by appointment',
  }, {
    id: 3,
    name: 'Hexagon S.r.l.',
    address: 'via Turati 16<br>20826 Misinto (MB)<br>Italy',
    phoneNumber: '+39.02.96328971',
    faxNumber: '+39.02.96328544',
    contactEmail: 'hexagon.pec@legalmail.it',
  }, {
    id: 4,
    name: 'Hexagon United Kingdom Limited',
    address: 'Fulham Road 54-58<br>London<br>SW3 6HH England',
    phoneNumber: '+44.20.7581.0022',
    faxNumber: '+44.7714.675590',
    contactEmail: 'info@hexagonuk.com',
  }, {
    id: 5,
    name: 'Hexagon GmbH Deutschland',
    address: 'Köln Kaiser-Wilhelm-Ring 30-32<br>50672 Germany',
    phoneNumber: '+49.0.22112071851',
    faxNumber: '+49.0.22112071852',
    contactEmail: 'info@hexagon.de',
  }, {
    id: 6,
    name: 'Hexagon Asia PTE LTD',
    address: '7 Temasek Boulevard<br>Level 32 Suntec Tower One<br>038987 Singapore',
    phoneNumber: '+65.6678.6567',
  }, {
    id: 7,
    name: 'Hexagon Middle East I FZ-LLC',
    address: 'D3 Building 3 Floor 3<br>Dubai Design District',
  }, {
    id: 8,
    name: 'Hexagon USA INC The Centrale',
    address: 'Madison Avenue Unit 1030<br>I 261 New York<br>USA',
    phoneNumber: '+1.212.889.3261',
    contactEmail: 'info@hexagonusa.com',
  }];

  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Contacts description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

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
              <ContactForm />
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

          <BlogProposition />

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
