import { Button, Divider, Flex, Text } from '@ui-components';
import { Checkbox, Field, Input, Label } from '@ui-forms';
import { ReactNode } from 'react';

export interface AuthSignUpProps {
  children?: ReactNode;
  onSignedUp?: () => void;
  onNavToLogin?: () => void;
}

const AuthSignUp: React.FC<AuthSignUpProps> = ({ onSignedUp, onNavToLogin }: AuthSignUpProps) => {
  const onSignUp = () => {
    if (typeof onSignedUp === 'function') {
      onSignedUp();
    }
  }
  const onLogin = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
    }
  }
  return (
    <Flex.Col justifyContent="space-between">
      <Flex.Col flex="1" rowGap="1rem">
        <Text size="6" fontWeight="700" marginBottom="1rem">Registration</Text>
        <Text size="9" marginBottom="2rem">Fill out the form to request access. You will receive a confirmation email after activation.</Text>
        <Field>
          <Label>Name</Label>
          <Input placeholder="Name" />
        </Field>
        <Field>
          <Label>Surname</Label>
          <Input placeholder="Surname" />
        </Field>
        <Field>
          <Label>Email address</Label>
          <Input placeholder="Email" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </Field>
        <Field>
          <Label><Checkbox name='remember' /> I accept</Label>
        </Field>
        <Button variant="primary" size="lg" justifyContent="center" margin="1rem 0" onClick={onSignUp}><span>Register</span></Button>
        <Divider>Already registered?</Divider>
        <Flex.Row justifyContent="center">
          <Button variant="link" onClick={onLogin}>Login</Button>
        </Flex.Row>
      </Flex.Col>
      {false && <Button variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center" onClick={onSignUp}><span>Register</span></Button>}
    </Flex.Col>
  );
};

export default AuthSignUp;
