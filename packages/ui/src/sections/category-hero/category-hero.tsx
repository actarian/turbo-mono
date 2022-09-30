import { ILink, IMedia } from '@websolute/models';
import { Card, Container, Media, MediaImage, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

export type CategoryHeroItem = {
  id: number;
  title: string;
  abstract: string;
  link: ILink;
  media: IMedia;
}

type Props = {
  item: CategoryHeroItem;
}

export type CategoryHeroProps = UIStyledComponentProps<Props>;

const CategoryHero: React.FC<CategoryHeroProps> = ({ item, ...props }: CategoryHeroProps) => {
  return (
    <Card justifyContent="center" height="50vh" overflow="hidden">
      <Card.Background>
        <Media className="media" overlay>
          {item.media.type === 'video' ?
            (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
              <source src={item.media.src} type="video/mp4"></source>
            </video>) :
            (<MediaImage {...item.media} alt={item.title} draggable={false} />)}
        </Media>
      </Card.Background>
      <Card.Content>
        <Container.Fluid>
          {/*
            <Text size="10" textAlign="center" textTransform="uppercase">Collections</Text>
            */}
          <Text size="2" fontWeight="700" textAlign="center">{item.title}</Text>
        </Container.Fluid>
      </Card.Content>
    </Card>
  )
}

export default CategoryHero;
