import { FormGroup, RequiredValidator, useFormBuilder } from '@websolute/forms';
import { useApi, useCheckout, useLabel } from '@websolute/hooks';
import type { ICheckoutDiscount } from '@websolute/models';
import { useState } from 'react';
import { Button, Flex } from '../../components';
import { FieldText } from '../../fields';

export interface CheckoutDiscountProps {
  onDiscount?: (discounts: ICheckoutDiscount[]) => void;
}

const CheckoutDiscount: React.FC<CheckoutDiscountProps> = ({ onDiscount }: CheckoutDiscountProps) => {
  const label = useLabel();

  const api = useApi();

  const checkout = useCheckout((state) => state.checkout);
  const setCheckout = useCheckout((state) => state.setCheckout);

  // console.log('CheckoutDiscount', checkout);

  const [error, setError] = useState<Error>();

  const required = RequiredValidator();

  const [form, setValue, setTouched, reset, group] = useFormBuilder<{ discountCode: number }, FormGroup>({

    discountCode: { schema: 'text', label: 'field.discountCode' },

  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (form.flags.valid && form.value) {
      console.log('CheckoutDiscount.valid', form.value);
      try {
        setError(undefined);
        const response = await api.post('/checkout/discount', { checkout, discountCode: form.value.discountCode });
        setCheckout(response);
        if (typeof onDiscount === 'function') {
          onDiscount(response);
        }
        reset();
      } catch (error) {
        console.log('CheckoutDiscount.error', error);
        setError(error as Error);
      }
    } else {
      console.log('CheckoutDiscount.invalid');
      setTouched();
    }
  }

  return (
    <>
      <Flex.Row gap="1rem">
        <FieldText control={group.controls.discountCode} after={<Button variant="secondary" onClick={onSubmit}>{label('form.apply')}</Button>} />
      </Flex.Row>
    </>
  );
};

export default CheckoutDiscount;
