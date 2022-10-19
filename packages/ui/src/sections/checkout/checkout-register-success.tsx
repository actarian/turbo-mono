import { Button, Container, Flex, Section } from '../../components';
import AuthRegisterSuccess from '../auth/auth-register-success';

type Props = {
  onNavToLogin?: () => void;
  onNavToPrevious?: () => void;
}

const CheckoutRegisterSuccess: React.FC<Props> = ({ onNavToLogin, onNavToPrevious }: Props) => {

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
          <AuthRegisterSuccess onNavToLogin={onNavToLogin_} />
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

export default CheckoutRegisterSuccess;
