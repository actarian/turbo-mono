import { httpGet, INamedEntity } from '@websolute/core';
import { EmailValidator, FormGroup, RequiredIfValidator, RequiredTrueValidator, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useLabel, useLayout } from '@websolute/hooks';
import { IUser } from '@websolute/models';
import { useEffect, useState } from 'react';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import { FieldCollection } from '../../fields';
import { Form, FormError, FormTester } from '../../forms';

export type IUserInfoOptions = {
  countries: INamedEntity[];
  provinces: INamedEntity[];
  regions: INamedEntity[];
}

export type IUserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  shippingInfo: {
    phoneNumber: string;
    address: string,
    streetNumber: string,
    zipCode: string;
    city: string;
    country: string;
    region?: string,
    province?: string,
  }
}

export interface CheckoutUserInfoProps {
  user?: IUser;
  onUserInfo?: (userInfo: IUserInfo) => void;
  onNavToPrevious?: () => void;
}

const CheckoutUserInfo: React.FC<CheckoutUserInfoProps> = ({ user, onUserInfo, onNavToPrevious }: CheckoutUserInfoProps) => {
  const label = useLabel();

  const layout = useLayout();

  const [options, setOptions] = useState<IUserInfoOptions>();

  useEffect(() => {
    const getData = async () => {
      try {
        const options: IUserInfoOptions = await httpGet(`/api/checkout/user-info?locale=${layout.locale}`);
        console.log('CheckoutUserInfo.getData /api/checkout/user-info', options);
        setOptions(options);
      } catch (error) {
        console.log('CheckoutUserInfo.getData.error', error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const required = RequiredValidator();
  const requiredTrue = RequiredTrueValidator();
  const email = EmailValidator();
  const requiredIfItaly = RequiredIfValidator((value, rootValue) => rootValue?.shippingInfo?.country === 'it');

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IUserInfo, FormGroup>({

    firstName: { schema: 'text', label: 'field.firstName', validators: [required] },
    lastName: { schema: 'text', label: 'field.lastName', validators: [required] },
    email: { schema: 'text', label: 'field.email', validators: [required, email] },

    shippingInfo: {
      schema: 'group', label: 'field.shippingInfo', children: {
        country: { schema: 'autocomplete', label: 'field.country', options: options?.countries, validators: [required] },
        region: { schema: 'autocomplete', label: 'field.region', options: options?.regions, validators: requiredIfItaly },
        province: { schema: 'autocomplete', label: 'field.province', options: options?.provinces, validators: requiredIfItaly },
        address: { schema: 'text', label: 'field.address', validators: [required] },
        streetNumber: { schema: 'text', label: 'field.streetNumber', validators: [required] },
        zipCode: { schema: 'text', label: 'field.zipCode', validators: [required] },
        city: { schema: 'text', label: 'field.city', validators: [required] },
        phoneNumber: { schema: 'text', label: 'field.phoneNumber', validators: [required] },
      }
    },
    checkRequest: { schema: 'text', value: 'window.antiforgery', hidden: true }, // todo take antiforgery token from server
    checkField: { schema: 'text', hidden: true }, // check hidden field for antiforgery

  }, [options]);

  useEffect(() => {
    if (user) {
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
        country: 'us',
        address: 'Strada della Campanara',
        streetNumber: '25',
        zipCode: '61122',
        city: 'Pesaro',
        phoneNumber: '0721411112',
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
                <Text size="6" fontWeight="700" marginBottom="1rem">Reference address</Text>
                <Text>Specify your delivery or reference address to find your closest sales outlet for self-service pickup.</Text>
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
