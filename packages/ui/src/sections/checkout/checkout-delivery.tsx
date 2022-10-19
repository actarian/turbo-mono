import { useLabel } from '@websolute/hooks';
import { Button, Container, Flex, Section, Text } from '../../components';

export type ICheckoutDelivery = {
}

export interface CheckoutWizardDeliveryProps {
  onPrevious?: () => void;
  onDelivery?: (data: ICheckoutDelivery) => void;
}

const CheckoutWizardDelivery: React.FC<CheckoutWizardDeliveryProps> = ({ onPrevious, onDelivery }: CheckoutWizardDeliveryProps) => {
  const label = useLabel();

  const onPrevious_ = () => {
    if (typeof onPrevious === 'function') {
      onPrevious();
    }
  }

  const onDelivery_ = () => {
    if (typeof onDelivery === 'function') {
      onDelivery({});
    }
  }

  return (
    <>
      <Section>
        <Container>
          <Text size="6" fontWeight="700" marginBottom="1rem">Delivery</Text>
        </Container>
      </Section>
      <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <Flex.Row justifyContent="space-between">
            <Flex>
              <Button variant="secondary" onClick={onPrevious_}>Back</Button>
            </Flex>
            <Flex>
              <Button variant="primary" onClick={onDelivery_}>Proceed</Button>
            </Flex>
          </Flex.Row>
        </Container>
      </Section>
    </>
  );
};

export default CheckoutWizardDelivery;
