import { useCurrency, useDrawer } from '@websolute/hooks';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Flex, Media, MediaImage, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';
import { useCart } from '../../hooks';

type Props = {
  item: ProductSearchItem
}

export type ProductSearchItem = {
  id: number;
  schema: string;
  href: string;
  title: string;
  abstract: string;
  price: number;
  media: IMedia;
}

export type ProductsRelatedCardProps = UIStyledComponentProps<Props>;

const ProductsRelatedCard: React.FC<ProductsRelatedCardProps> = ({ item, ...props }: ProductsRelatedCardProps) => {
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
      <Link href={item.href}>
        <Media aspectRatio={1} borderRadius="0.4rem" marginBottom="0.5rem">
          <MediaImage {...item.media} />
        </Media>
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Link href={item.href}>
            <Text size="9">{item.title}</Text>
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

export default ProductsRelatedCard;
