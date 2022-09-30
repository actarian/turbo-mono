import { Lock } from '@websolute/icons';
import { ILink } from '@websolute/models';
import { Button, Container, Flex, NavLink, Section, Text } from '../../components';

type Download1Props = {
  type: 'download-1';
  title: string;
  links: ILink[]
};

const Download1 = ({ item }: { item: Download1Props }) => {
  return (
    <Section borderBottom="1px solid var(--color-neutral-300)">
      <Container>
        <Flex.Col>
          {item.title && <Text size="3" marginBottom="3rem" textAlign="center">{item.title}</Text>}
          {item.links.map((link, l) => (
            <NavLink href={link.href} key={l} passHref={true}>
              <Button variant="secondary" as="a">
                <Flex.Row width="100%">
                  {link.secure && <Lock />}
                  <Text flexGrow={1}>{link.title}</Text>
                  <Text flexBasis="20%">Download {link.type}</Text>
                </Flex.Row>
              </Button>
            </NavLink>
          ))}
        </Flex.Col>
      </Container>
    </Section>
  );
}

export default Download1;
