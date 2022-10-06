import { KeyCode, useBodyScroll, useKeyboard, usePortal } from '@websolute/hooks';
import React, { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import type { UIComponentProps } from '../../components/types';
import { getChildsByType } from '../../components/utils';
import Backdrop from '../backdrop/backdrop';
import ModalButton from './modal-button';
import ModalContent from './modal-content';
import { ModalConfig, ModalContext } from './modal-context';
import ModalFooter from './modal-footer';
import ModalSubtitle from './modal-subtitle';
import ModalTitle from './modal-title';
import ModalWrapper from './modal-wrapper';

const defaultProps = {
  width: '26rem',
  backdropClassName: '',
  positionClassName: '',
  layerClassName: '',
  wrapClassName: '',
  disableBackdropClick: false,
  keyboard: true,
};

interface Props {
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
}

export type ModalProps = UIComponentProps<Props>;

const Modal: React.FC<React.PropsWithChildren<ModalProps | any>> = ({
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

  const [buttonChildren, otherChildren] = getChildsByType(children, ModalButton);

  const hasButtons = buttonChildren && React.Children.count(buttonChildren) > 0;

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
  }

  const modalContextValue: ModalConfig = useMemo(() => ({ close }), [close]);

  if (!portal) {
    return null;
  }

  return createPortal(
    <ModalContext.Provider value={modalContextValue}>
      <Backdrop width={width}
        positionClassName={positionClassName} backdropClassName={backdropClassName} layerClassName={layerClassName}
        visible={visible} onClick={onBackdropClick} onContentClick={onContentClick}
        {...bindings}>
        <ModalWrapper className={wrapClassName} visible={visible}>
          {false && otherChildren}
          {(React.Children.map(otherChildren, child => {
            if (React.isValidElement(child) && child.type === ModalTitle) {
              return React.cloneElement(child, { ...child.props, onClose: child.props.onClose || onBackdropClick });
            } else {
              return child;
            }
          }))}
          {hasButtons && <ModalFooter>{buttonChildren}</ModalFooter>}
        </ModalWrapper>
      </Backdrop>
    </ModalContext.Provider>
    , portal);
};

Modal.defaultProps = defaultProps;

Modal.displayName = 'Modal';

(Modal as IModal).Title = ModalTitle;
(Modal as IModal).Subtitle = ModalSubtitle;
(Modal as IModal).Content = ModalContent;
(Modal as IModal).Button = ModalButton;

export default Modal as IModal;

export type IModal = typeof Modal & {
  Title: typeof ModalTitle
  Subtitle: typeof ModalSubtitle
  Content: typeof ModalContent
  Button: typeof ModalButton
};

export type { ModalButtonProps } from './modal-button';
export type { ModalContentProps } from './modal-content';
export type { ModalSubtitleProps } from './modal-subtitle';
export type { ModalTitleProps } from './modal-title';

