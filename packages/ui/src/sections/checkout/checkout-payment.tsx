import { useLabel } from '@websolute/hooks';
import { Button, Container, Flex, Section, Text } from '../../components';

export type ICheckoutPayment = {
}

export interface CheckoutWizardPaymentProps {
  onPrevious?: () => void;
  onPayment?: (data: ICheckoutPayment) => void;
}

const CheckoutWizardPayment: React.FC<CheckoutWizardPaymentProps> = ({ onPrevious, onPayment }: CheckoutWizardPaymentProps) => {
  const label = useLabel();

  const onPayment_ = () => {
    if (typeof onPayment === 'function') {
      onPayment({});
    }
  }

  const onPrevious_ = () => {
    if (typeof onPrevious === 'function') {
      onPrevious();
    }
  }

  return (
    <>
      <Section>
        <Container>
          <Text size="6" fontWeight="700" marginBottom="1rem">Payment</Text>
        </Container>
      </Section>
      <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <Flex.Row justifyContent="space-between">
            <Flex>
              <Button variant="secondary" onClick={onPrevious_}>Back</Button>
            </Flex>
            <Flex>
              <Button variant="primary" onClick={onPayment_}>Proceed</Button>
            </Flex>
          </Flex.Row>
        </Container>
      </Section>
    </>
  );
};

export default CheckoutWizardPayment;
