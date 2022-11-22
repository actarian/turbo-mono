import { withSchema } from '@websolute/core';
import { KeyCode, useBodyScroll, useKeyboard, usePortal } from '@websolute/hooks';
import React, { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../backdrop/backdrop';
import { UIComponentProps } from '../types';
import { getChildsByType } from '../utils';
import { ModalButton } from './modal-button';
import { ModalClose } from './modal-close';
import { ModalContent } from './modal-content';
import { ModalConfig, ModalContext } from './modal-context';
import { ModalFooter } from './modal-footer';
import { ModalSubtitle } from './modal-subtitle';
import { ModalTitle } from './modal-title';
import { ModalWrapper } from './modal-wrapper';

const defaultProps = {
  width: '26rem',
  backdropClassName: '',
  positionClassName: '',
  layerClassName: '',
  wrapClassName: '',
  disableBackdropClick: false,
  keyboard: true,
};

type Props = {
  width?: string;
  backdropClassName?: string;
  positionClassName?: string;
  layerClassName?: string;
  wrapClassName?: string;
  visible?: boolean;
  disableBackdropClick?: boolean;
  keyboard?: boolean;
  onClose?: () => void;
  onContentClick?: (event: MouseEvent<HTMLElement>) => void;
};

export type ModalProps = UIComponentProps<Props>;

const ModalBase: React.FC<React.PropsWithChildren<ModalProps | any>> = ({
  width,
  backdropClassName,
  positionClassName,
  layerClassName,
  wrapClassName,
  disableBackdropClick,
  keyboard,
  visible: customVisible,
  onClose,
  children,
  onContentClick,
}: React.PropsWithChildren<ModalProps> & typeof defaultProps) => { // !!! any

  const portal = usePortal('modal');

  const [visible, setVisible] = useState<boolean>(false);

  const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 });

  const [buttonChildren, noButtonChildren] = getChildsByType(children, ModalButton);
  const hasButtons = buttonChildren && React.Children.count(buttonChildren) > 0;

  const [closeChildren, otherChildren] = getChildsByType(noButtonChildren, ModalClose);
  const hasClose = closeChildren && React.Children.count(closeChildren) > 0;

  const close = useCallback(() => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
    setBodyHidden(false);
  }, [onClose, setBodyHidden]);

  useEffect(() => {
    if (typeof customVisible === 'undefined') {
      return;
    }
    setVisible(customVisible);
    setBodyHidden(customVisible);
  }, [customVisible, setBodyHidden]);

  const { bindings } = useKeyboard(() => {
    if (keyboard) {
      close();
    }
  }, KeyCode.Escape, { disableGlobalEvent: true });

  const onBackdropClick = () => {
    if (!disableBackdropClick) {
      close();
    }
  };

  const modalContextValue: ModalConfig = useMemo(() => ({ close }), [close]);

  if (!portal) {
    return null;
  }

  return createPortal((
    <ModalContext.Provider value={modalContextValue}>
      <Backdrop width={width}
        positionClassName={positionClassName} backdropClassName={backdropClassName} layerClassName={layerClassName}
        visible={visible} onClick={onBackdropClick} onContentClick={onContentClick}
        {...bindings}>
        <ModalWrapper className={wrapClassName} visible={visible}>
          {(React.Children.map(otherChildren, child => {
            if (React.isValidElement(child) && child.type === ModalTitle) {
              return React.cloneElement(child, { ...child.props, onClose: child.props.onClose || onBackdropClick });
            } else {
              return child;
            }
          }))}
          {hasButtons && <ModalFooter>{buttonChildren}</ModalFooter>}
          {hasClose && closeChildren}
        </ModalWrapper>
      </Backdrop>
    </ModalContext.Provider>
  ), portal);
};

export const Modal = withSchema(ModalBase, {
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  Content: ModalContent,
  Button: ModalButton,
  Close: ModalClose,
  displayName: 'Modal',
  defaultProps,
});

export type { ModalButtonProps } from './modal-button';
export type { ModalContentProps } from './modal-content';
export type { ModalSubtitleProps } from './modal-subtitle';
export type { ModalTitleProps } from './modal-title';

