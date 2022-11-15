import { httpPost } from '@websolute/core';
import { EmailValidator, FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { IUser, IUserRegister } from '@websolute/models';
import { useState } from 'react';
import { Button, Flex } from '../../components';
import { FieldText } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';

export type AuthUpdateProps = {
  user: IUser;
  onUpdate?: (user: IUser) => void;
  onCancel?: () => void;
}

export const AuthUpdate: React.FC<AuthUpdateProps> = ({ user, onUpdate, onCancel }: AuthUpdateProps) => {
  const label = useLabel();

  const required = RequiredValidator();
  const email = EmailValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserRegister, FormGroup>({

    firstName: { value: user.firstName, schema: 'text', label: 'field.firstName', validators: [required] },
    lastName: { value: user.lastName, schema: 'text', label: 'field.lastName', validators: [required] },
    email: { value: user.email, schema: 'text', label: 'field.email', validators: [required, email] },

    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  });

  const onTest = () => {
    setValue({
      firstName: 'Jhon',
      lastName: 'Appleseed',
      email: 'jhon.appleseed@gmail.com',
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
      console.log('AuthUpdate.valid', form.value);
      try {
        setError(undefined);
        const user = await httpPost('/api/auth/update', form.value);
        if (typeof onUpdate === 'function') {
          onUpdate(user);
        }
      } catch (error) {
        console.log('AuthUpdate.error', error);
        setError(error as Error);
      }
    } else {
      console.log('AuthUpdate.invalid');
      setTouched();
    }
  }

  const onCancel_ = () => {
    if (typeof onCancel === 'function') {
      onCancel();
    }
  }

  return (
    <Flex.Col justifyContent="space-between">
      <Form state={form} onSubmit={onSubmit}>
        <Flex.Col flex="1" rowGap="1rem">
          <FieldText control={group.controls.checkField}></FieldText>
          <FieldText control={group.controls.firstName}></FieldText>
          <FieldText control={group.controls.lastName}></FieldText>
          <FieldText control={group.controls.email}></FieldText>
          {error && <FormError error={error}>{label('form.submit.error')}</FormError>}
          <Flex.Row justifyContent="space-between">
            <Button variant="underline" onClick={onCancel_}><span>Cancel</span></Button>
            <Button type="submit" variant="primary" justifyContent="center" margin="1rem 0"><span>Update</span></Button>
          </Flex.Row>
          <FormTester form={form} onTest={onTest} onReset={onReset}></FormTester>
        </Flex.Col>
      </Form>
    </Flex.Col>
  );
};
