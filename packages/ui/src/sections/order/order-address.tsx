import { IUserAddress } from '@websolute/models';
import { Flex, Text } from '../../components';

export type OrderAddressProps = {
  item: IUserAddress;
  title?: string;
};

export const OrderAddress: React.FC<OrderAddressProps> = ({ item, title }) => {
  return (
    <Flex.Col gap="1rem">
      {title && <Text size="6" fontWeight="700">{title}</Text>}
      <Flex.Col>
        <Text fontWeight="700">{item.firstName} {item.lastName}</Text>
        <Text>{item.address}, {item.streetNumber}</Text>
        <Text>{item.zipCode} {item.city} {item.country?.name}</Text>
        <Text>{item.phoneNumber}</Text>
        <Text>{item.email}</Text>
      </Flex.Col>
    </Flex.Col>
  );
}
