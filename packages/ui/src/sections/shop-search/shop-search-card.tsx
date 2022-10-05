import { useCurrency, useDrawer } from '@websolute/hooks';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Flex, Media, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';
import { useCart } from '../../hooks';

type Props = {
  item: ShopSearchItem
}

export type ShopSearchItem = {
  id: number;
  schema: string;
  href: string;
  title: string;
  abstract: string;
  price: number;
  media: IMedia;
}

export type ShopRelatedCardProps = UIStyledComponentProps<Props>;

const ShopRelatedCard: React.FC<ShopRelatedCardProps> = ({ item, ...props }: ShopRelatedCardProps) => {
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const cart = useCart();
  // const cartItem = cart.find(item);
  // const isAddedToCart = cartItem != null;
  // const [qty, setQty] = useState(isAddedToCart ? cartItem.qty : 1);
  function onAddToCart() {
    cart.add(item, 1);
    onOpenDrawer('cart');
  }
  const price = useCurrency(item.price);

  return (
    <Card {...props} hoverable>
      <Link href={item.href} passHref>
        <Media as="a" aspectRatio={1} borderRadius="0.4rem" marginBottom="0.5rem" item={item.media} />
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Link href={item.href} passHref>
            <Text as="a" size="9">{item.title}</Text>
          </Link>
        </Flex.Row>
        <Text size="8" fontWeight="600" marginBottom="1rem">{price}</Text>
        {false && <>
          <Text size="10" marginBottom="2rem">{item.abstract}</Text>
          <Button variant="secondary" width="100%" justifyContent="center" onClick={onAddToCart}>Add to bag</Button>
        </>}
      </Card.Content>
    </Card>
  )
}

export default ShopRelatedCard;
