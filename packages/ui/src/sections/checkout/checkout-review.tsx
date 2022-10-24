import { IOption } from '@websolute/core';
import { FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useApiPost, useCurrency, useLabel, useUnit } from '@websolute/hooks';
import { useEffect, useState } from 'react';
import { Button, Container, Flex, Grid, Section, Text } from '../../components';
import { FieldCard } from '../../fields';
import { Form, FormError, RadioCard } from '../../forms';
import { useCheckout } from '../../hooks';

export type IStoreOption = IOption & {
  category?: IOption;
  address?: string;
  streetNumber?: string;
  zipCode?: string;
  city?: string;
  country?: IOption;
  phoneNumber?: string;
  email?: string;
  timetable?: string[];
  position?: {
    latitude: number;
    longitude: number;
  };
  distance?: number;
  rank?: number;
}

export type IStoreOptions = {
  stores: IStoreOption[];
}

export type IReview = {
  store: IStoreOption;
}

export interface CheckoutReviewProps {
  onReview?: (data: IReview) => void;
  onPrevious?: () => void;
}

const CheckoutReview: React.FC<CheckoutReviewProps> = ({ onPrevious, onReview }: CheckoutReviewProps) => {
  const label = useLabel();

  const currency = useCurrency();

  const distance = useUnit('kilometer');

  const checkout = useCheckout((state) => state.checkout);

  const { response: options } = useApiPost<IStoreOptions>('/checkout/stores', checkout);

  // console.log('CheckoutReview', checkout);

  const [error, setError] = useState<Error>();

  const required = RequiredValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<IReview, FormGroup>({

    store: { schema: 'select', label: 'field.store', options: options?.stores, validators: [required] },

  }, [options]);

  useEffect(() => {
    if (checkout.review) {
      setValue(checkout.review);
    } else if (options) {
      setValue({
        store: options.stores[0]
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const selectedStore = form.value?.store;
  const shippingInfo = checkout.info?.shippingInfo;
  const invoicingInfo = checkout.info?.invoicingInfo;
  const delivery = checkout.delivery?.delivery;
  const deliveryPrice = delivery?.price || 0;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.flags.valid && form.value) {
      console.log('CheckoutReview.valid', form.value);
      try {
        setError(undefined);
        if (typeof onReview === 'function') {
          onReview(form.value);
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

  const total = checkout.items ? checkout.items.reduce((p, c) => {
    return p + c.price * c.qty;
  }, deliveryPrice) : deliveryPrice;

  const totalPrice = currency(total);

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
          <Flex.Col gap="var(--grid-column-gap)" flexDirectionMd="row">
            <Flex flexMd="1" alignItemsMd="flex-start">
              <Form state={form} onSubmit={onSubmit} maxWidth="60ch">
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
                    <RadioCard.Group initialValue={store.value?.id.toString()} onChange={onStoreChange}>
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
                      {shippingInfo &&
                        <Flex.Col gap="1rem">
                          <Text size="4" fontWeight="700">Shipping information</Text>
                          <Flex.Col>
                            <Text size="7" fontWeight="700">{shippingInfo.firstName} {shippingInfo.lastName}</Text>
                            <Text>{shippingInfo.address}, {shippingInfo.streetNumber}</Text>
                            <Text>{shippingInfo.zipCode} {shippingInfo.city} {shippingInfo.country?.name}</Text>
                            <Text>{shippingInfo.phoneNumber}</Text>
                            <Text>{shippingInfo.email}</Text>
                          </Flex.Col>
                        </Flex.Col>
                      }
                    </Grid>
                    <Grid md={6}>
                      {invoicingInfo &&
                        <Flex.Col gap="1rem">
                          <Text size="4" fontWeight="700">Invoicing information</Text>
                          <Flex.Col>
                            <Text size="4" fontWeight="700">{invoicingInfo.firstName} {invoicingInfo.lastName}</Text>
                            <Text>{invoicingInfo.address}, {invoicingInfo.streetNumber}</Text>
                            <Text>{invoicingInfo.zipCode} {invoicingInfo.city} {invoicingInfo.country?.name}</Text>
                            <Text>{invoicingInfo.phoneNumber}</Text>
                            <Text>{invoicingInfo.email}</Text>
                          </Flex.Col></Flex.Col>
                      }
                    </Grid>
                  </Grid.Row>
                </Flex.Col>
              </Form>
            </Flex>
            <Flex flexBasisMd="375px" alignItemsMd="flex-start">
              <Flex.Col gap="1rem" padding="1rem" borderRadius="0.5em" border="1px solid var(--color-neutral-300)"
                fontSize="0.9em"
                lineHeight="1"
                positionMd="sticky"
                topMd="200px"
              >
                <Flex.Row gap="1rem" fontWeight="700">
                  <Text flexGrow="1">Product</Text>
                  <Text flexBasis="40px" textAlign="right">Qty</Text>
                  <Text flexBasis="90px" textAlign="right">Price</Text>
                </Flex.Row>
                <Flex.Col flex="1" gap="1rem" padding="1rem 0"
                  borderTop="1px solid var(--color-neutral-300)"
                  borderBottom="1px solid var(--color-neutral-300)">
                  {checkout.items && checkout.items.map((item, i) =>
                    <Flex.Row key={i} gap="1rem">
                      <Text flexGrow="1">{item.title}</Text>
                      <Text flexBasis="40px" textAlign="right">{item.qty}</Text>
                      <Text flexBasis="90px" textAlign="right">{currency(item.qty * item.price)}</Text>
                    </Flex.Row>
                  )}
                </Flex.Col>
                {delivery &&
                  <Flex.Row gap="1rem">
                    <Text flexGrow="1">{delivery.name}</Text>
                    <Text flexBasis="40px" textAlign="right">&nbsp;</Text>
                    <Text flexBasis="90px" textAlign="right">{currency(delivery.price)}</Text>
                  </Flex.Row>
                }
                <Flex.Row gap="1rem" fontWeight="700">
                  <Text flexGrow="1">Total</Text>
                  <Text flexBasis="40px" textAlign="right">&nbsp;</Text>
                  <Text flexBasis="90px" textAlign="right">{totalPrice}</Text>
                </Flex.Row>
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

export default CheckoutReview;
