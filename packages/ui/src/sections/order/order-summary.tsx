import { useCurrency, useLabel, useLayout } from '@websolute/hooks';
import { IOrder } from '@websolute/models';
import { Badge, Container, Flex, Section, Text } from '../../components';
import { OrderSummaryItem } from './order-summary-item';

export type OrderSummaryProps = {
  order: IOrder;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ order }: OrderSummaryProps) => {

  const label = useLabel();

  const layout = useLayout();

  const currency = useCurrency();

  return (
    <>
      <Section>
        <Container>
          <Text size="6" fontWeight="700">Order Summary</Text>
          <Flex.Row gap="2rem" padding="1rem 0" fontWeight="700">
            <Text flexGrow="1">Product</Text>
            <Text flexBasis="110px" textAlign="right">Unit price</Text>
            <Text flexBasis="120px" textAlign="center">Quantity</Text>
            <Text flexBasis="110px" textAlign="right">Price</Text>
          </Flex.Row>
          <Flex.Col flex="1" gap="1rem">
            {order.items.map((item, i) =>
              <OrderSummaryItem key={i} item={item} />
            )}
            <Flex.Row gap="1rem">
              <Text flexGrow="1">Subtotal</Text>
              <Text flexBasis="110px" textAlign="right">&nbsp;</Text>
              <Text flexBasis="120px" textAlign="center">&nbsp;</Text>
              <Text flexBasis="90px" textAlign="right">{currency(order.subTotal)}</Text>
            </Flex.Row>
            {order.discounts.map((item, i) =>
              <Flex.Row key={i} gap="1rem">
                <Text flexGrow="1">Discount <Badge>{item.name}</Badge></Text>
                <Text flexBasis="110px" textAlign="right">&nbsp;</Text>
                <Text flexBasis="120px" textAlign="center">{item.abstract}</Text>
                <Text flexBasis="90px" textAlign="right">{currency(item.price)}</Text>
              </Flex.Row>
            )}
            {order.taxes > 0 &&
              <Flex.Row gap="1rem">
                <Text flexGrow="1">Taxes</Text>
                <Text flexBasis="110px" textAlign="right">&nbsp;</Text>
                <Text flexBasis="120px" textAlign="center">&nbsp;</Text>
                <Text flexBasis="90px" textAlign="right">{currency(order.taxes)}</Text>
              </Flex.Row>
            }
            <Flex.Row gap="1rem">
              <Text flexGrow="1">{order.delivery.name}</Text>
              <Text flexBasis="110px" textAlign="right">&nbsp;</Text>
              <Text flexBasis="120px" textAlign="center">&nbsp;</Text>
              <Text flexBasis="110px" textAlign="right">{currency(order.delivery.price)}</Text>
            </Flex.Row>
            <Flex.Row gap="1rem" fontWeight="700" marginBottom="1rem">
              <Text flexGrow="1">Total</Text>
              <Text flexBasis="110px" textAlign="right">&nbsp;</Text>
              <Text flexBasis="120px" textAlign="center">&nbsp;</Text>
              <Text flexBasis="110px" textAlign="right">{currency(order.total)}</Text>
            </Flex.Row>
          </Flex.Col>
        </Container>
      </Section>
    </>
  );
};
