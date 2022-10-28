import { useCart, useCurrency, useLayout } from '@websolute/hooks';
import { ArrowRight, ShoppingCart } from '@websolute/icons';
import { ReactNode } from 'react';
import { Button, Divider, Drawer, Flex, NavLink, Text } from '../../components';
import { CartMiniItem } from './cart-mini-item';

export interface CartMiniProps {
  children?: ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const CartMini: React.FC<CartMiniProps> = ({ visible, onClose }: CartMiniProps) => {

  const layout = useLayout();

  const currency = useCurrency();

  const items = useCart((state) => state.items);

  const totalAmount = items.reduce((p, c) => p + c.price * c.qty, 0);

  /*
  const reduceUI = useUI(state => state.reduce);

  function onSetDrawer(value?: string) {
    reduceUI((state) => ({ drawer: value }));
  }

  function onBuy() {
    return onSetDrawer();
  }
  */

  return (
    <Drawer visible={visible} onClose={onClose} placement="right">
      <Drawer.Title>
        <Text size="8" fontWeight="700">Shopping cart</Text>
      </Drawer.Title>
      <Drawer.Subtitle>
        <Divider>{items.length} items found</Divider>
      </Drawer.Subtitle>
      <Drawer.Content flex="1" display="flex" width="100vw" maxWidth="400px">
        <Flex.Col justifyContent="space-between">
          <Flex.Col flex="1">
            {items && items.map((item, i) =>
              <CartMiniItem key={i} item={item} />
            )}
          </Flex.Col>
          <Flex.Row justifyContent="space-between" alignItems="center" padding="1rem 0 0.5rem 0">
            <Text fontWeight="700">Subtotal</Text>
            <Text fontWeight="700">{currency(totalAmount)}</Text>
          </Flex.Row>
          <Flex.Row justifyContent="space-between" alignItems="center" padding="0.5rem 0 1.5rem 0">
            <Text>Shipping and taxes calculated at checkout</Text>
          </Flex.Row>
          <NavLink href={layout.topLevelHrefs.checkout || ''} passHref>
            <Button as="a" variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center" onClick={onClose}>
              <span>Checkout</span> <ShoppingCart />
            </Button>
          </NavLink>
          <Flex.Row justifyContent="center" alignItems="center" padding="1rem 0">
            <span>or</span>
            <NavLink href={layout.topLevelHrefs.shop_index || ''} passHref>
              <Button as="a" variant="link" onClick={onClose}>
                <span>Continue shopping</span> <ArrowRight />
              </Button>
            </NavLink>
          </Flex.Row>
        </Flex.Col>
      </Drawer.Content>
    </Drawer>
  );
};
