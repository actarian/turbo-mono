import { useCurrency } from '@websolute/hooks';
import { ICheckoutItem } from '@websolute/models';
import NextLink from 'next/link';
import { Button, Flex, Media, MediaImage, Text } from '../../components';

export const OrderSummaryItem: React.FC<{ item: ICheckoutItem }> = ({ item }: { item: ICheckoutItem }) => {

  const currency = useCurrency();
  const price = currency(item.price);
  const totalPrice = currency(item.price * item.qty);

  return (
    <Flex.Row gap="2rem" paddingBottom="1rem" borderBottom="1px solid var(--color-neutral-300)">
      <Flex flexGrow="1">
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
      <Flex flexBasis="110px" justifyContent="flex-end">
        <Text>{price}</Text>
      </Flex>
      <Flex flexBasis="120px" justifyContent="center">{item.qty.toString()}</Flex>
      <Flex flexBasis="110px" justifyContent="flex-end">
        <Text>{totalPrice}</Text>
      </Flex>
    </Flex.Row>
  );
};
