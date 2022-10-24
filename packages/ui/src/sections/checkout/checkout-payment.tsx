import { IOption } from '@websolute/core';
import { FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useApiPost, useLabel } from '@websolute/hooks';
import { IMedia } from '@websolute/models';
import { useEffect, useState } from 'react';
import { Button, Container, Flex, Section, Text } from '../../components';
import { FieldCard } from '../../fields';
import { Form, FormError, RadioCard } from '../../forms';
import { useCheckout } from '../../hooks';

export type IPaymentOption = IOption & {
  abstract?: string;
  media?: IMedia;
}

export type IPaymentOptions = {
  payments: IPaymentOption[];
}

export type IPayment = {
  payment: IPaymentOption;
}

export interface CheckoutPaymentProps {
  onPayment?: (data: IPayment) => void;
  onPrevious?: () => void;
}

const CheckoutPayment: React.FC<CheckoutPaymentProps> = ({ onPrevious, onPayment }: CheckoutPaymentProps) => {
  const label = useLabel();

  const checkout = useCheckout((state) => state.checkout);

  const { response: options } = useApiPost<IPaymentOptions>('/checkout/payments', checkout);

  const [error, setError] = useState<Error>();

  const required = RequiredValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IPayment, FormGroup>({

    payment: { schema: 'select', label: 'field.payment', options: options?.payments, validators: [required] },

  }, [options]);

  useEffect(() => {
    if (checkout.payment) {
      setValue(checkout.payment);
    } else if (options) {
      setValue({
        payment: options.payments[0]
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.flags.valid && form.value) {
      console.log('CheckoutPayment.valid', form.value);
      try {
        setError(undefined);
        if (typeof onPayment === 'function') {
          onPayment(form.value);
        }
      } catch (error) {
        console.log('CheckoutPayment.error', error);
        setError(error as Error);
      }
    } else {
      console.log('CheckoutPayment.invalid');
      setTouched();
    }
  }

  const onPrevious_ = () => {
    if (typeof onPrevious === 'function') {
      onPrevious();
    }
  }

  const payment = group.controls.payment;

  const onPaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    group.controls.payment.value = payment?.options?.find(x => x.id.toString() === event.target.value);
  }

  return (
    <>
      <Section>
        <Container>
          <Form state={form} onSubmit={onSubmit}>
            <Flex.Col flex="1" rowGap="2rem">
              <Text size="4" fontWeight="700">Select a payment method</Text>
              {true && payment &&
                <RadioCard.Group initialValue={payment.value?.id.toString()} onChange={onPaymentChange}>
                  {payment.options?.map(option => (
                    <RadioCard key={option.id} value={option.id.toString()}>
                      <RadioCard.Title>{option.name}</RadioCard.Title>
                      {option.abstract && <RadioCard.Abstract dangerouslySetInnerHTML={{ __html: option.abstract }}></RadioCard.Abstract>}
                      {option.media && <RadioCard.Media item={option.media} />}
                    </RadioCard>
                  ))}
                </RadioCard.Group>
              }
              {false && <FieldCard control={group.controls.payment} />}
              {error && <FormError error={error}>{label('form.submit.error')}</FormError>}
            </Flex.Col>
          </Form>
        </Container>
      </Section>
      <Section position="sticky" bottom="0" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <Flex.Row justifyContent="space-between">
            <Flex>
              <Button variant="secondary" onClick={onPrevious_}>Back</Button>
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

export default CheckoutPayment;
