import { httpPost } from '@websolute/core';
import { EmailValidator, FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { IUserForgot } from '@websolute/models';
import { ReactNode, useState } from 'react';
import { Button, Divider, Flex, Text } from '../../components';
import { FieldText, Tester } from '../../fields';
import { Form } from '../../forms';

export interface AuthForgotProps {
  children?: ReactNode;
  onPasswordSent?: () => void;
  onNavToLogin?: () => void;
  onNavToRegister?: () => void;
}

const AuthForgot: React.FC<AuthForgotProps> = ({ onPasswordSent, onNavToLogin, onNavToRegister }: AuthForgotProps) => {
  const label = useLabel();

  const required = RequiredValidator();
  const email = EmailValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserForgot, FormGroup>({
    email: { schema: 'text', label: 'field.email', validators: [required, email] },
    checkRequest: { schema: 'text', value: 'window.antiforgery', hidden: true }, // todo take antiforgery token from server
    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery
  });

  const onTest = () => {
    setValue({
      email: 'jhon.appleseed@gmail.com',
    });
  }

  const onReset = () => {
    reset();
  }

  const [error, setError] = useState<Error>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.flags.valid) {
      console.log('AuthForgot.valid', form.value);
      try {
        setError(undefined);
        await httpPost('/api/auth/forgot', form.value);
        if (typeof onPasswordSent === 'function') {
          onPasswordSent();
        }
      } catch (error) {
        console.log('AuthForgot.error', error);
        setError(error as Error);
      }
    } else {
      console.log('AuthForgot.invalid');
      setTouched();
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
      <Form state={form} onSubmit={onSubmit}>
        <Flex.Col flex="1" rowGap="1rem">
          <Text size="6" fontWeight="700" marginBottom="1rem">Password recovery</Text>
          <FieldText control={group.controls.checkField}></FieldText>
          <FieldText control={group.controls.email}></FieldText>
          {/* !!! creare componente errore */}
          {error &&
            <Text
              padding="1rem"
              fontWeight="700"
              textAlign="center"
              background="var(--color-danger-100)"
              color="var(--color-danger-500)"
            >{label('form.submit.error')}
            </Text>
          }
          <Button type="submit" variant="primary" size="lg" justifyContent="center" margin="1rem 0"><span>Send</span></Button>
          <Divider>Do you remember your password?</Divider>
          <Flex.Row justifyContent="center">
            <Button variant="link" onClick={onLogin}>Login</Button>
          </Flex.Row>
          <Divider>Not registered yet?</Divider>
          <Flex.Row justifyContent="center">
            <Button variant="link" onClick={onRegister}>Register</Button>
          </Flex.Row>
          <Tester form={form} onTest={onTest} onReset={onReset}></Tester>
        </Flex.Col>
        {false && <Button type="submit" variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center"><span>Send</span></Button>}
      </Form>
    </Flex.Col>
  );
};

export default AuthForgot;
