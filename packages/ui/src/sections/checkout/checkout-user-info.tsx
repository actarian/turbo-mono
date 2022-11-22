import { EmailValidator, FormGroup, RequiredIfValidator, RequiredTrueValidator, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useApi, useApiPost, useCheckout, useLabel } from '@websolute/hooks';
import { IAddressOptions, ICheckoutInfo, ICheckoutPartial, IUser, IUserAddress } from '@websolute/models';
import { useEffect, useState } from 'react';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import { FieldCollection } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';

export type CheckoutUserInfoProps = {
  user?: IUser;
  onUserInfo?: (userInfo: ICheckoutInfo) => void;
  onNavToPrevious?: () => void;
};

export const CheckoutUserInfo: React.FC<CheckoutUserInfoProps> = ({ user, onUserInfo, onNavToPrevious }: CheckoutUserInfoProps) => {
  const label = useLabel();

  const api = useApi();

  const checkout = useCheckout((state) => state.checkout);
  const { setCheckout } = useCheckout((state) => state.actions);

  const [options] = useApiPost<IAddressOptions>('/checkout/info', checkout);

  const required = RequiredValidator();
  const requiredTrue = RequiredTrueValidator();
  const email = EmailValidator();

  const shippingRequiredIfItaly = RequiredIfValidator((value, rootValue) => rootValue?.shippingAddress?.country?.id === 'it');
  const shippingHiddenIfNotItaly = (value: any, rootValue: any) => !(rootValue?.shippingAddress?.country?.id === 'it');

  const billingRequired = RequiredIfValidator((value, rootValue) => rootValue?.hasBilling === true);
  const billingHidden = (value: any, rootValue: any) => !(rootValue?.hasBilling === true);
  const billingHiddenIfNotItaly = (value: any, rootValue: any) => !(rootValue?.billingAddress?.country?.id === 'it');
  // const billingRequiredIfItaly = RequiredIfValidator((value, rootValue) => rootValue?.billingAddress?.country?.id === 'it');

  const [form, setValue, setTouched, reset, group] = useFormBuilder<Omit<ICheckoutInfo, 'user'>, FormGroup>({

    shippingAddress: {
      schema: 'group', label: 'field.shippingAddress', children: {
        firstName: { schema: 'text', label: 'field.firstName', validators: [required] },
        lastName: { schema: 'text', label: 'field.lastName', validators: [required] },
        email: { schema: 'text', label: 'field.email', validators: [required, email] },
        phoneNumber: { schema: 'text', label: 'field.phoneNumber', validators: [required] },
        country: { schema: 'select', label: 'field.country', options: options?.countries, validators: [required] },
        region: {
          schema: 'select', label: 'field.region', options: options?.regions,
          validators: shippingRequiredIfItaly,
          disabled: shippingHiddenIfNotItaly,
          hidden: shippingHiddenIfNotItaly,
        },
        province: {
          schema: 'autocomplete', label: 'field.province', options: options?.provinces,
          validators: shippingRequiredIfItaly,
          disabled: shippingHiddenIfNotItaly,
          hidden: shippingHiddenIfNotItaly,
        },
        address: { schema: 'text', label: 'field.address', validators: [required] },
        streetNumber: { schema: 'text', label: 'field.streetNumber', validators: [required] },
        zipCode: { schema: 'text', label: 'field.zipCode', validators: [required] },
        city: { schema: 'text', label: 'field.city', validators: [required] },
      }
    },

    hasInvoice: { schema: 'checkbox', label: 'field.hasInvoice' },

    hasBilling: { schema: 'checkbox', label: 'field.hasBilling' },

    billingAddress: {
      schema: 'group', label: 'field.billingAddress', children: {
        firstName: { schema: 'text', label: 'field.firstName', validators: [billingRequired] },
        lastName: { schema: 'text', label: 'field.lastName', validators: [billingRequired] },
        email: { schema: 'text', label: 'field.email', validators: [billingRequired, email] },
        phoneNumber: { schema: 'text', label: 'field.phoneNumber', validators: [billingRequired] },
        country: { schema: 'select', label: 'field.country', options: options?.countries, validators: [billingRequired] },
        region: {
          schema: 'select', label: 'field.region', options: options?.regions,
          validators: [billingRequired],
          disabled: billingHiddenIfNotItaly,
          hidden: billingHiddenIfNotItaly,
        },
        province: {
          schema: 'autocomplete', label: 'field.province', options: options?.provinces,
          validators: [billingRequired],
          disabled: billingHiddenIfNotItaly,
          hidden: billingHiddenIfNotItaly,
        },
        address: { schema: 'text', label: 'field.address', validators: [billingRequired] },
        streetNumber: { schema: 'text', label: 'field.streetNumber', validators: [billingRequired] },
        zipCode: { schema: 'text', label: 'field.zipCode', validators: [billingRequired] },
        city: { schema: 'text', label: 'field.city', validators: [billingRequired] },
      },
      disabled: billingHidden,
      hidden: billingHidden,
    },

    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  }, [options]);

  useEffect(() => {
    if (checkout.shippingAddress) {
      setValue({
        shippingAddress: checkout.shippingAddress,
        hasInvoice: checkout.hasInvoice,
        hasBilling: checkout.hasBilling,
        billingAddress: checkout.billingAddress,
      });
    } else if (user) {
      setValue({ shippingAddress: user as Partial<IUserAddress> as any });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const onTest = () => {
    setValue({
      shippingAddress: {
        firstName: 'Jhon',
        lastName: 'Appleseed',
        email: 'jhon.appleseed@gmail.com',
        phoneNumber: '0721411112',
        country: { id: 'it', name: 'Italy' },
        region: { id: 10, name: 'Marche' },
        province: { id: 175, name: 'Pesaro Urbino' },
        address: 'Strada della Campanara',
        streetNumber: '15',
        zipCode: '61122',
        city: 'Pesaro',
      },
      hasInvoice: false,
      hasBilling: false,
    });
  };

  const onReset = () => {
    reset();
  };

  const [error, setError] = useState<Error>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.flags.valid && form.value) {
      console.log('CheckoutUserInfo.valid', form.value);
      try {
        setError(undefined);
        const response = await api.post<ICheckoutPartial>('/checkout/update', {
          action: 'info',
          checkout: { ...checkout, ...form.value, user },
        });
        setCheckout(response);
        if (typeof onUserInfo === 'function') {
          onUserInfo({ ...form.value, user });
        }
      } catch (error) {
        console.log('CheckoutUserInfo.error', error);
        setError(error as Error);
      }
    } else {
      console.log('CheckoutUserInfo.invalid');
      setTouched();
    }
  };

  const onNavToPrevious_ = () => {
    if (typeof onNavToPrevious === 'function') {
      onNavToPrevious();
    }
  };

  return (
    <>
      <Section>
        <Container>
          <Flex.Col justifyContent="space-between">
            <Form state={form} onSubmit={onSubmit}>
              <Flex.Col flex="1" rowGap="1rem">
                <Text size="4" fontWeight="700" marginBottom="1rem">Reference address</Text>
                <Text size="8" marginBottom="1rem" maxWidth="60ch">Specify your delivery or reference address to find your closest sales outlet for self-service pickup.</Text>
                <Grid.Row rowGap="1rem">
                  <FieldCollection collection={group} />
                </Grid.Row>
                {error && <FormError error={error}>{label('form.submit.error')}</FormError>}
                <FormTester form={form} onTest={onTest} onReset={onReset}></FormTester>
              </Flex.Col>
            </Form>
          </Flex.Col>
        </Container>
      </Section>
      <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <Flex.Row justifyContent="space-between">
            <Flex>
              <Button variant="secondary" onClick={onNavToPrevious_}>Back</Button>
            </Flex>
            <Flex>
              <Button variant="primary" onClick={onSubmit}>Proceed</Button>
            </Flex>
          </Flex.Row>
        </Container>
      </Section>
    </>
  );
};
