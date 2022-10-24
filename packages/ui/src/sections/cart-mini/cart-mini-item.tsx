import { useCart, useCurrency, useMounted, useUI } from '@websolute/hooks';
import { Minus, Plus, Trash } from '@websolute/icons';
import type { ICartItem } from '@websolute/models';
import NextLink from 'next/link';
import { Button, Card, Flex, Media, MediaImage, Text } from '../../components';
import { Input } from '../../forms';

const CartMiniItem: React.FC<{ item: ICartItem }> = ({ item }: { item: ICartItem }) => {

  const currency = useCurrency();

  const update = useCart(state => state.update);
  const remove = useCart(state => state.remove);

  function onSetQty(qty: number) {
    if (qty > 0) {
      update({ ...item, qty });
    } else {
      onRemove();
    }
  }

  function onRemove() {
    const count = remove(item);
    console.log('count', count);
    if (count < 1) {
      closeDrawer();
    }
  }

  const reduceUI = useUI(state => state.reduce);

  function onSetDrawer(value?: string) {
    reduceUI((state) => ({ drawer: value }));
  }

  const closeDrawer = () => {
    return onSetDrawer();
  };

  const mounted = useMounted();
  return (
    <>
      <Card marginBottom="2rem" paddingBottom="1rem" borderBottom="1px solid var(--color-neutral-300)">
        <Flex.Row alignItems="flex-start">
          <Flex>
            <Media aspectRatio={1} width="80px" height="80px" flex="0 0 80px" rounded>
              <MediaImage width="80px" height="80px" src={item.media.src} draggable={false} title={item.title} />
            </Media>
          </Flex>
          <Card.Content flex="1" padding="0 1rem">
            <NextLink href={item.href || ''}>
              <Text size="9" fontWeight="700" onClick={closeDrawer}>{item.title}</Text>
            </NextLink>
            <Text size="10" marginBottom="1rem">{item.abstract}</Text>
            <Flex.Row justifyContent="space-between">
              <Button onClick={() => onSetQty(item.qty - 1)} ><Minus width="20px" height="20px" /></Button>
              <Input width="60px" padding="0.2rem" placeholder="qty" value={item.qty.toString()} onChange={(e) => onSetQty(Number(e.target.value))} />
              <Button size="xs" onClick={() => onSetQty(item.qty + 1)} ><Plus width="20px" height="20px" /></Button>
              <Text width="80px" textAlign="right">{currency(item.price * item.qty)}</Text>
              {mounted && <Button onClick={onRemove}><Trash width="20px" height="20px" /></Button>}
            </Flex.Row>
          </Card.Content>
        </Flex.Row>
      </Card>
    </>
  );
}

export default CartMiniItem;
