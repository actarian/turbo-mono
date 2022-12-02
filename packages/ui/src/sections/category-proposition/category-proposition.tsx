import { IMedia } from '@websolute/models';
import { Button, Card, Container, Flex, Media, NavLink, Section, Text } from '../../components';
import { UIComponentProps } from '../../components/types';

type Props = {
  item: CategoryPropositionItem,
};

export type CategoryPropositionItem = {
  href: string;
  title?: string;
  abstract?: string;
  description?: string;
  media?: IMedia;
};

export type CategoryPropositionProps = UIComponentProps<Props>;

export const CategoryProposition: React.FC<CategoryPropositionProps> = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <Section>
      <Container>
        <Card aspectRatio={1} aspectRatioSm={1.44} aspectRatioMd={1.87} aspectRatioLg={2.3} justifyContent="center" borderRadius="0.4rem" border="1px solid var(--color-primary-200)">
          {item.media &&
            <Card.Background>
              <Media overlay={0.7} item={item.media} />
            </Card.Background>
          }
          <Card.Content>
            <Container.Fluid>
              <Flex.Col alignItems="center" textAlign="center">
                {item.abstract && <Text size="4" fontWeight="700" marginBottom="1rem">{item.abstract}</Text>}
                {item.description && <Text size="8" maxWidth="65ch" marginBottom="2rem">{item.description}</Text>}
                {item.href &&
                  <NavLink href={item.href} passHref>
                    <Button as="a" variant="secondary">Discover {item.title}</Button>
                  </NavLink>
                }
              </Flex.Col>
            </Container.Fluid>
          </Card.Content>
        </Card>
      </Container>
    </Section>
  );
};
