import { FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useApi, useApiPost, useCheckout, useCurrency, useLabel } from '@websolute/hooks';
import { ICheckoutDelivery, ICheckoutPartial } from '@websolute/models';
import { useEffect, useState } from 'react';
import { Button, Container, Flex, Section, Text } from '../../components';
import { FieldCard } from '../../fields';
import { Form, FormError, RadioCard } from '../../forms';

export type CheckoutDeliveryProps = {
  onDelivery?: (delivery: ICheckoutDelivery) => void;
  onPrevious?: () => void;
}

export const CheckoutDelivery: React.FC<CheckoutDeliveryProps> = ({ onPrevious, onDelivery }: CheckoutDeliveryProps) => {
  const label = useLabel();

  const currency = useCurrency();

  const api = useApi();

  const checkout = useCheckout((state) => state.checkout);
  const setCheckout = useCheckout((state) => state.setCheckout);

  const [options] = useApiPost<{ deliveries: ICheckoutDelivery[] }>('/checkout/deliveries', checkout);

  const [error, setError] = useState<Error>();

  const required = RequiredValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<{ delivery: ICheckoutDelivery }, FormGroup>({

    delivery: { schema: 'card', label: 'field.delivery', options: options?.deliveries, validators: [required] },

  }, [options]);

  useEffect(() => {
    if (checkout.delivery) {
      setValue({ delivery: checkout.delivery });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.flags.valid && form.value) {
      console.log('CheckoutDelivery.valid', form.value);
      try {
        setError(undefined);
        const delivery = form.value.delivery;
        const response: ICheckoutPartial = await api.post<ICheckoutPartial>('/checkout/update', {
          action: 'delivery',
          checkout: { ...checkout, delivery },
        });
        setCheckout(response);
        if (typeof onDelivery === 'function') {
          onDelivery(delivery);
        }
      } catch (error) {
        console.log('CheckoutDelivery.error', error);
        setError(error as Error);
      }
    } else {
      console.log('CheckoutDelivery.invalid');
      setTouched();
    }
  }

  const onPrevious_ = () => {
    if (typeof onPrevious === 'function') {
      onPrevious();
    }
  }

  const delivery = group.controls.delivery;

  const onDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    group.controls.delivery.value = delivery?.options?.find(x => x.id.toString() === event.target.value);
  }

  return (
    <>
      <Section>
        <Container minHeight="50vh">
          <Flex.Col justifyContent="space-between">
            <Form state={form} onSubmit={onSubmit}>
              <Flex.Col flex="1" rowGap="2rem">
                <Text size="4" fontWeight="700">Select the delivery method</Text>
                <Text size="8" marginBottom="1rem" maxWidth="60ch">Specify your delivery or reference address to find your closest sales outlet for self-service pickup.</Text>
                {true && delivery &&
                  <RadioCard.Group initialValue={delivery.value?.id.toString()} onChange={onDeliveryChange}>
                    {delivery.options?.map(option => (
                      <RadioCard key={option.id} value={option.id.toString()}>
                        <RadioCard.Title>{option.name}</RadioCard.Title>
                        {option.abstract && <RadioCard.Abstract dangerouslySetInnerHTML={{ __html: option.abstract }}></RadioCard.Abstract>}
                        {option.price > 0 && <RadioCard.Extra>{currency(option.price)}</RadioCard.Extra>}
                      </RadioCard>
                    ))}
                  </RadioCard.Group>
                }
                {false && <FieldCard control={group.controls.delivery} />}
                {error && <FormError error={error}>{label('form.submit.error')}</FormError>}
              </Flex.Col>
            </Form>
          </Flex.Col>
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
