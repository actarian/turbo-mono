import { ILink, IMedia } from '@websolute/models';
import { Card, Container, Flex, Media, Section, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

export type CategoryHeroItem = {
  title?: string;
  abstract?: string;
  media?: IMedia;
  link?: ILink;
}

type Props = {
  item: CategoryHeroItem;
}

export type CategoryHeroProps = UIStyledComponentProps<Props>;

const CategoryHero: React.FC<CategoryHeroProps> = ({ item, ...props }: CategoryHeroProps) => {
  return (
    item.media ?
      <Card justifyContent="center" height="50vh" overflow="hidden">
        <Card.Background>
          <Media overlay item={item.media} />
        </Card.Background>
        <Card.Content>
          <Container>
            {/*
            <Text size="10" textTransform="uppercase">Collections</Text>
            */}
            <Flex.Col gap="3rem" alignItems="center" textAlign="center">
              {item.title && <Text size="2" fontWeight="700">{item.title}</Text>}
              {item.abstract && <Text size="8" lineHeight="2" maxWidth="76ch">{item.abstract}</Text>}
            </Flex.Col>
          </Container>
        </Card.Content>
      </Card> :
      <Section padding="6rem 0">
        <Container>
          <Flex.Col gap="3rem" alignItems="center" textAlign="center">
            {item.title && <Text size="2" fontWeight="700">{item.title}</Text>}
            {item.abstract && <Text size="8" lineHeight="2" maxWidth="76ch">{item.abstract}</Text>}
          </Flex.Col>
        </Container>
      </Section>
  )
}

export default CategoryHero;
