import Link from 'next/link';
import { Card, Media, MediaType, Text } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';

type Props = {
  item: CategoriesPropositionItem
}

export type CategoriesPropositionItem = {
  id: number;
  href: string;
  title: string;
  media: {
    type: MediaType;
    src: string;
  };
}

export type CategoriesPropositionCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const CategoriesPropositionCard: React.FC<CategoriesPropositionCardProps> = ({ item, ...props }: CategoriesPropositionCardProps) => {
  return (
    <Link href={item.href}>
      <Card aspectRatio={2 / 1} {...props} hoverable borderRadius="0.4rem" justifyContent="flex-end">
        <Card.Background>
          <Media overlay>
            <img src={item.media.src} />
          </Media>
        </Card.Background>
        <Card.Content padding="1rem" justifyContent="flex-end">
          <Text size="8" fontWeight="700">{item.title}</Text>
          <Text size="10">{'Shop now'}</Text>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default CategoriesPropositionCard;
