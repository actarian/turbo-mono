import { Button, Container, Flex, Section } from '../../components';
import { AuthForgotSuccess } from '../auth/auth-forgot-success';

type Props = {
  onNavToLogin?: () => void;
  onNavToPrevious?: () => void;
};

export const CheckoutForgotSuccess: React.FC<Props> = ({ onNavToLogin, onNavToPrevious }: Props) => {

  const onNavToLogin_ = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
    }
  };

  const onNavToPrevious_ = () => {
    if (typeof onNavToPrevious === 'function') {
      onNavToPrevious();
    }
  };

  return (
    <>
      <Section>
        <Container>
          <AuthForgotSuccess onNavToLogin={onNavToLogin_} />
        </Container>
      </Section>
      <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <Flex.Row justifyContent="space-between">
            <Flex>
              <Button variant="secondary" onClick={onNavToPrevious_}>Back</Button>
            </Flex>
          </Flex.Row>
        </Container>
      </Section>
    </>
  );
};
