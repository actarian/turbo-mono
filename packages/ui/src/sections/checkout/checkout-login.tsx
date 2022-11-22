import { IUser } from '@websolute/models';
import { Button, Container, Flex, Section } from '../../components';
import { AuthLogin } from '../auth/auth-login';

type Props = {
  onSignedIn?: (user: IUser) => void;
  onNavToForgot?: () => void;
  onNavToRegister?: () => void;
  onNavToPrevious?: () => void;
};

export const CheckoutLogin: React.FC<Props> = ({ onSignedIn, onNavToForgot, onNavToRegister, onNavToPrevious }: Props) => {

  const onSignedIn_ = (user: IUser) => {
    if (typeof onSignedIn === 'function') {
      onSignedIn(user);
    }
  };

  const onNavToForgot_ = () => {
    if (typeof onNavToForgot === 'function') {
      onNavToForgot();
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
          <AuthLogin onSignedIn={onSignedIn_} onNavToForgot={onNavToForgot_} onNavToRegister={onNavToRegister_} />
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
