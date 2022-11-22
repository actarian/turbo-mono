import { httpPost } from '@websolute/core';
import { FormGroup, MatchValidator, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { IUserChangePassword } from '@websolute/models';
import { useState } from 'react';
import { Button, Flex } from '../../components';
import { FieldPassword } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';

export type AuthChangePasswordProps = {
  onPasswordChanged?: () => void;
  onCancel?: () => void;
};

export const AuthChangePassword: React.FC<AuthChangePasswordProps> = ({ onPasswordChanged, onCancel }: AuthChangePasswordProps) => {
  const label = useLabel();

  const required = RequiredValidator();
  const match = MatchValidator((value, rootValue, control, root) => {
    return rootValue?.newPassword;
  });

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserChangePassword, FormGroup>({

    oldPassword: { schema: 'password', label: 'field.oldPassword', validators: required },
    newPassword: { schema: 'password', label: 'field.newPassword', validators: required },
    confirmNewPassword: { schema: 'password', label: 'field.confirmNewPassword', validators: [required, match] },

    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  });

  const onTest = () => {
    setValue({
      oldPassword: '123456',
      newPassword: '654321',
      confirmNewPassword: '654321',
    });
  };

  const onReset = () => {
    reset();
  };

  const [error, setError] = useState<Error>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.flags.valid) {
      console.log('AuthChangePassword.valid', form.value);
      try {
        setError(undefined);
        await httpPost('/api/auth/password', form.value);
        if (typeof onPasswordChanged === 'function') {
          onPasswordChanged();
        }
      } catch (error) {
        console.log('AuthChangePassword.error', error);
        setError(error as Error);
      }
    } else {
      console.log('AuthChangePassword.invalid');
      setTouched();
    }
  };

  const onCancel_ = () => {
    if (typeof onCancel === 'function') {
      onCancel();
    }
  };

  return (
    <Flex.Col justifyContent="space-between">
      <Form state={form} onSubmit={onSubmit}>
        <Flex.Col flex="1" rowGap="1rem">
          <FieldPassword control={group.controls.oldPassword}></FieldPassword>
          <FieldPassword control={group.controls.newPassword}></FieldPassword>
          <FieldPassword control={group.controls.confirmNewPassword}></FieldPassword>
          {error && <FormError error={error}>{label('form.submit.changePasswordError')}</FormError>}
          <Flex.Row justifyContent="space-between">
            <Button variant="underline" onClick={onCancel_}><span>Cancel</span></Button>
            <Button type="submit" variant="primary" justifyContent="center" margin="1rem 0"><span>Change password</span></Button>
          </Flex.Row>
          <FormTester form={form} onTest={onTest} onReset={onReset}></FormTester>
        </Flex.Col>
      </Form>
    </Flex.Col>
  );
};
