import { Button, Container, Flex, Section } from '../../components';
import { AuthForgot } from '../auth/auth-forgot';

type Props = {
  onPasswordSent?: () => void;
  onNavToLogin?: () => void;
  onNavToRegister?: () => void;
  onNavToPrevious?: () => void;
};

export const CheckoutForgot: React.FC<Props> = ({ onPasswordSent, onNavToLogin, onNavToRegister, onNavToPrevious }: Props) => {

  const onPasswordSent_ = () => {
    if (typeof onPasswordSent === 'function') {
      onPasswordSent();
    }
  };

  const onNavToLogin_ = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
    }
  };

  const onNavToRegister_ = () => {
    if (typeof onNavToRegister === 'function') {
      onNavToRegister();
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
          <AuthForgot onPasswordSent={onPasswordSent_} onNavToLogin={onNavToLogin_} onNavToRegister={onNavToRegister_} />
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
