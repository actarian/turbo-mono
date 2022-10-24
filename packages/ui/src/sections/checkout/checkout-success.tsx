import { useLabel } from '@websolute/hooks';
import { Container, Flex, Section, Text } from '../../components';

export interface CheckoutSuccessProps {
}

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ }: CheckoutSuccessProps) => {
  const label = useLabel();

  return (
    <>
      <Section>
        <Container minHeight="50vh">
          <Flex.Col gap="1rem" alignItems="center" textAlign="center">
            <Text size="4" fontWeight="700">Order confirmation</Text>
            <Text size="8" marginBottom="1rem" maxWidth="80ch">Your order has been completed with success.</Text>
            <Text size="7" fontWeight="700">Order Summary</Text>
          </Flex.Col>
        </Container>
      </Section>
    </>
  );
};

export default CheckoutSuccess;
