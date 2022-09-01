import { Button, Divider, Flex, Text } from '@ui-components';
import { Checkbox, Field, Input, Label } from '@ui-forms';
import { ReactNode } from 'react';

export interface AuthSignInProps {
  children?: ReactNode;
  onSignedIn?: () => void;
  onNavToForgot?: () => void;
  onNavToRegister?: () => void;
}

const AuthSignIn: React.FC<AuthSignInProps> = ({ onSignedIn, onNavToForgot, onNavToRegister }: AuthSignInProps) => {
  const onSignIn = () => {
    if (typeof onSignedIn === 'function') {
      onSignedIn();
    }
  }
  const onForgot = () => {
    if (typeof onNavToForgot === 'function') {
      onNavToForgot();
    }
  }
  const onRegister = () => {
    if (typeof onNavToRegister === 'function') {
      onNavToRegister();
    }
  }
  return (
    <Flex.Col justifyContent="space-between">
      <Flex.Col flex="1" rowGap="1rem">
        <Text size="6" fontWeight="700" marginBottom="1rem">Sign in to your account</Text>
        <Field>
          <Label>Email address</Label>
          <Input placeholder="Email" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </Field>
        <Flex.Row justifyContent="space-between">
          <Field>
            <Label marginBottom="0"><Checkbox name='remember' /> Remember me</Label>
          </Field>
          <Button variant="link" onClick={onForgot}>Forgot your password?</Button>
        </Flex.Row>
        <Button variant="primary" size="lg" justifyContent="center" margin="1rem 0" onClick={onSignIn}><span>Sign In</span></Button>
        <Divider>Not registered yet?</Divider>
        <Flex.Row justifyContent="center">
          <Button variant="link" onClick={onRegister}>Register</Button>
        </Flex.Row>
      </Flex.Col>
      {false && <Button variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center" onClick={onSignIn}><span>Sign In</span></Button>}
    </Flex.Col>
  );
};

export default AuthSignIn;
