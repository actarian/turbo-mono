import { httpPost } from '@websolute/core/src/core/http/http.service';
import { EmailValidator, FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
// import { useApiGet, useClasses } from '@websolute/hooks';
import { useClasses } from '@websolute/hooks';
import { ReactNode } from 'react';
import { Button, Divider, Flex, Text } from '../../components';
import { FieldCheckbox, FieldPassword, FieldText, Tester } from '../../fields';

export interface AuthSignInProps {
  children?: ReactNode;
  onSignedIn?: () => void;
  onNavToForgot?: () => void;
  onNavToRegister?: () => void;
}

const AuthSignIn: React.FC<AuthSignInProps> = ({ onSignedIn, onNavToForgot, onNavToRegister }: AuthSignInProps) => {

  /*
  const { response } = useApiGet('/hello');
  if (response) {
    console.log('response', response);
  }
  */

  const required = RequiredValidator();
  const email = EmailValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<any, FormGroup>({
    email: { schema: 'text', label: 'field.email', validators: [required, email] },
    password: { schema: 'text', label: 'field.password', validators: required },
    rememberMe: { schema: 'checkbox', label: 'field.rememberMe' },
    checkRequest: { schema: 'text', value: 'window.antiforgery', hidden: true }, // todo take antiforgery token from server
    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery
  });

  const onTest = () => {
    setValue({
      email: 'jhon.appleseed@gmail.com',
      password: '123456',
    });
  }

  const onReset = () => {
    console.log('onReset');
    reset();
  }

  const onValidate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.flags.valid) {
      // form.value
      console.log('ContactForm.onSubmit.valid', form.value);
      onSignIn();
    } else {
      console.log('ContactForm.onSubmit.invalid');
      setTouched();
    }
  }

  const className = useClasses('form', form.flags);

  const onSignIn = async () => {
    // form.value
    try {
      const data = await httpPost('/api/auth/login', form.value);
      if (data) {
        // mutateUser(data);
        console.log(data);
        if (typeof onSignedIn === 'function') {
          onSignedIn();
        }
      }
    } catch (error) {
      console.error('An unexpected error happened:', error);
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
      <form className={className} onSubmit={onValidate}>
        <Flex.Col flex="1" rowGap="1rem">
          <Text size="6" fontWeight="700" marginBottom="1rem">Sign in to your account</Text>
          <FieldText control={group.controls.email}></FieldText>
          <FieldPassword control={group.controls.password}></FieldPassword>
          <Flex.Row justifyContent="space-between">
            <FieldCheckbox margin="0" control={group.controls.rememberMe}></FieldCheckbox>
            <Button variant="link" onClick={onForgot}>Forgot your password?</Button>
          </Flex.Row>
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
          <Tester form={form} onTest={onTest} onReset={onReset}></Tester>
        </Flex.Col>
      </form>
      {false && <Button variant="primary" size="lg" position="sticky" bottom="1rem" justifyContent="center" onClick={onSignIn}><span>Sign In</span></Button>}
    </Flex.Col>
  );
};

export default AuthSignIn;
