import { useLabel } from '@websolute/hooks';
import { IOrder } from '@websolute/models';
import { Badge, Button, Container, Flex, Grid, Section, Text } from '../../components';
import { OrderAddress } from '../order/order-address';
import { OrderRegister } from '../order/order-register';
import { OrderSummary } from '../order/order-summary';

export type CheckoutSuccessProps = {
  order: IOrder;
};

export const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ order }: CheckoutSuccessProps) => {
  const label = useLabel();

  // console.log('CheckoutSuccess', order);

  return (
    <>
      <Section position="sticky" top="80px" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container.Fluid>
          <Flex.Row justifyContent="space-between">
            <Text size="8" fontWeight="700">Order #{order.id} <Badge>{label(`order.status.${order.status}`)}</Badge></Text>
            <Button className="print-none" variant="primary" onClick={() => window.print()}>Print</Button>
          </Flex.Row>
        </Container.Fluid>
      </Section>
      <Section className="print-none">
        <Container>
          <Flex.Col gap="1rem" alignItems="center" textAlign="center">
            <Text size="4" fontWeight="700">Thank you for your order, {order.user ? order.user.firstName : order.shippingAddress.firstName}</Text>
            <Text size="8" marginBottom="1rem" maxWidth="80ch">A confirmation email will be sent to you at {order.user ? order.user.email : order.shippingAddress.email} with your complete order details.</Text>
          </Flex.Col>
        </Container>
      </Section>
      {!order.user && (
        <OrderRegister className="print-none" data={order.shippingAddress} />
      )}
      <OrderSummary order={order} />
      <Section>
        <Container>
          <Grid.Row padding="2em 0">
            <Grid md={6}>
              {order.shippingAddress && (
                <OrderAddress item={order.shippingAddress} title={'Shipping address'} />
              )}
            </Grid>
            <Grid md={6}>
              {order.billingAddress && (
                <OrderAddress item={order.billingAddress} title={'Billing address'} />
              )}
            </Grid>
          </Grid.Row>
        </Container>
      </Section>
    </>
  );
};
