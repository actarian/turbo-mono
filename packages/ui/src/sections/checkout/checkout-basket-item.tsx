import { useCart, useCurrency } from '@websolute/hooks';
import { Minus, Plus, Trash } from '@websolute/icons';
import { ICheckoutItem } from '@websolute/models';
import NextLink from 'next/link';
import { Button, Flex, Media, MediaImage, Text } from '../../components';
import { Input } from '../../forms';

export const CheckoutBasketItem: React.FC<{ item: ICheckoutItem }> = ({ item }: { item: ICheckoutItem }) => {

  const currency = useCurrency();

  const { update, remove } = useCart(state => state.actions);

  function onSetQty(qty: number) {
    if (qty > 0) {
      update({ ...item, qty });
    } else {
      onRemove();
    }
  }

  function onRemove() {
    const count = remove(item);
    console.log('onRemove', count);
  }

  return (
    <Flex.Row gap="2rem" paddingBottom="1rem" borderBottom="1px solid var(--color-neutral-300)">
      <Flex flex="0 1 calc(100% - 420px)">
        <Flex.Row gap="2rem">
          <Media aspectRatio={1} width="120px" height="120px" flex="0 0 120px" rounded>
            <MediaImage width="120px" height="120px" src={item.media.src} draggable={false} title={item.title} />
          </Media>
          <Flex.Col alignItems="flex-start">
            <NextLink href={item.href || ''} passHref>
              <Button as="a" variant="nav">
                <Text size="9" fontWeight="700">{item.title}</Text>
              </Button>
            </NextLink>
            <Text size="10">{item.abstract}</Text>
          </Flex.Col>
        </Flex.Row>
      </Flex>
      <Flex.Col flexBasis="110px" alignItems="flex-end">
        <Text>{currency(item.price)}</Text>
        {item.fullPrice > item.price && <Text size="11" textDecoration="line-through" color="var(--color-neutral-400)">{currency(item.fullPrice)}</Text>}
      </Flex.Col>
      <Flex flexBasis="120px" justifyContent="center">
        <Flex.Row>
          <Button onClick={() => onSetQty(item.qty - 1)} ><Minus width="20px" height="20px" /></Button>
          <Input width="60px" padding="0.2rem" placeholder="qty" value={item.qty.toString()} onChange={(e) => onSetQty(Number(e.target.value))} />
          <Button size="xs" onClick={() => onSetQty(item.qty + 1)} ><Plus width="20px" height="20px" /></Button>
        </Flex.Row>
      </Flex>
      <Flex flexBasis="80px" justifyContent="center">
        <Button onClick={onRemove}><Trash width="20px" height="20px" /></Button>
      </Flex>
      <Flex.Col flexBasis="110px" alignItems="flex-end">
        <Text>{currency(item.price * item.qty)}</Text>
        {item.fullPrice > item.price && <Text size="11" textDecoration="line-through" color="var(--color-neutral-400)">{currency(item.fullPrice * item.qty)}</Text>}
      </Flex.Col>
    </Flex.Row>
  );
};
