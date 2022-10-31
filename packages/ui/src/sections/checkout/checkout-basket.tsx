import { useApi, useApiPost, useCart, useCheckout, useCurrency, useLabel, useLayout } from '@websolute/hooks';
import { Percent, Truck } from '@websolute/icons';
import { ICheckoutItem, ICheckoutPartial } from '@websolute/models';
import { Box, Button, Container, Flex, NavLink, Section, Text } from '../../components';
import { CheckoutBasketItem } from './checkout-basket-item';

export type CheckoutBasketProps = {
  onBasket?: (items: ICheckoutItem[]) => void;
}

export const CheckoutBasket: React.FC<CheckoutBasketProps> = ({ onBasket }: CheckoutBasketProps) => {

  const label = useLabel();

  const layout = useLayout();

  const api = useApi();

  const currency = useCurrency();

  const cartItems = useCart((state) => state.items);

  const checkout = useCheckout((state) => state.checkout);
  const setCheckout = useCheckout((state) => state.setCheckout);

  const [items = []] = useApiPost<ICheckoutItem[]>('/checkout/items', { ...checkout, items: cartItems });

  const subTotal = items.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0);

  const subTotalFull = items.reduce((p, c) => {
    return p + c.fullPrice * c.qty;
  }, 0);

  const onBasket_ = async () => {
    try {
      const response = await api.post<ICheckoutPartial>('/checkout/update', {
        action: 'basket',
        checkout: { ...checkout, items },
      });
      setCheckout(response);
      if (typeof onBasket === 'function') {
        onBasket(items);
      }
    } catch (error) {
      console.error('CheckoutBasket.onBasket_.error', error);
    }
  }

  return (
    <>
      <Section>
        <Container minHeight="50vh">
          <Flex.Row gap="2rem" padding="1rem 0" fontWeight="700">
            <Text flex="0 1 calc(100% - 420px)">Product</Text>
            <Text flexBasis="110px" textAlign="right">Unit price</Text>
            <Text flexBasis="120px" textAlign="center">Quantity</Text>
            <Text flexBasis="80px" textAlign="center">&nbsp;</Text>
            <Text flexBasis="110px" textAlign="right">Price</Text>
          </Flex.Row>
          <Flex.Col flex="1" gap="1rem">
            {items && items.map((item, i) =>
              <CheckoutBasketItem key={i} item={item} />
            )}
            <Flex.Row gap="1rem" fontWeight="700" marginBottom="1rem">
              <Text flex="0 1 calc(100% - 420px)">Subtotal</Text>
              <Text flexBasis="110px" textAlign="right">&nbsp;</Text>
              <Text flexBasis="120px" textAlign="center">&nbsp;</Text>
              <Text flexBasis="80px" textAlign="center">&nbsp;</Text>
              <Flex.Col flexBasis="110px" alignItems="flex-end" textAlign="right">
                <Text>{currency(subTotal)}</Text>
                {subTotalFull > subTotal && <Text size="11" textDecoration="line-through" color="var(--color-neutral-400)">{currency(subTotalFull)}</Text>}
              </Flex.Col>
            </Flex.Row>
          </Flex.Col>
          <Flex.Col gap="1rem">
            <Box borderRadius="0.5rem" border="1px solid var(--color-neutral-300)">
              <Flex.Row padding="1rem">
                <Truck width="2rem" height="2rem" color="var(--color-primary-500)" />
                <Box marginLeft="0.5rem">
                  <Text size="9" fontWeight="700">The shipping is on us</Text>
                  <Text size="10">Free, contactless delivery for payments over the minimum fare.</Text>
                </Box>
              </Flex.Row>
            </Box>
            <Box borderRadius="0.5rem" border="1px solid var(--color-neutral-300)">
              <Flex.Row padding="1rem">
                <Percent width="2rem" height="2rem" color="var(--color-primary-500)" />
                <Box marginLeft="0.5rem">
                  <Text size="9" fontWeight="700">Do you have a discount code?</Text>
                  <Text size="10">You can enter it in the following steps, before the final checkout.</Text>
                </Box>
              </Flex.Row>
            </Box>
          </Flex.Col>
        </Container>
      </Section>
      <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <Flex.Row justifyContent="space-between">
            <Flex>
              <NavLink href={layout.topLevelHrefs.shop_index || ''} passHref>
                <Button as="a" variant="link">Continue shopping</Button>
              </NavLink>
            </Flex>
            <Flex>
              <Button variant="primary" onClick={onBasket_}>Proceed</Button>
            </Flex>
          </Flex.Row>
        </Container>
      </Section>
    </>
  );
};
