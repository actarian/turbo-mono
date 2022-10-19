import { useLabel } from '@websolute/hooks';
import { Button, Container, Flex, Section, Text } from '../../components';

export type ICheckoutReview = {
}

export interface CheckoutReviewProps {
  onPrevious?: () => void;
  onReview?: (data: ICheckoutReview) => void;
}

const CheckoutReview: React.FC<CheckoutReviewProps> = ({ onPrevious, onReview }: CheckoutReviewProps) => {
  const label = useLabel();

  const onReview_ = () => {
    if (typeof onReview === 'function') {
      onReview({});
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
          <Text size="6" fontWeight="700" marginBottom="1rem">Review</Text>
        </Container>
      </Section>
      <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <Flex.Row justifyContent="space-between">
            <Flex>
              <Button variant="secondary" onClick={onPrevious_}>Back</Button>
            </Flex>
            <Flex>
              <Button variant="primary" onClick={onReview_}>Proceed</Button>
            </Flex>
          </Flex.Row>
        </Container>
      </Section>
    </>
  );
};

export default CheckoutReview;
