import { useLabel } from '@websolute/hooks';
import { Container, Flex, Section, Text } from '../../components';

export interface CheckoutErrorProps {
}

export const CheckoutError: React.FC<CheckoutErrorProps> = ({ }: CheckoutErrorProps) => {
  const label = useLabel();

  return (
    <>
      <Section>
        <Container minHeight="50vh">
          <Flex.Col gap="1rem" alignItems="center" textAlign="center">
            <Text size="4" fontWeight="700">Payment unsuccesful</Text>
            <Text size="8" marginBottom="1rem" maxWidth="80ch">There was a problem processing this payment. Please contact your payment provider if needed.</Text>
          </Flex.Col>
        </Container>
      </Section>
    </>
  );
};
