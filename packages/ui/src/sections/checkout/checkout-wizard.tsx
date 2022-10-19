import { getClassNames } from '@websolute/core';
import { CheckoutStatus, scrollToY, useCheckout } from '@websolute/hooks';
import { ICartItem } from '@websolute/models';
import { useState } from 'react';
import styled from 'styled-components';
import { Container, Flex, Section } from '../../components';
import type { UIStyledComponentProps } from '../../components/types';
import CheckoutBasket from './checkout-basket';
import CheckoutComplete from './checkout-complete';
import type { ICheckoutDelivery } from './checkout-delivery';
import CheckoutDelivery from './checkout-delivery';
import type { ICheckoutInfo } from './checkout-info';
import CheckoutInfo from './checkout-info';
import type { ICheckoutPayment } from './checkout-payment';
import CheckoutPayment from './checkout-payment';
import type { ICheckoutReview } from './checkout-review';
import CheckoutReview from './checkout-review';

export type ICheckout = {
  items?: ICartItem[];
  info?: ICheckoutInfo;
  delivery?: ICheckoutDelivery;
  review?: ICheckoutReview;
  payment?: ICheckoutPayment;
}

const StyledWizard = styled(Flex.Row)`
  counter-reset: steps;
  &>div{
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
  }
`;

type Props = {
  onCheckout?: (checkout: ICheckout) => void;
}

export type CheckoutWizardProps = UIStyledComponentProps<Props>;

const CheckoutWizard: React.FC<CheckoutWizardProps> = ({ onCheckout, ...props }: CheckoutWizardProps) => {

  const status = useCheckout((state) => state.status);
  const setStatus = useCheckout((state) => state.setStatus);
  const [checkout, setCheckout] = useState<ICheckout>({})

  // 1.
  const onBasket = (items: ICartItem[]) => {
    console.log('CheckoutWizard.onBasket', items);
    onCheckout_({ items });
    setStatus(CheckoutStatus.Info);
  }

  // 2.
  const onInfo = (info: ICheckoutInfo) => {
    console.log('CheckoutWizard.onInfo', info);
    onCheckout_({ ...checkout, info });
    setStatus(CheckoutStatus.Delivery);
  }

  // 3.
  const onDelivery = (delivery: ICheckoutDelivery) => {
    console.log('CheckoutWizard.onDelivery', delivery);
    onCheckout_({ ...checkout, delivery });
    setStatus(CheckoutStatus.Review);
  }

  // 4.
  const onReview = (review: ICheckoutReview) => {
    console.log('CheckoutWizard.onReview', review);
    onCheckout_({ ...checkout, review });
    setStatus(CheckoutStatus.Payment);
  }

  // 5.
  const onPayment = (payment: ICheckoutPayment) => {
    console.log('CheckoutWizard.onPayment', payment);
    onCheckout_({ ...checkout, payment });
    setStatus(CheckoutStatus.Complete);
  }

  const onCheckout_ = (checkout: ICheckout) => {
    setCheckout(checkout);
    if (typeof onCheckout === 'function') {
      onCheckout(checkout);
    }
    scrollToY(0);
  }

  const onPrevious = () => {
    console.log('CheckoutWizard.onPrevious');
    if (status > CheckoutStatus.Basket) {
      setStatus(status - 1);
    }
    scrollToY(0);
  }

  if (status === CheckoutStatus.None) {
    return null;
  }

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
      {status === CheckoutStatus.Complete && <CheckoutComplete />}
    </>
  )
}

export default CheckoutWizard;
