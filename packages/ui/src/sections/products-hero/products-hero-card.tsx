import Link from 'next/link';
import { Card, Media, Text } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { CategoriesPropositionItem } from '../categories-proposition/categories-proposition-card';

type Props = {
  item: CategoriesPropositionItem
};

export type ProductsHeroCardProps = UIStyledComponentProps<Props, 'a'>;

export const ProductsHeroCard: React.FC<ProductsHeroCardProps> = ({ item, ...props }: ProductsHeroCardProps) => {
  return (
    <Link href={item.href} passHref>
      <Card as="a" aspectRatio={2 / 1} {...props} hoverable borderRadius="0.4rem" justifyContent="flex-end">
        <Card.Background>
          <Media overlay={0.2} item={item.media} />
        </Card.Background>
        <Card.Content padding="1rem" justifyContent="flex-end">
          <Text size="10">{'Shop the collection'}</Text>
          <Text size="8" fontWeight="700">{item.title}</Text>
        </Card.Content>
      </Card>
    </Link>
  );
};
