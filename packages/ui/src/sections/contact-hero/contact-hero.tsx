import { useScrollTo } from '@websolute/hooks';
import { Search, Send } from '@websolute/icons';
import Link from 'next/link';
import { Button, Card, Container, Flex, Grid, MediaType, NavLink, Section, Text, Tooltip } from '../../components';
import { ComponentProps } from '../../components/types';

type Props = {
  item: ContactHeroItem,
}

export type ContactHeroItem = {
  id: number;
  href: string;
  title: string;
  media: {
    type: MediaType;
    src: string;
  };
}

export type ContactHeroProps = ComponentProps<Props, HTMLDivElement>;

const ContactHero: React.FC<ContactHeroProps> = ({ item }: ContactHeroProps) => {
  const scrollTo = useScrollTo();
  return (
    <Section>
      <Container.Fluid>
        <Grid.Row flex="1" columnGap="0">
          <Grid sm={6}>
            <Card.Content justifyContent="center" height="100%">
              <Text size="10" marginBottom="0.5rem" textTransform="uppercase">Contacts</Text>
              <Text size="1" marginBottom="2rem" fontWeight="700">Contacts</Text>
              <Text size="7" marginBottom="3rem">
                <span>Functional, contemporary products with an atypical and </span>
                <Tooltip text={<>Perfect for working with a CMS.</>}>
                  <u>unmistakable</u>
                </Tooltip> <span>style, able to combine the highest cabinet-making
                  tradition with the use of </span>
                <Tooltip text={<>Perfect for working with a CMS.</>} placement="bottom">
                  <u>sophisticated</u>
                </Tooltip> <span>production technologies.</span>
              </Text>
              <Flex.Responsive>
                <Link href="/store-locator">
                  <Button variant="primary"><span>Search dealers</span> <Search /></Button>
                </Link>
                <NavLink href="#contact-request" passHref>
                  <Button variant="secondary" onClick={scrollTo}><span>Contact Us</span> <Send /></Button>
                </NavLink>
              </Flex.Responsive>
            </Card.Content>
          </Grid>
          <Grid sm={6}></Grid>
        </Grid.Row>
      </Container.Fluid>
    </Section>
  )
}

export default ContactHero;
