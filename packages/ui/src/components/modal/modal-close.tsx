import { getClassNames } from '@websolute/core';
import { X } from '@websolute/icons';
import React, { MouseEvent, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '../button/button';
import { useModalContext } from './modal-context';

type Props = {
  className?: string;
  passive?: boolean;
  disabled?: boolean;
  onClick?: (event: ModalCloseEvent) => void;
};

const defaultProps = {
  className: '',
  passive: false,
  disabled: false,
};

export type ModalCloseProps = Props & Omit<ButtonProps, keyof Props>;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 100;
`;

export const ModalClose = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ModalCloseProps | any> // !!! any
>(
  (
    { className, children, onClick, passive, disabled, ...props }: React.PropsWithChildren<ModalCloseProps> & typeof defaultProps, ref: React.Ref<HTMLButtonElement | null>) => {

    const btnRef = useRef<HTMLButtonElement>(null);

    const { close } = useModalContext();

    useImperativeHandle(ref, () => btnRef.current);

    const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }
      const actionEvent = Object.assign({}, event, {
        close: () => close && close(),
      });
      if (onClick) {
        onClick(actionEvent);
      }
    };
    const overrideProps = { ...props, effect: false, ref: btnRef };
    const classNames = getClassNames(className);
    return (
      <StyledButton variant="circle" className={classNames} {...overrideProps} onClick={onButtonClick}>
        <X />
      </StyledButton>
    );
  },
);

ModalClose.defaultProps = defaultProps;
ModalClose.displayName = 'ModalClose';

export type ModalCloseEvent = MouseEvent<HTMLButtonElement> & {
  close: () => void
};
