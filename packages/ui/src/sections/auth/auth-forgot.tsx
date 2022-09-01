import { Button, Divider, Flex, Text } from '@ui-components';
import { Field, Input, Label } from '@ui-forms';
import { ReactNode } from 'react';

export interface AuthForgotProps {
  children?: ReactNode;
  onPasswordSent?: () => void;
  onNavToLogin?: () => void;
  onNavToRegister?: () => void;
}

const AuthForgot: React.FC<AuthForgotProps> = ({ onPasswordSent, onNavToLogin, onNavToRegister }: AuthForgotProps) => {
  const onSend = () => {
    if (typeof onPasswordSent === 'function') {
      onPasswordSent();
    }
  }
  const onLogin = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
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
        <Text size="6" fontWeight="700" marginBottom="1rem">Password recovery</Text>
        <Field>
          <Label>Email address</Label>
          <Input placeholder="Email" />
        </Field>
        <Button variant="primary" size="lg" justifyContent="center" margin="1rem 0" onClick={onSend}><span>Send</span></Button>
        <Divider>Do you remember your password?</Divider>
        <Flex.Row justifyContent="center">
          <Button variant="link" onClick={onLogin}>Login</Button>
        </Flex.Row>
        <Divider>Not registered yet?</Divider>
        <Flex.Row justifyContent="center">
          <Button variant="link" onClick={onRegister}>Register</Button>
        </Flex.Row>
      </Flex.Col>
      {false && <Button variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center" onClick={onSend}><span>Send</span></Button>}
    </Flex.Col>
  );
};

export default AuthForgot;
