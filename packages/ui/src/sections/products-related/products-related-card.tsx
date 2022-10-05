import { useCurrency, useDrawer } from '@websolute/hooks';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Flex, Media, MediaImage, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';
import { useCart } from '../../hooks';

type Props = {
  item: ProductsRelatedItem
}

export type ProductsRelatedItem = {
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
      <Link href={item.href} passHref={true}>
        <Media as="a" aspectRatio={1} borderRadius="0.4rem" marginBottom="1rem" overlay>
          <MediaImage {...item.media} />
          <Media.Info padding="1rem" justifyContent="flex-end" alignItems="flex-end">
            <Text size="8">{price}</Text>
          </Media.Info>
        </Media>
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Link href={item.href} passHref={true}>
            <Text as="a" size="9" fontWeight="700">{item.title}</Text>
          </Link>
        </Flex.Row>
        <Text size="9" marginBottom="2rem">{item.abstract}</Text>
        <Button variant="secondary" width="100%" justifyContent="center" onClick={onAddToCart}>Add to bag</Button>
      </Card.Content>
    </Card>
  )
}

export default ProductsRelatedCard;
