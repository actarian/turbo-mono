import { Facebook, Github, Hexagon, Instagram, Linkedin, Twitter, Websolute } from '@websolute/icons';
import Link from 'next/link';
import { Button, Container, Flex, Grid, Nav, Text } from '../../components';
import { ComponentProps } from '../../components/types';

import styled from 'styled-components';

type Props = {
}

export type FooterProps = ComponentProps<Props, HTMLDivElement>;

const FooterContainer = styled.div<FooterProps>`
  padding: 6rem 0 4rem 0;
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);
`;

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <FooterContainer {...props}>
      <Container.Fluid>
        <Grid.Row>
          <Grid sm={12} md={4}>
            <Hexagon width="40px" height="40px" color="var(--color-neutral-100)" />
            <Text size="7" marginTop="0.7rem">Making the world a better place through constructing elegant hierarchies.</Text>
            <Flex.Row margin="1.5rem 0 3rem 0" gap="1.5rem">
              <Link href="#facebook"><Button as="a"><Facebook /></Button></Link>
              <Link href="#instagram"><Button as="a"><Instagram /></Button></Link>
              <Link href="#twitter"><Button as="a"><Twitter /></Button></Link>
              <Link href="#linkedin"><Button as="a"><Linkedin /></Button></Link>
              <Link href="#github"><Button as="a"><Github /></Button></Link>
            </Flex.Row>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Solutions</Text>
              <Link href="#marketing"><Button variant="nav" as="a">Marketing</Button></Link>
              <Link href="#analytics"><Button variant="nav" as="a">Analytics</Button></Link>
              <Link href="#commerce"><Button variant="nav" as="a">Commerce</Button></Link>
              <Link href="#insights"><Button variant="nav" as="a">Insights</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Support</Text>
              <Link href="#pricing"><Button variant="nav" as="a">Pricing</Button></Link>
              <Link href="#documentation"><Button variant="nav" as="a">Documentation</Button></Link>
              <Link href="#guides"><Button variant="nav" as="a">Guides</Button></Link>
              <Link href="#api-status"><Button variant="nav" as="a">API Status</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Company</Text>
              <Link href="#about"><Button variant="nav" as="a">About</Button></Link>
              <Link href="#blog"><Button variant="nav" as="a">Blog</Button></Link>
              <Link href="#jobs"><Button variant="nav" as="a">Jobs</Button></Link>
              <Link href="#press"><Button variant="nav" as="a">Press</Button></Link>
              <Link href="#partners"><Button variant="nav" as="a">Partners</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Legal</Text>
              <Link href="#claim"><Button variant="nav" as="a">Claim</Button></Link>
              <Link href="#privacy"><Button variant="nav" as="a">Privacy</Button></Link>
              <Link href="#terms"><Button variant="nav" as="a">Terms</Button></Link>
            </Nav.Col>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Grid paddingTop="1rem">
            <Flex.Row justifyContent="space-between">
              <Text size="10" color="var(--color-neutral-500)">©{getYear()} websolute spa - PI 02063520411 - Capitale sociale Eur 194.084,34 i.v., REA PU</Text>
              <Link href="https://www.websolute.com" target="_blank"><Button as="a"><Websolute /></Button></Link>
            </Flex.Row>
          </Grid>
        </Grid.Row>
      </Container.Fluid>
    </FooterContainer>
  );
}

export default Footer;
