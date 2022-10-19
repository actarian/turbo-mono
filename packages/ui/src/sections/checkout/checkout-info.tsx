import { scrollToY, useLabel } from '@websolute/hooks';
import { IUser } from '@websolute/models';
import { useUser } from '@websolute/ui';
import { useState } from 'react';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import CheckoutForgot from './checkout-forgot';
import CheckoutForgotSuccess from './checkout-forgot-success';
import CheckoutLogin from './checkout-login';
import CheckoutRegister from './checkout-register';
import CheckoutRegisterSuccess from './checkout-register-success';
import type { IUserInfo } from './checkout-user-info';
import CheckoutUserInfo from './checkout-user-info';

export type ICheckoutInfo = {
  user?: IUser;
  userInfo: IUserInfo;
}

export interface CheckoutInfoProps {
  onPrevious?: () => void;
  onInfo?: (info: ICheckoutInfo) => void;
}

const CheckoutInfo: React.FC<CheckoutInfoProps> = ({ onPrevious, onInfo }: CheckoutInfoProps) => {
  const label = useLabel();

  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const [view, setView] = useState(user ? 'address' : 'choose');

  // const [user, setUser] = useState<IUser>();

  const onUserInfo = (userInfo: IUserInfo) => {
    if (typeof onInfo === 'function') {
      onInfo({ user, userInfo });
    }
  }

  const onSignedIn = (user: IUser) => {
    console.log('onSignedIn');
    setUser(user);
    onView('address');
  }

  const onSignedUp = () => {
    console.log('onSignedUp');
    onView('register-success');
  }

  const onPasswordSent = () => {
    console.log('onPasswordSent');
    onView('forgot-success');
  }

  const onNavToLogin = () => {
    onView('login');
  }

  const onNavToRegister = () => {
    onView('register');
  }

  const onNavToForgot = () => {
    onView('forgot');
  }

  const onNavToPrevious = () => {
    onView('choose');
  }

  const onView = (view: string) => {
    setView(view);
    scrollToY(0);
  }

  const onPrevious_ = () => {
    if (typeof onPrevious === 'function') {
      onPrevious();
    }
    scrollToY(0);
  }

  const getView = () => {
    switch (view) {
      case 'choose':
        return (
          <>
            <Section>
              <Container>
                <Grid.Row rowGap="3rem">
                  <Grid sm={6}>
                    <Flex.Col gap="1rem" alignItems="flex-start">
                      <Text size="4" fontWeight="700">Login</Text>
                      <Text marginBottom="1rem">Login to optimise your shopping experience and to see your previous orders.</Text>
                      <Button variant="primary" onClick={() => setView('login')}>Login</Button>
                    </Flex.Col>
                  </Grid>
                  <Grid sm={6}>
                    <Flex.Col gap="2rem">
                      <Flex.Col gap="1rem" alignItems="flex-start" marginBottom="3rem">
                        <Text size="4" fontWeight="700">Register</Text>
                        <Text marginBottom="1rem">Register to optimise your shopping experience and to see your previous orders.</Text>
                        <Button variant="primary" onClick={() => setView('register')}>Register</Button>
                      </Flex.Col>
                      <Flex.Col gap="1rem" alignItems="flex-start">
                        <Text size="4" fontWeight="700">Proceed as guest</Text>
                        <Text marginBottom="1rem">If you continue your purchase as a guest, we will request your shipping details and assign the appropriate sales outlet, but you will not need to create a personal account. If you would like to access your user area and your order history, please complete the purchase by registering your account.</Text>
                        <Button variant="primary" onClick={() => setView('address')}>Proceed</Button>
                      </Flex.Col>
                    </Flex.Col>
                  </Grid>
                </Grid.Row>
              </Container>
            </Section>
            <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
              <Container>
                <Flex.Row justifyContent="space-between">
                  <Flex>
                    <Button variant="secondary" onClick={onPrevious_}>Back</Button>
                  </Flex>
                </Flex.Row>
              </Container>
            </Section>
          </>
        )
      case 'address':
        return (<CheckoutUserInfo user={user} onUserInfo={onUserInfo} onNavToPrevious={onNavToPrevious} />)
      case 'login':
        return (<CheckoutLogin onSignedIn={onSignedIn} onNavToForgot={onNavToForgot} onNavToRegister={onNavToRegister} onNavToPrevious={onNavToPrevious} />);
      case 'register':
        return (<CheckoutRegister onSignedUp={onSignedUp} onNavToLogin={onNavToLogin} onNavToPrevious={onNavToPrevious} />);
      case 'register-success':
        return (<CheckoutRegisterSuccess onNavToLogin={onNavToLogin} onNavToPrevious={onNavToPrevious} />);
      case 'forgot':
        return (<CheckoutForgot onPasswordSent={onPasswordSent} onNavToLogin={onNavToLogin} onNavToRegister={onNavToRegister} onNavToPrevious={onNavToPrevious} />);
      case 'forgot-success':
        return (<CheckoutForgotSuccess onNavToLogin={onNavToLogin} onNavToPrevious={onNavToPrevious} />);
      default:
        return null;
    }
  }
  return (
    <>
      {getView()}
    </>
  );
};

export default CheckoutInfo;
