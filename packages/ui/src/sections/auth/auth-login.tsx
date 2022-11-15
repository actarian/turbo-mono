import { httpPost } from '@websolute/core';
import { EmailValidator, FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useLabel, useUser } from '@websolute/hooks';
import { IUser, IUserLogin } from '@websolute/models';
import { ReactNode, useState } from 'react';
import { Button, Divider, Flex, Text } from '../../components';
import { FieldCheckbox, FieldPassword, FieldText } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';

export type AuthLoginProps = {
  children?: ReactNode;
  onSignedIn?: (user: IUser) => void;
  onNavToForgot?: () => void;
  onNavToRegister?: () => void;
}

export const AuthLogin: React.FC<AuthLoginProps> = ({ onSignedIn, onNavToForgot, onNavToRegister }: AuthLoginProps) => {
  const label = useLabel();

  const required = RequiredValidator();
  const email = EmailValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserLogin, FormGroup>({

    email: { schema: 'text', label: 'field.email', validators: [required, email] },
    password: { schema: 'password', label: 'field.password', validators: required },
    rememberMe: { schema: 'checkbox', label: 'field.rememberMe' },

    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  });

  const onTest = () => {
    setValue({
      email: 'jhon.appleseed@gmail.com',
      password: '123456',
    });
  }

  const onReset = () => {
    reset();
  }

  const setUser = useUser((state) => state.setUser);

  const [error, setError] = useState<Error>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.flags.valid) {
      console.log('AuthLogin.valid', form.value);
      try {
        setError(undefined);
        const user = await httpPost('/api/auth/login', form.value);
        if (user) {
          setUser(user);
          if (typeof onSignedIn === 'function') {
            onSignedIn(user);
          }
        }/* else {
          setError(new Error('an error occurred'));
        }*/
      } catch (error) {
        console.log('AuthLogin.error', error);
        setError(error as Error);
      }
    } else {
      console.log('AuthLogin.invalid');
      setTouched();
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
      <Form state={form} onSubmit={onSubmit}>
        <Flex.Col flex="1" rowGap="1rem">
          <Text size="6" fontWeight="700" marginBottom="1rem">Sign in to your account</Text>
          <FieldText control={group.controls.checkField}></FieldText>
          <FieldText control={group.controls.email}></FieldText>
          <FieldPassword control={group.controls.password}></FieldPassword>
          <Flex.Row justifyContent="space-between">
            <FieldCheckbox margin="0" control={group.controls.rememberMe}></FieldCheckbox>
            <Button variant="link" onClick={onForgot}>Forgot your password?</Button>
          </Flex.Row>
          {error && <FormError error={error}>{label('form.submit.loginError')}</FormError>}
          <Button type="submit" variant="primary" size="lg" justifyContent="center" margin="1rem 0"><span>Sign In</span></Button>
          {/*
          <Flex.Row justifyContent="flex-end" margin="1rem 0">
            <Button type="submit" variant="primary" size="lg"><span>Sign In</span></Button>
          </Flex.Row>
          */}
          <Divider>Not registered yet?</Divider>
          <Flex.Row justifyContent="center">
            <Button variant="link" onClick={onRegister}>Register</Button>
          </Flex.Row>
          <FormTester form={form} onTest={onTest} onReset={onReset}></FormTester>
        </Flex.Col>
        {false && <Button type="submit" variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center"><span>Sign In</span></Button>}
      </Form>
    </Flex.Col>
  );
};
