import Link from 'next/link';
import { Button, Card, Flex, Media, MediaType, Text } from '../../components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { useCart, useCurrency, useDrawer } from '../../hooks';

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
  media: {
    type: MediaType;
    src: string;
  };
}

export type ProductsRelatedCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

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
        <Media aspectRatio={1} borderRadius="0.4rem" marginBottom="1rem" overlay>
          <img src={item.media.src} />
          <Media.Info padding="1rem" justifyContent="flex-end" alignItems="flex-end">
            <Text size="8">{price}</Text>
          </Media.Info>
        </Media>
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Link href={item.href}>
            <Text size="9" fontWeight="700">{item.title}</Text>
          </Link>
        </Flex.Row>
        <Text size="9" marginBottom="2rem">{item.abstract}</Text>
        <Button variant="secondary" width="100%" justifyContent="center" onClick={onAddToCart}>Add to bag</Button>
      </Card.Content>
    </Card>
  )
}

export const ProductsRelatedCardDefaults = {
  item: {
    id: 1,
    schema: 'product',
    href: '/product',
    title: 'Focus Paper Refill',
    abstract: '3 sizes available',
    price: 13,
    media: {
      type: MediaType.Image,
      src: 'https://unsplash.com/photos/q10VITrVYUM/download?force=true&w=960',
    },
  }
};

ProductsRelatedCard.defaultProps = ProductsRelatedCardDefaults;

export default ProductsRelatedCard;
