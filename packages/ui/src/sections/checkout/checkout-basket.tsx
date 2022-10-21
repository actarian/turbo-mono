import { useCart, useCurrency, useLabel, useLayout } from '@websolute/hooks';
import { Percent, Truck } from '@websolute/icons';
import { ICartItem } from '@websolute/models';
import { Box, Button, Container, Flex, NavLink, Section, Text } from '../../components';
import CheckoutBasketItem from './checkout-basket-item';

export interface CheckoutBasketProps {
  onBasket?: (items: ICartItem[]) => void;
}

const CheckoutBasket: React.FC<CheckoutBasketProps> = ({ onBasket }: CheckoutBasketProps) => {

  const label = useLabel();

  const layout = useLayout();

  const currency = useCurrency();

  const items = useCart((state) => state.items);

  const total = items.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0);

  const totalPrice = currency(total);

  const onBasket_ = () => {
    if (typeof onBasket === 'function') {
      onBasket(items);
    }
  }

  return (
    <>
      <Section>
        <Container minHeight="50vh">
          <Flex.Row gap="2rem" padding="1rem 0" fontWeight="700">
            <Text flexGrow="1">Product</Text>
            <Text flexBasis="110px" textAlign="right">Unit price</Text>
            <Text flexBasis="120px" textAlign="center">Quantity</Text>
            <Text flexBasis="80px" textAlign="center">&nbsp;</Text>
            <Text flexBasis="110px" textAlign="right">Price</Text>
          </Flex.Row>
          <Flex.Col flex="1" gap="1rem">
            {items && items.map((item, i) =>
              <CheckoutBasketItem key={i} item={item} />
            )}
          </Flex.Col>
          <Flex.Row gap="1rem" padding="1rem 0" fontWeight="700">
            <Text flexGrow="1">Total</Text>
            <Text flexBasis="110px" textAlign="right">&nbsp;</Text>
            <Text flexBasis="120px" textAlign="center">&nbsp;</Text>
            <Text flexBasis="80px" textAlign="center">&nbsp;</Text>
            <Text flexBasis="110px" textAlign="right">{totalPrice}</Text>
          </Flex.Row>
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

export default CheckoutBasket;
