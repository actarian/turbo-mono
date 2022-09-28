import type { IMedia } from '@websolute/models';
import { Button, Card, Container, Flex, Media, MediaImage, Section, Text } from '../../components';
import type { UIComponentProps } from '../../components/types';

type Props = {
  item: CategoryPropositionItem,
}

export type CategoryPropositionItem = {
  id: number;
  href: string;
  title: string;
  media: IMedia;
}

export type CategoryPropositionProps = UIComponentProps<Props>;

const CategoryProposition: React.FC<CategoryPropositionProps> = ({ item }) => {
  return (
    <Section>
      <Container>
        <Card aspectRatio={1} aspectRatioSm={1.44} aspectRatioMd={1.87} aspectRatioLg={2.3} justifyContent="center" borderRadius="0.4rem">
          <Card.Background>
            <Media overlay={0.7}>
              <MediaImage {...item.media} />
            </Media>
          </Card.Background>
          <Card.Content>
            <Container.Fluid>
              <Flex.Col alignItems="center" textAlign="center">
                <Text size="4" fontWeight="700" marginBottom="1rem">Level up your Desk</Text>
                <Text size="8" maxWidth="65ch" marginBottom="2rem">Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.</Text>
                <Button variant="secondary">Shop Workspace</Button>
              </Flex.Col>
            </Container.Fluid>
          </Card.Content>
        </Card>
      </Container>
    </Section>
  )
}

export default CategoryProposition;
