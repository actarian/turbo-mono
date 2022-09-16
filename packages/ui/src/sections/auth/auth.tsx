import { useDrawer } from '@websolute/hooks';
import { IUser } from '@websolute/models';
import { useState } from 'react';
import AuthForgot from './auth-forgot';
import AuthForgotSuccess from './auth-forgot-success';
import AuthLogin from './auth-login';
import AuthRegister from './auth-register';
import AuthRegisterSuccess from './auth-register-success';

export interface AuthProps {
  onSignedIn?: (user: IUser) => void;
}

const Auth: React.FC<AuthProps> = (props: AuthProps) => {
  const [, , onCloseDrawer] = useDrawer();
  const [view, setView] = useState('login');
  const onSignedIn = (user: IUser) => {
    console.log('onSignedIn');
    onCloseDrawer();
    if (typeof props.onSignedIn === 'function') {
      props.onSignedIn(user);
    }
  };
  const onSignedUp = () => {
    console.log('onSignedUp');
    setView('register-success');
  };
  const onPasswordSent = () => {
    console.log('onPasswordSent');
    setView('forgot-success');
  };
  switch (view) {
    case 'login':
      return (<AuthLogin onSignedIn={onSignedIn} onNavToForgot={() => setView('forgot')} onNavToRegister={() => setView('register')} />);
    case 'register':
      return (<AuthRegister onSignedUp={onSignedUp} onNavToLogin={() => setView('login')} />);
    case 'register-success':
      return (<AuthRegisterSuccess onNavToLogin={() => setView('login')} />);
    case 'forgot':
      return (<AuthForgot onPasswordSent={onPasswordSent} onNavToLogin={() => setView('login')} onNavToRegister={() => setView('register')} />);
    case 'forgot-success':
      return (<AuthForgotSuccess onNavToLogin={() => setView('login')} />);
    default:
      return null;
  }
};

export default Auth;
