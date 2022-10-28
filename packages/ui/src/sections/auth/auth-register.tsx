import { httpPost } from '@websolute/core';
import { EmailValidator, FormGroup, MatchValidator, RequiredTrueValidator, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { IUserRegister } from '@websolute/models';
import { ReactNode, useState } from 'react';
import { Button, Divider, Flex, Text } from '../../components';
import { FieldCheckbox, FieldPassword, FieldText } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';


export interface AuthRegisterProps {
  children?: ReactNode;
  onSignedUp?: () => void;
  onNavToLogin?: () => void;
}

export const AuthRegister: React.FC<AuthRegisterProps> = ({ onSignedUp, onNavToLogin }: AuthRegisterProps) => {
  const label = useLabel();

  const required = RequiredValidator();
  const requiredTrue = RequiredTrueValidator();
  const email = EmailValidator();
  const match = MatchValidator((value, rootValue, control, root) => {
    return rootValue?.password;
  });

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserRegister, FormGroup>({

    firstName: { schema: 'text', label: 'field.firstName', validators: [required] },
    lastName: { schema: 'text', label: 'field.lastName', validators: [required] },
    email: { schema: 'text', label: 'field.email', validators: [required, email] },
    password: { schema: 'password', label: 'field.password', validators: required },
    confirmPassword: { schema: 'password', label: 'field.confirmPassword', validators: [required, match] },
    privacy: { schema: 'checkbox', label: 'field.privacy', validators: [requiredTrue] },

    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  });

  const onTest = () => {
    setValue({
      firstName: 'Jhon',
      lastName: 'Appleseed',
      email: 'jhon.appleseed@gmail.com',
      password: '123456',
      confirmPassword: '123456',
      privacy: true,
    });
  }

  const onReset = () => {
    reset();
  }

  const [error, setError] = useState<Error>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.flags.valid) {
      console.log('AuthRegister.valid', form.value);
      try {
        setError(undefined);
        await httpPost('/api/auth/register', form.value);
        if (typeof onSignedUp === 'function') {
          onSignedUp();
        }
      } catch (error) {
        console.log('AuthRegister.error', error);
        setError(error as Error);
      }
    } else {
      console.log('AuthRegister.invalid');
      setTouched();
    }
  }

  const onLogin = () => {
    if (typeof onNavToLogin === 'function') {
      onNavToLogin();
    }
  }

  return (
    <Flex.Col justifyContent="space-between">
      <Form state={form} onSubmit={onSubmit}>
        <Flex.Col flex="1" rowGap="1rem">
          <Text size="6" fontWeight="700" marginBottom="1rem">Registration</Text>
          <Text size="9" marginBottom="2rem">Fill out the form to request access. You will receive a confirmation email after activation.</Text>
          <FieldText control={group.controls.checkField}></FieldText>
          <FieldText control={group.controls.firstName}></FieldText>
          <FieldText control={group.controls.lastName}></FieldText>
          <FieldText control={group.controls.email}></FieldText>
          <FieldPassword control={group.controls.password}></FieldPassword>
          <FieldPassword control={group.controls.confirmPassword}></FieldPassword>
          <FieldCheckbox margin="0" control={group.controls.privacy}></FieldCheckbox>
          {error && <FormError error={error}>{label('form.submit.error')}</FormError>}
          <Button type="submit" variant="primary" size="lg" justifyContent="center" margin="1rem 0"><span>Register</span></Button>
          <Divider>Already registered?</Divider>
          <Flex.Row justifyContent="center">
            <Button variant="link" onClick={onLogin}>Login</Button>
          </Flex.Row>
          <FormTester form={form} onTest={onTest} onReset={onReset}></FormTester>
        </Flex.Col>
        {false && <Button type="submit" variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center"><span>Register</span></Button>}
      </Form>
    </Flex.Col>
  );
};
