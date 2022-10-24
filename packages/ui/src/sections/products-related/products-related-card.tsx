import { useCart, useCurrency, useDrawer } from '@websolute/hooks';
import type { IMedia } from '@websolute/models';
import Link from 'next/link';
import { Button, Card, Flex, Media, MediaImage, Text } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';

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
    <Card {...props} hoverable>
      <Link href={item.href} passHref>
        <Media as="a" aspectRatio={1} borderRadius="0.4rem" marginBottom="1rem" overlay>
          <MediaImage {...item.media} />
          <Media.Info padding="1rem" justifyContent="flex-end" alignItems="flex-end">
            <Text size="8">{currency(item.price)}</Text>
          </Media.Info>
        </Media>
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Link href={item.href} passHref>
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
