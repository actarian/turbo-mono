import { getClassNames } from '@websolute/core';
import { scrollToY, useApi, useCheckout } from '@websolute/hooks';
import { ICheckoutDelivery, ICheckoutInfo, ICheckoutItem, ICheckoutPartial, ICheckoutPayment, ICheckoutStore } from '@websolute/models';
import { useState } from 'react';
import styled from 'styled-components';
import { Container, Flex, Section } from '../../components';
import { UIStyledComponentProps } from '../../components/types';
import { CheckoutBasket } from './checkout-basket';
import { CheckoutDelivery } from './checkout-delivery';
import { CheckoutInfo } from './checkout-info';
import { CheckoutPayment } from './checkout-payment';
import { CheckoutReview } from './checkout-review';

export enum CheckoutStatus {
  None = -1,
  Basket = 0,
  Info = 1,
  Delivery = 2,
  Review = 3,
  Payment = 4,
  Complete = 5,
  Error = 6,
}

const StyledWizard = styled(Flex.Row)`
  counter-reset: steps;

  & > div {
    counter-increment: steps;
		text-transform: uppercase;
		opacity: 0.25;

    &:before {
      content: counter(steps) ". ";
      display: block;
      font-size: 48px;
      font-weight: 100;
      line-height: 1;
    }

    &.active {
      opacity: 1;
    }

    @media(max-width: 800px) {

      &:not(.active) {
        font-size: 0;
      }

      &:before {
        font-size: 1rem;
        font-weight: 700;
        margin-right: 0.5rem;
      }
    }
  }
`;

type Props = {
  onCheckout?: (checkout: ICheckoutPartial) => void;
};

export type CheckoutWizardProps = UIStyledComponentProps<Props>;

export const CheckoutWizard: React.FC<CheckoutWizardProps> = ({ onCheckout, ...props }: CheckoutWizardProps) => {

  const api = useApi();

  const checkout = useCheckout((state) => state.checkout);
  const { setCheckout } = useCheckout((state) => state.actions);
  const [status, setStatus] = useState<CheckoutStatus>(CheckoutStatus.Basket);

  const onCheckout_ = (checkout: ICheckoutPartial) => {
    // setCheckout(checkout);
    if (typeof onCheckout === 'function') {
      onCheckout(checkout);
    }
    scrollToY(0);
  };

  // 1.
  const onBasket = (items: ICheckoutItem[]) => {
    console.log('CheckoutWizard.onBasket', items);
    onCheckout_({ ...checkout, items });
    setStatus(CheckoutStatus.Info);
  };

  // 2.
  const onInfo = (info: ICheckoutInfo) => {
    console.log('CheckoutWizard.onInfo', info);
    onCheckout_({ ...checkout, ...info });
    setStatus(CheckoutStatus.Delivery);
  };

  // 3.
  const onDelivery = (delivery: ICheckoutDelivery) => {
    console.log('CheckoutWizard.onDelivery', delivery);
    onCheckout_({ ...checkout, delivery });
    setStatus(CheckoutStatus.Review);
  };

  // 4.
  const onReview = (store: ICheckoutStore) => {
    console.log('CheckoutWizard.onReview', store);
    onCheckout_({ ...checkout, store });
    setStatus(CheckoutStatus.Payment);
  };

  // 5.
  const onPayment = async (payment: ICheckoutPayment) => {
    console.log('CheckoutWizard.onPayment', payment);
    try {
      const response = await api.post('/checkout/payment', { ...checkout, payment });
      // console.log('onPayment.response', response);
      window.location.href = response.redirectUrl;
    } catch (error) {
      console.error('onPayment.error', error);
    }

    /*
    onCheckout_({ ...checkout, payment });
    setStatus(CheckoutStatus.Complete);
    */

  };

  const onPrevious = () => {
    console.log('CheckoutWizard.onPrevious');
    if (status > CheckoutStatus.Basket) {
      setStatus(status - 1);
    }
    scrollToY(0);
  };

  return (
    <>
      <Section position="sticky" top="80px" padding="1rem 0" zIndex="800" background="var(--color-primary-100)">
        <Container>
          <StyledWizard justifyContent="space-between">
            <Flex className={getClassNames({ active: status === CheckoutStatus.Basket })}>Basket</Flex>
            <Flex className={getClassNames({ active: status === CheckoutStatus.Info })}>User data</Flex>
            <Flex className={getClassNames({ active: status === CheckoutStatus.Delivery })}>Delivery</Flex>
            <Flex className={getClassNames({ active: status === CheckoutStatus.Review })}>Review</Flex>
            <Flex className={getClassNames({ active: status === CheckoutStatus.Payment })}>Payment</Flex>
            <Flex className={getClassNames({ active: status === CheckoutStatus.Complete })}>Complete</Flex>
          </StyledWizard>
        </Container>
      </Section>
      {status === CheckoutStatus.Basket && <CheckoutBasket onBasket={onBasket} />}
      {status === CheckoutStatus.Info && <CheckoutInfo onInfo={onInfo} onPrevious={onPrevious} />}
      {status === CheckoutStatus.Delivery && <CheckoutDelivery onDelivery={onDelivery} onPrevious={onPrevious} />}
      {status === CheckoutStatus.Review && <CheckoutReview onReview={onReview} onPrevious={onPrevious} />}
      {status === CheckoutStatus.Payment && <CheckoutPayment onPayment={onPayment} onPrevious={onPrevious} />}
    </>
  );
};
