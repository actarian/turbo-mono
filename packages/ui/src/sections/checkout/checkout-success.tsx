import { useLabel } from '@websolute/hooks';
import { IOrder } from '@websolute/models';
import { Badge, Button, Container, Flex, Grid, Section, Text } from '../../components';
import { OrderRegister } from '../order/order-register';
import { OrderSummary } from '../order/order-summary';

export interface CheckoutSuccessProps {
  order: IOrder;
}

export const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ order }: CheckoutSuccessProps) => {
  const label = useLabel();

  // console.log('CheckoutSuccess', order);

  return (
    <>
      <Section position="sticky" top="80px" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container.Fluid>
          <Flex.Row justifyContent="space-between">
            <Text size="8" fontWeight="700">Order #{order.id} <Badge>{label(`order.status.${order.status}`)}</Badge></Text>
            <Button variant="primary">Print</Button>
          </Flex.Row>
        </Container.Fluid>
      </Section>
      <Section>
        <Container>
          <Flex.Col gap="1rem" alignItems="center" textAlign="center">
            <Text size="4" fontWeight="700">Thank you for your order, {order.user ? order.user.firstName : order.shippingAddress.firstName}</Text>
            <Text size="8" marginBottom="1rem" maxWidth="80ch">A confirmation email will be sent to you at {order.user ? order.user.email : order.shippingAddress.email} with your complete order details.</Text>
          </Flex.Col>
        </Container>
      </Section>
      {!order.user && (
        <OrderRegister data={order.shippingAddress} />
      )}
      <OrderSummary order={order} />
      <Section>
        <Container>
          <Grid.Row padding="2em 0">
            <Grid md={6}>
              {order.shippingAddress &&
                <Flex.Col gap="1rem">
                  <Text size="6" fontWeight="700">Shipping address</Text>
                  <Flex.Col>
                    <Text fontWeight="700">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</Text>
                    <Text>{order.shippingAddress.address}, {order.shippingAddress.streetNumber}</Text>
                    <Text>{order.shippingAddress.zipCode} {order.shippingAddress.city} {order.shippingAddress.country?.name}</Text>
                    <Text>{order.shippingAddress.phoneNumber}</Text>
                    <Text>{order.shippingAddress.email}</Text>
                  </Flex.Col>
                </Flex.Col>
              }
            </Grid>
            <Grid md={6}>
              {order.billingAddress &&
                <Flex.Col gap="1rem">
                  <Text size="6" fontWeight="700">Billing address</Text>
                  <Flex.Col>
                    <Text fontWeight="700">{order.billingAddress.firstName} {order.billingAddress.lastName}</Text>
                    <Text>{order.billingAddress.address}, {order.billingAddress.streetNumber}</Text>
                    <Text>{order.billingAddress.zipCode} {order.billingAddress.city} {order.billingAddress.country?.name}</Text>
                    <Text>{order.billingAddress.phoneNumber}</Text>
                    <Text>{order.billingAddress.email}</Text>
                  </Flex.Col></Flex.Col>
              }
            </Grid>
          </Grid.Row>
        </Container>
      </Section>
    </>
  );
};
