import { Button, Container, Flex, Section } from '../../components';
import AuthRegister from '../auth/auth-register';

type Props = {
  onSignedUp?: () => void;
  onNavToLogin?: () => void;
  onNavToPrevious?: () => void;
}

const CheckoutRegister: React.FC<Props> = ({ onSignedUp, onNavToLogin, onNavToPrevious }: Props) => {

  const onSignedUp_ = () => {
    if (typeof onSignedUp === 'function') {
      onSignedUp();
    }
  }

  const onNavToLogin_ = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
    }
  }

  const onNavToPrevious_ = () => {
    if (typeof onNavToPrevious === 'function') {
      onNavToPrevious();
    }
  }

  return (
    <>
      <Section>
        <Container>
          <AuthRegister onSignedUp={onSignedUp_} onNavToLogin={onNavToLogin_} />
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

export default CheckoutRegister;
