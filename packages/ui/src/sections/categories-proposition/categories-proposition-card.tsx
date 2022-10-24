import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Card, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: CategoriesPropositionItem
}

export type CategoriesPropositionItem = {
  href: string;
  title: string;
  media: IMedia;
}

export type CategoriesPropositionCardProps = UIStyledComponentProps<Props, 'a'>;

const CategoriesPropositionCard: React.FC<CategoriesPropositionCardProps> = ({ item, ...props }: CategoriesPropositionCardProps) => {
  return (
    <Link href={item.href} passHref>
      <Card as="a" aspectRatio={2 / 1} {...props} hoverable borderRadius="0.4rem" justifyContent="flex-end">
        <Card.Background>
          <Media overlay item={item.media} />
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
