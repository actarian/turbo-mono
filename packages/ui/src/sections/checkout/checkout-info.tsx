import { scrollToY, useCheckout, useLabel, useUser } from '@websolute/hooks';
import { ICheckoutInfo, IUser } from '@websolute/models';
import { useState } from 'react';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import { CheckoutForgot } from './checkout-forgot';
import { CheckoutForgotSuccess } from './checkout-forgot-success';
import { CheckoutLogin } from './checkout-login';
import { CheckoutRegister } from './checkout-register';
import { CheckoutRegisterSuccess } from './checkout-register-success';
import { CheckoutUserInfo } from './checkout-user-info';

export type CheckoutInfoProps = {
  onInfo?: (info: ICheckoutInfo) => void;
  onPrevious?: () => void;
};

export const CheckoutInfo: React.FC<CheckoutInfoProps> = ({ onPrevious, onInfo }: CheckoutInfoProps) => {
  const label = useLabel();

  const checkout = useCheckout((state) => state.checkout);
  const user = useUser((state) => state.user);
  const { setUser } = useUser((state) => state.actions);

  const [view, setView] = useState((checkout.shippingAddress || user) ? 'address' : 'choose');

  // const [user, setUser] = useState<IUser>();

  const onView = (view: string) => {
    setView(view);
    scrollToY(0);
  };

  const onUserInfo = (info: ICheckoutInfo) => {
    if (typeof onInfo === 'function') {
      onInfo(info);
    }
  };

  const onSignedIn = (user: IUser) => {
    console.log('onSignedIn');
    setUser(user);
    onView('address');
  };

  const onSignedUp = () => {
    console.log('onSignedUp');
    onView('register-success');
  };

  const onPasswordSent = () => {
    console.log('onPasswordSent');
    onView('forgot-success');
  };

  const onNavToLogin = () => {
    onView('login');
  };

  const onNavToRegister = () => {
    onView('register');
  };

  const onNavToForgot = () => {
    onView('forgot');
  };

  const onNavToPrevious = () => {
    onView('choose');
  };

  const onPrevious_ = () => {
    if (typeof onPrevious === 'function') {
      onPrevious();
    }
    scrollToY(0);
  };

  const getView = () => {
    switch (view) {
      case 'choose':
        return (
          <>
            <Section>
              <Container minHeight="50vh">
                <Grid.Row rowGap="3rem">
                  <Grid sm={6}>
                    <Flex.Col gap="1rem" alignItems="flex-start">
                      <Text size="4" fontWeight="700">Login</Text>
                      <Text size="8" marginBottom="1rem" maxWidth="60ch">Login to optimise your shopping experience and to see your previous orders.</Text>
                      <Button variant="primary" onClick={() => setView('login')}>Login</Button>
                    </Flex.Col>
                  </Grid>
                  <Grid sm={6}>
                    <Flex.Col gap="2rem">
                      <Flex.Col gap="1rem" alignItems="flex-start" marginBottom="3rem">
                        <Text size="4" fontWeight="700">Register</Text>
                        <Text size="8" marginBottom="1rem" maxWidth="60ch">Register to optimise your shopping experience and to see your previous orders.</Text>
                        <Button variant="primary" onClick={() => setView('register')}>Register</Button>
                      </Flex.Col>
                      <Flex.Col gap="1rem" alignItems="flex-start">
                        <Text size="4" fontWeight="700">Proceed as guest</Text>
                        <Text size="8" marginBottom="1rem" maxWidth="60ch">If you continue your purchase as a guest, we will request your shipping details and assign the appropriate sales outlet, but you will not need to create a personal account. If you would like to access your user area and your order history, please complete the purchase by registering your account.</Text>
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
        );
      case 'address':
        return (<CheckoutUserInfo user={user} onUserInfo={onUserInfo} onNavToPrevious={onNavToPrevious} />);
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
  };
  return (
    <>
      {getView()}
    </>
  );
};
