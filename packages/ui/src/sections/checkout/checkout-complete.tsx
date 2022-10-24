import { useLabel } from '@websolute/hooks';
import { Container, Section, Text } from '../../components';

export interface CheckoutCompleteProps {
}

const CheckoutComplete: React.FC<CheckoutCompleteProps> = ({ }: CheckoutCompleteProps) => {
  const label = useLabel();

  return (
    <>
      <Section>
        <Container>
          <Text size="6" fontWeight="700" marginBottom="1rem">Complete</Text>
        </Container>
      </Section>
    </>
  );
};

export default CheckoutComplete;
