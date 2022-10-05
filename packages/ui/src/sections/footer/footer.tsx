import { Facebook, Github, Hexagon, Instagram, Linkedin, Twitter, Websolute } from '@websolute/icons';
import Link from 'next/link';
import { Button, Container, Flex, Grid, Nav, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';

import styled from 'styled-components';

type Props = {
}

export type FooterProps = UIComponentProps<Props>;

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
              <Link href="/#facebook" passHref><Button as="a"><Facebook /></Button></Link>
              <Link href="/#instagram" passHref><Button as="a"><Instagram /></Button></Link>
              <Link href="/#twitter" passHref><Button as="a"><Twitter /></Button></Link>
              <Link href="/#linkedin" passHref><Button as="a"><Linkedin /></Button></Link>
              <Link href="/#github" passHref><Button as="a"><Github /></Button></Link>
            </Flex.Row>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Solutions</Text>
              <Link href="/#marketing" passHref><Button as="a" variant="nav">Marketing</Button></Link>
              <Link href="/#analytics" passHref><Button as="a" variant="nav">Analytics</Button></Link>
              <Link href="/#commerce" passHref><Button as="a" variant="nav">Commerce</Button></Link>
              <Link href="/#insights" passHref><Button as="a" variant="nav">Insights</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Support</Text>
              <Link href="/#pricing" passHref><Button as="a" variant="nav">Pricing</Button></Link>
              <Link href="/#documentation" passHref><Button as="a" variant="nav">Documentation</Button></Link>
              <Link href="/#guides" passHref><Button as="a" variant="nav">Guides</Button></Link>
              <Link href="/#api-status" passHref><Button as="a" variant="nav">API Status</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Company</Text>
              <Link href="/#about" passHref><Button as="a" variant="nav">About</Button></Link>
              <Link href="/#blog" passHref><Button as="a" variant="nav">Blog</Button></Link>
              <Link href="/#jobs" passHref><Button as="a" variant="nav">Jobs</Button></Link>
              <Link href="/#press" passHref><Button as="a" variant="nav">Press</Button></Link>
              <Link href="/#partners" passHref><Button as="a" variant="nav">Partners</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text size="8" color="var(--color-neutral-500)">Legal</Text>
              <Link href="/#claim" passHref><Button as="a" variant="nav">Claim</Button></Link>
              <Link href="/#privacy" passHref><Button as="a" variant="nav">Privacy</Button></Link>
              <Link href="/#terms" passHref><Button as="a" variant="nav">Terms</Button></Link>
            </Nav.Col>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Grid paddingTop="1rem">
            <Flex.Row justifyContent="space-between">
              <Text size="10" color="var(--color-neutral-500)">©{getYear()} websolute spa - PI 02063520411 - Capitale sociale Eur 194.084,34 i.v., REA PU</Text>
              <Link href="https://www.websolute.com" target="_blank" passHref>
                <Button as="a"><Websolute /></Button>
              </Link>
            </Flex.Row>
          </Grid>
        </Grid.Row>
      </Container.Fluid>
    </FooterContainer>
  );
}

export default Footer;
