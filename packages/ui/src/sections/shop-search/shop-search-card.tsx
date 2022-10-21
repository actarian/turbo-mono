import { IEquatable } from '@websolute/core';
import { useCart, useCurrency, useDrawer } from '@websolute/hooks';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Flex, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: ShopSearchItem
}

export type ShopSearchItem = {
  id: IEquatable;
  schema: string;
  categoryId: IEquatable;
  href: string;
  title: string;
  price: number;
  media: IMedia;
  abstract?: string;
  description?: string;
  collection?: string;
  designer?: string;
  color?: string;
}

export type ShopRelatedCardProps = UIStyledComponentProps<Props>;

const ShopRelatedCard: React.FC<ShopRelatedCardProps> = ({ item, ...props }: ShopRelatedCardProps) => {
  const currency = useCurrency();
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const add = useCart((state) => state.add);
  // const find = useCart((state) => state.find);
  // const cartItem = find(item);
  // const isAddedToCart = cartItem != null;
  // const [qty, setQty] = useState(isAddedToCart ? cartItem.qty : 1);
  function onAddToCart() {
    add(item, 1);
    onOpenDrawer('cart');
  }
  return (
    <Card {...props}>
      <Link href={item.href} passHref>
        <Media as="a" aspectRatio={1} borderRadius="0.4rem" marginBottom="0.5rem" item={item.media} />
      </Link>
      <Card.Content>
        {item.collection && <Text size="9" fontWeight="600">{item.collection + (item.designer ? ` by ${item.designer}` : '')}</Text>}
        <Link href={item.href} passHref>
          <Button as="a" variant="nav" marginBottom="0.3rem">{item.title}</Button>
        </Link>
        {false && item.abstract && <Text size="10" marginBottom="0.3rem">{item.abstract}</Text>}
        <Flex.Row justifyContent="space-between">
          <Text size="8" fontWeight="600">{currency(item.price)}</Text>
          <Button variant="nav" onClick={onAddToCart}>Add to bag</Button>
        </Flex.Row>
      </Card.Content>
    </Card>
  )
}

export default ShopRelatedCard;
