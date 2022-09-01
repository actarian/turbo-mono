import { ReactNode, useState } from 'react';
import { useDrawer } from '../../hooks';
import AuthForgot from './auth-forgot';
import AuthForgotSuccess from './auth-forgot-success';
import AuthLogin from './auth-login';
import AuthRegister from './auth-register';
import AuthRegisterSuccess from './auth-register-success';

export interface AuthProps {
  children?: ReactNode;
}

const Auth: React.FC<AuthProps> = ({ }: AuthProps) => {
  const [, , onCloseDrawer] = useDrawer();
  const [view, setView] = useState('login');
  const onSignedIn = () => {
    console.log('onSignedIn');
    onCloseDrawer();
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
