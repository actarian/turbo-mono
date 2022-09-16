import { getClassNames } from '@websolute/core';
import React, { MouseEvent, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '../../components/button/button';
import { useModalContext } from './modal-context';

interface Props {
  className?: string;
  passive?: boolean;
  disabled?: boolean;
  onClick?: (event: ModalButtonEvent) => void;
}

const defaultProps = {
  className: '',
  passive: false,
  disabled: false,
};

export type ModalButtonProps = Props & Omit<ButtonProps, keyof Props>

const StyledButton = styled(Button)`
  /*
  font-size: 0.75rem;
  border: none;
  color: {color};
  background-color: var(--color-neutral-100);
  */
  /*
  flex: 1;
  display: flex;
  height: 3.5625rem;
  border-radius: 0;
  min-width: 0;
  */
  align-items: center;
  justify-content: center;
  /*
  &:hover,
  &:focus {
    color: {disabled ? color : (theme as any).color.neutral900};
    background-color: {disabled ? bgColor : (theme as any).color.primary100};
  }
  */
`;

const ModalButtonComponent = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ModalButtonProps | any> // !!! any
>(
  (
    { className, children, onClick, passive, disabled, ...props }: React.PropsWithChildren<ModalButtonProps> & typeof defaultProps, ref: React.Ref<HTMLButtonElement | null>) => {

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
      // console.log('onButtonClick', disabled, onClick);
      if (onClick) {
        onClick(actionEvent);
      }
    }

    /*
    const color = useMemo(() => {
      return passive ? (theme as any).color.primary500 : (theme as any).color.neutral900;
    }, [(theme as any).color, passive, disabled]);

    const bgColor = useMemo(() => {
      return disabled ? (theme as any).color.primary100 : (theme as any).color.neutral100;
    }, [(theme as any).color, disabled]);
    */

    // const { className: resolveClassName, styles } = css`
    const resolveClassName = '.my-class'; // !!!

    const overrideProps = { ...props, effect: false, ref: btnRef };

    const classNames = getClassNames(resolveClassName, className);

    return (
      <StyledButton variant="default" className={classNames} {...overrideProps} onClick={onButtonClick}
      // disabled={disabled} // !!!
      >
        {children}
      </StyledButton>
    )
  },
)

ModalButtonComponent.defaultProps = defaultProps;
ModalButtonComponent.displayName = 'ModalButton';

export default ModalButtonComponent;

export type ModalButtonEvent = MouseEvent<HTMLButtonElement> & {
  close: () => void
}
