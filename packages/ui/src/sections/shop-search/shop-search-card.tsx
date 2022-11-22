import { IEquatable } from '@websolute/core';
import { useCart, useCurrency, useDrawer } from '@websolute/hooks';
import { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Flex, Media, Text } from '../../components';
import { UIStyledComponentProps } from '../../components/types';

type Props = {
  item: ShopSearchItem
};

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
};

export type ShopSearchCardProps = UIStyledComponentProps<Props>;

export const ShopSearchCard: React.FC<ShopSearchCardProps> = ({ item, ...props }: ShopSearchCardProps) => {
  const currency = useCurrency();
  const [drawer, openDrawer, closeDrawer] = useDrawer();
  const { add } = useCart((state) => state.actions);
  // const find = useCart((state) => state.find);
  // const cartItem = find(item);
  // const isAddedToCart = cartItem != null;
  // const [qty, setQty] = useState(isAddedToCart ? cartItem.qty : 1);
  function onAddToCart() {
    add(item, 1);
    openDrawer('cart');
  }
  return (
    <Card {...props}>
      <Link href={item.href} passHref>
        <Media as="a" aspectRatio={1} borderRadius="0.4rem" marginBottom="0.5rem" item={item.media} />
      </Link>
      <Card.Content>
        {item.collection && <Text size="9" fontWeight="700">{item.collection + (item.designer ? ` by ${item.designer}` : '')}</Text>}
        <Link href={item.href} passHref>
          <Button as="a" variant="nav" marginBottom="0.3rem">{item.title}</Button>
        </Link>
        {false && item.abstract && <Text size="10" marginBottom="0.3rem">{item.abstract}</Text>}
        <Flex.Row justifyContent="space-between">
          <Text size="10" fontWeight="700">{currency(item.price)}</Text>
          <Button variant="nav" onClick={onAddToCart}>
            <Text size="10">Add to bag</Text>
          </Button>
        </Flex.Row>
      </Card.Content>
    </Card>
  );
};
