import { httpPost } from '@websolute/core';
import { EmailValidator, FormGroup, MatchValidator, RequiredTrueValidator, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { IUser, IUserRegister } from '@websolute/models';
import { useState } from 'react';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import { FieldCollection } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';

export interface OrderRegisterProps {
  data: Partial<IUser>;
  onSignedUp?: () => void;
}

export const OrderRegister: React.FC<OrderRegisterProps> = ({ data, onSignedUp }: OrderRegisterProps) => {
  const label = useLabel();

  const [registered, setRegistered] = useState<boolean>(false);

  const required = RequiredValidator();
  const requiredTrue = RequiredTrueValidator();
  const email = EmailValidator();
  const match = MatchValidator((value, rootValue, control, root) => {
    return rootValue?.password;
  });

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserRegister, FormGroup>({

    password: { schema: 'password', label: 'field.password', validators: required },
    confirmPassword: { schema: 'password', label: 'field.confirmPassword', validators: [required, match] },
    firstName: { value: data.firstName, schema: 'text', label: 'field.firstName', validators: [required] },
    lastName: { value: data.lastName, schema: 'text', label: 'field.lastName', validators: [required] },
    email: { value: data.email, schema: 'text', label: 'field.email', validators: [required, email] },
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
        setRegistered(true);
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

  return (
    <Section>
      <Container>
        <Flex.Col gap="1rem" padding="1.5rem 1rem" borderRadius="0.5em" border="1px solid var(--color-warning-500)">
          {registered ?
            <>
              <Text size="6" fontWeight="700">Account created</Text>
              <Text size="8" marginBottom="1rem" maxWidth="80ch">A confimation email has been sent to you at {form.value?.email}. Please check your inbox.</Text>
            </> :
            <>
              <Text size="6" fontWeight="700">Checkout faster next time</Text>
              <Text size="8" marginBottom="1rem" maxWidth="80ch">Want easy order tracking and faster checkout? Just choose a password to create your account.</Text>
              <Form state={form} onSubmit={onSubmit}>
                <Grid.Row rowGap="1rem">
                  <FieldCollection collection={group} />
                </Grid.Row>
                {error && <FormError error={error}>{label('form.submit.error')}</FormError>}
                <Button type="submit" variant="primary" size="lg" justifyContent="center" margin="1rem 0"><span>Create account</span></Button>
                <FormTester form={form} onTest={onTest} onReset={onReset}></FormTester>
              </Form>
            </>
          }
        </Flex.Col>
      </Container>
    </Section>
  );
};
