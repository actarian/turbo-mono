import { useCurrency, useDateTimeFormat, useLabel, useLayout } from '@websolute/hooks';
import { IOrderDetail } from '@websolute/models';
import { Badge, Box, Button, Flex, NavLink, Text } from '../../components';

export type OrderItemProps = {
  item: IOrderDetail;
};

export const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  const layout = useLayout();

  const label = useLabel();

  const dateTimeFormat = useDateTimeFormat({
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const currency = useCurrency();

  const qty = item.items.reduce((p, c) => p + c.qty, 0);

  return (
    <Flex.Row gap="2rem" padding="1rem" border="1px solid var(--color-neutral-300)">
      <Box flexBasis="80px">
        <Text size="11" fontWeight="700">ID</Text>
        <NavLink href={item.href} passHref>
          <Button as="a" variant="underline">#{item.id}</Button>
        </NavLink>
      </Box>
      <Box flexBasis="120px">
        <Text size="11" fontWeight="700">Order placed</Text>
        <Text size="10">{dateTimeFormat(item.date)}</Text>
      </Box>
      <Box flexBasis="160px">
        <Text size="11" fontWeight="700">Current status</Text>
        <Badge>{label(`order.status.${item.status}`)}</Badge>
      </Box>
      <Box flexBasis="120px">
        <Text size="11" fontWeight="700">Articles</Text>
        <Text size="10">{qty.toString()}</Text>
      </Box>
      <Box flexBasis="120px" textAlign="right">
        <Text size="11" fontWeight="700">Total</Text>
        <Text size="10">{currency(item.total)}</Text>
      </Box>
      <Box flexGrow="1" textAlign="right">
        <NavLink href={item.href} passHref>
          <Button as="a" variant="primary" size="sm">Order detail</Button>
        </NavLink>
      </Box>
    </Flex.Row>
  );
};
