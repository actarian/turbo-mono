import { FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useApi, useApiPost, useCheckout, useCurrency, useLabel, useUnit } from '@websolute/hooks';
import { ICheckoutItem, ICheckoutPartial, ICheckoutStore } from '@websolute/models';
import { useEffect, useState } from 'react';
import { Badge, Box, Button, Container, Flex, Grid, Section, Text } from '../../components';
import { FieldCard } from '../../fields';
import { Form, FormError, RadioCard } from '../../forms';
import { CheckoutDiscount } from './checkout-discount';

export type CheckoutReviewProps = {
  onReview?: (store: ICheckoutStore) => void;
  onPrevious?: () => void;
}

export const CheckoutReview: React.FC<CheckoutReviewProps> = ({ onPrevious, onReview }: CheckoutReviewProps) => {
  const label = useLabel();

  const api = useApi();

  const currency = useCurrency();

  const distance = useUnit('kilometer');

  const checkout = useCheckout((state) => state.checkout);
  const setCheckout = useCheckout((state) => state.setCheckout);

  const [options] = useApiPost<{ stores: ICheckoutStore[] }>('/checkout/stores', checkout);

  // console.log('CheckoutReview', checkout);

  const [error, setError] = useState<Error>();

  const required = RequiredValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<{ store: ICheckoutStore }, FormGroup>({

    store: { schema: 'select', label: 'field.store', options: options?.stores, validators: [required] },

  }, [options]);

  useEffect(() => {
    if (checkout.store || checkout.discounts) {
      setValue({
        store: checkout.store,
      });
    } else if (options) {
      setValue({
        store: options.stores[0],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const selectedStore = form.value?.store;
  const shippingAddress = checkout.shippingAddress;
  const billingAddress = checkout.billingAddress;
  const delivery = checkout.delivery;
  const subTotal = checkout.subTotal || 0;
  const subTotalFull = checkout.subTotalFull || 0;
  const taxes = checkout.taxes || 0;
  const total = checkout.total || 0;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.flags.valid && form.value) {
      console.log('CheckoutReview.valid', form.value);
      try {
        setError(undefined);
        const store = form.value.store;
        const response = await api.post<ICheckoutPartial>('/checkout/update', {
          action: 'store',
          checkout: { ...checkout, store },
        });
        setCheckout(response);
        if (typeof onReview === 'function') {
          onReview(store);
        }
      } catch (error) {
        console.log('CheckoutReview.error', error);
        setError(error as Error);
      }
    } else {
      console.log('CheckoutReview.invalid');
      setTouched();
    }
  }

  const onPrevious_ = () => {
    if (typeof onPrevious === 'function') {
      onPrevious();
    }
  }

  const store = group.controls.store;

  const onStoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    group.controls.store.value = store?.options?.find(x => x.id.toString() === event.target.value);
  }

  return (
    <>
      <Section>
        <Container>
          <Flex.Col gap="2rem" flexDirectionMd="row">
            <Flex flexMd="1 1 calc(100% - 375px - 2rem)" alignItemsMd="flex-start">
              <Form state={form} onSubmit={onSubmit}>
                <Flex.Col flex="1" rowGap="2rem">
                  <Text size="4" fontWeight="700">Reference store</Text>
                  <Text size="8" marginBottom="1rem">Your suggested closest sales outlet for self-service pickup.</Text>
                  {selectedStore &&
                    <Flex.Col marginBottom="1rem">
                      <Text size="7" fontWeight="700">{selectedStore.name}</Text>
                      <Text>{selectedStore.address}, {selectedStore.streetNumber}</Text>
                      <Text>{selectedStore.zipCode} {selectedStore.city} {selectedStore.country?.name}</Text>
                      <Text>{selectedStore.phoneNumber}</Text>
                    </Flex.Col>
                  }
                  {true && store &&
                    <RadioCard.Group initialValue={store.value?.id.toString()} onChange={onStoreChange} maxWidth="60ch">
                      {store.options?.map(option => (
                        <RadioCard key={option.id} value={option.id.toString()}>
                          <RadioCard.Title>{option.name}</RadioCard.Title>
                          {option.category && <RadioCard.Abstract>{option.category.name}</RadioCard.Abstract>}
                          <RadioCard.Extra>{distance(option.distance)}</RadioCard.Extra>
                        </RadioCard>
                      ))}
                    </RadioCard.Group>
                  }
                  {false && <FieldCard control={group.controls.store} />}
                  {error && <FormError error={error}>{label('form.submit.error')}</FormError>}
                  <Grid.Row padding="2em 0">
                    <Grid md={6}>
                      {shippingAddress &&
                        <Flex.Col gap="1rem">
                          <Text size="4" fontWeight="700">Shipping address</Text>
                          <Flex.Col>
                            <Text size="7" fontWeight="700">{shippingAddress.firstName} {shippingAddress.lastName}</Text>
                            <Text>{shippingAddress.address}, {shippingAddress.streetNumber}</Text>
                            <Text>{shippingAddress.zipCode} {shippingAddress.city} {shippingAddress.country?.name}</Text>
                            <Text>{shippingAddress.phoneNumber}</Text>
                            <Text>{shippingAddress.email}</Text>
                          </Flex.Col>
                        </Flex.Col>
                      }
                    </Grid>
                    <Grid md={6}>
                      {billingAddress &&
                        <Flex.Col gap="1rem">
                          <Text size="4" fontWeight="700">Billing address</Text>
                          <Flex.Col>
                            <Text size="7" fontWeight="700">{billingAddress.firstName} {billingAddress.lastName}</Text>
                            <Text>{billingAddress.address}, {billingAddress.streetNumber}</Text>
                            <Text>{billingAddress.zipCode} {billingAddress.city} {billingAddress.country?.name}</Text>
                            <Text>{billingAddress.phoneNumber}</Text>
                            <Text>{billingAddress.email}</Text>
                          </Flex.Col></Flex.Col>
                      }
                    </Grid>
                  </Grid.Row>
                </Flex.Col>
              </Form>
            </Flex>
            <Flex flexMd="0 0 375px" alignItemsMd="flex-start">
              <Flex.Col gap="1rem" positionMd="sticky" topMd="200px">
                <Flex.Col gap="1rem" padding="1rem" borderRadius="0.5em" border="1px solid var(--color-neutral-300)"
                  fontSize="0.9em" lineHeight="1">
                  <Flex.Row gap="1rem" fontWeight="700">
                    <Text flexGrow="1">Product</Text>
                    <Text flexBasis="40px" textAlign="right">Qty</Text>
                    <Text flexBasis="90px" textAlign="right">Price</Text>
                  </Flex.Row>
                  <Flex.Col flex="1" gap="1rem" padding="1rem 0"
                    borderTop="1px solid var(--color-neutral-300)"
                    borderBottom="1px solid var(--color-neutral-300)">
                    {checkout.items && checkout.items.map((item: ICheckoutItem, i: number) =>
                      <Flex.Row key={i} gap="1rem">
                        <Text flexGrow="1">{item.title}</Text>
                        <Text flexBasis="40px" textAlign="right">{item.qty}</Text>
                        <Flex.Col flexBasis="90px" alignItems="flex-end" textAlign="right">
                          <Text>{currency(item.qty * item.price)}</Text>
                          {item.fullPrice > item.price && <Text size="11" textDecoration="line-through" color="var(--color-neutral-400)">{currency(item.fullPrice * item.qty)}</Text>}
                        </Flex.Col>
                      </Flex.Row>
                    )}
                  </Flex.Col>
                  <Flex.Row gap="1rem">
                    <Text flexGrow="1">Subtotal</Text>
                    <Text flexBasis="40px" textAlign="right">&nbsp;</Text>
                    <Flex.Col flexBasis="90px" alignItems="flex-end" textAlign="right">
                      <Text>{currency(subTotal)}</Text>
                      {subTotalFull > subTotal && <Text size="11" textDecoration="line-through" color="var(--color-neutral-400)">{currency(subTotalFull)}</Text>}
                    </Flex.Col>
                  </Flex.Row>
                  {checkout.discounts && checkout.discounts.map((item, i) =>
                    <Flex.Row key={i} gap="1rem">
                      <Text flexGrow="1">Discount <Badge>{item.name}</Badge></Text>
                      <Text flexBasis="40px" textAlign="right">{item.abstract}</Text>
                      <Text flexBasis="90px" textAlign="right">{currency(item.price)}</Text>
                    </Flex.Row>
                  )}
                  {taxes > 0 &&
                    <Flex.Row gap="1rem">
                      <Text flexGrow="1">Taxes</Text>
                      <Text flexBasis="40px" textAlign="right">&nbsp;</Text>
                      <Text flexBasis="90px" textAlign="right">{currency(taxes)}</Text>
                    </Flex.Row>
                  }
                  {delivery &&
                    <Flex.Row gap="1rem">
                      <Text flexGrow="1">{delivery.name}</Text>
                      <Text flexBasis="40px" textAlign="right">&nbsp;</Text>
                      <Text flexBasis="90px" textAlign="right">{currency(delivery.price)}</Text>
                    </Flex.Row>
                  }
                  <Flex.Row gap="1rem" fontWeight="700" marginBottom="1rem">
                    <Text flexGrow="1">Total</Text>
                    <Text flexBasis="40px" textAlign="right">&nbsp;</Text>
                    <Text flexBasis="90px" textAlign="right">{currency(total)}</Text>
                  </Flex.Row>
                </Flex.Col>
                <Box padding="1rem" borderRadius="0.5em" border="1px solid var(--color-neutral-300)">
                  <CheckoutDiscount />
                </Box>
              </Flex.Col>
            </Flex>
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
