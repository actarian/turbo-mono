import { useCurrency } from '@websolute/hooks';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Card, Flex, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: ShopItemsPropositionItem
}

export type ShopItemsPropositionItem = {
  id: number;
  href: string;
  title: string;
  abstract: string;
  price: number;
  media: IMedia;
}

export type ShopItemsPropositionCardProps = UIStyledComponentProps<Props, 'a'>;

const ShopItemsPropositionCard: React.FC<ShopItemsPropositionCardProps> = ({ item, ...props }: ShopItemsPropositionCardProps) => {
  const currency = useCurrency();
  return (
    <Link href={item.href} passHref>
      <Card as="a" {...props} hoverable>
        <Media aspectRatio={4 / 3} aspectRatioMd={3 / 4} borderRadius="0.4rem" marginBottom="1rem" item={item.media} />
        <Card.Content>
          <Flex.Row justifyContent="space-between">
            <Text size="8" fontWeight="700">{item.title}</Text>
            <Text size="8" fontWeight="700">{currency(item.price)}</Text>
          </Flex.Row>
          <Text size="8">{item.abstract}</Text>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default ShopItemsPropositionCard;
