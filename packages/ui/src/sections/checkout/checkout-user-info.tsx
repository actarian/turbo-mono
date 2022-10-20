import { IEquatable, IOption } from '@websolute/core';
import { EmailValidator, FormGroup, RequiredIfValidator, RequiredTrueValidator, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useApiGet, useLabel } from '@websolute/hooks';
import { IUser } from '@websolute/models';
import { useEffect, useState } from 'react';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import { FieldCollection } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';
import { useCheckout } from '../../hooks';

export type IUserInfoOptions = {
  countries: IOption[];
  provinces: IOption[];
  regions: IOption[];
}

export type IUserDetailedInfo = {
  firstName: string;
  lastName: string;
  address: string,
  streetNumber: string,
  zipCode: string;
  city: string;
  country: IOption;
  region?: IOption,
  province?: IOption,
  email: string;
  phoneNumber: string;
}

export type IUserInfo = {
  id?: IEquatable;
  firstName: string;
  lastName: string;
  email: string;
  shippingInfo: IUserDetailedInfo;
  invoicingInfo?: IUserDetailedInfo;
}

export interface CheckoutUserInfoProps {
  user?: IUser;
  onUserInfo?: (shippingInfo: IUserInfo) => void;
  onNavToPrevious?: () => void;
}

const CheckoutUserInfo: React.FC<CheckoutUserInfoProps> = ({ user, onUserInfo, onNavToPrevious }: CheckoutUserInfoProps) => {
  const label = useLabel();

  const checkout = useCheckout((state) => state.checkout);

  const { response: options } = useApiGet<IUserInfoOptions>('/checkout/info');

  const required = RequiredValidator();
  const requiredTrue = RequiredTrueValidator();
  const email = EmailValidator();
  const requiredShippingIfItaly = RequiredIfValidator((value, rootValue) => rootValue?.shippingInfo?.country === 'it');
  const requiredInvoicingIfItaly = RequiredIfValidator((value, rootValue) => rootValue?.invoicingInfo?.country === 'it');

  const hiddenShippingIfNotItaly = (value: any, rootValue: any) => !(rootValue?.shippingInfo?.country === 'it');
  const hiddenInvoicingIfNotItaly = (value: any, rootValue: any) => !(rootValue?.shippingInfo?.country === 'it');

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserInfo, FormGroup>({

    id: { schema: 'text', hidden: true },
    firstName: { schema: 'text', label: 'field.firstName', validators: [required] },
    lastName: { schema: 'text', label: 'field.lastName', validators: [required] },
    email: { schema: 'text', label: 'field.email', validators: [required, email] },

    shippingInfo: {
      schema: 'group', label: 'field.shippingInfo', children: {
        firstName: { schema: 'text', label: 'field.firstName', validators: [required] },
        lastName: { schema: 'text', label: 'field.lastName', validators: [required] },
        email: { schema: 'text', label: 'field.email', validators: [required, email] },
        phoneNumber: { schema: 'text', label: 'field.phoneNumber', validators: [required] },
        country: { schema: 'select', label: 'field.country', options: options?.countries, validators: [required] },
        region: {
          schema: 'select', label: 'field.region', options: options?.regions,
          validators: requiredShippingIfItaly,
          disabled: hiddenShippingIfNotItaly,
          hidden: hiddenShippingIfNotItaly,
        },
        province: {
          schema: 'autocomplete', label: 'field.province', options: options?.provinces,
          validators: requiredShippingIfItaly,
          disabled: hiddenShippingIfNotItaly,
          hidden: hiddenShippingIfNotItaly,
        },
        address: { schema: 'text', label: 'field.address', validators: [required] },
        streetNumber: { schema: 'text', label: 'field.streetNumber', validators: [required] },
        zipCode: { schema: 'text', label: 'field.zipCode', validators: [required] },
        city: { schema: 'text', label: 'field.city', validators: [required] },
      }
    },

    checkRequest: { schema: 'text', value: 'window.antiforgery', hidden: true }, // todo take antiforgery token from server
    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  }, [options]);

  useEffect(() => {
    if (checkout.info) {
      setValue(checkout.info);
    } else if (user) {
      setValue(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const onTest = () => {
    setValue({
      firstName: 'Jhon',
      lastName: 'Appleseed',
      email: 'jhon.appleseed@gmail.com',
      shippingInfo: {
        firstName: 'Jhon',
        lastName: 'Appleseed',
        email: 'jhon.appleseed@gmail.com',
        phoneNumber: '0721411112',
        country: { id: 'us', name: 'United States' },
        address: 'Strada della Campanara',
        streetNumber: '25',
        zipCode: '61122',
        city: 'Pesaro',
      }
    });
  }

  const onReset = () => {
    reset();
  }

  const [error, setError] = useState<Error>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.flags.valid && form.value) {
      console.log('CheckoutUserInfo.valid', form.value);
      try {
        setError(undefined);
        if (typeof onUserInfo === 'function') {
          onUserInfo(form.value);
        }
      } catch (error) {
        console.log('CheckoutUserInfo.error', error);
        setError(error as Error);
      }
    } else {
      console.log('CheckoutUserInfo.invalid');
      setTouched();
    }
  }

  const onNavToPrevious_ = () => {
    if (typeof onNavToPrevious === 'function') {
      onNavToPrevious();
    }
  }

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

export default CheckoutUserInfo;
