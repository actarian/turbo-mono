import { withSchema } from '@websolute/core';
import { KeyCode, useBodyScroll, useKeyboard, usePortal } from '@websolute/hooks';
import React, { MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../../components/backdrop/backdrop';
import { UIComponentProps } from '../../components/types';
import { ModalContent } from '../modal/modal-content';
import { ModalSubtitle } from '../modal/modal-subtitle';
import { ModalTitle } from '../modal/modal-title';
import { DrawerWrapper } from './drawer-wrapper';
import { DrawerPlacement } from './helper';

type Props = {
  visible?: boolean;
  keyboard?: boolean;
  disableBackdropClick?: boolean;
  onClose?: () => void;
  onContentClick?: (event: MouseEvent<HTMLElement>) => void;
  wrapClassName?: string;
  placement?: DrawerPlacement;
}

export type DrawerProps = UIComponentProps<Props>;

const DrawerDefaultProps = {
  wrapClassName: '',
  keyboard: true,
  disableBackdropClick: false,
  placement: 'right' as DrawerPlacement,
};

const DrawerBase: React.FC<React.PropsWithChildren<DrawerProps | any>> = ({
  /*
  wrapClassName = '',
  keyboard = true,
  disableBackdropClick = false,
  placement = 'right' as DrawerPlacement,
  */
  wrapClassName,
  keyboard,
  disableBackdropClick,
  visible: customVisible,
  onClose,
  onContentClick,
  children,
  ...props
}: React.PropsWithChildren<DrawerProps> & typeof DrawerDefaultProps) => {
  const portal = usePortal('drawer');
  const [visible, setVisible] = useState<boolean>(false);
  const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 });

  const closeDrawer = () => {
    if (onClose) {
      onClose();
    }
    setVisible(false);
    setBodyHidden(false);
  }

  useEffect(() => {
    if (typeof customVisible === 'undefined') {
      return;
    }
    setVisible(customVisible);
    setBodyHidden(customVisible);
  }, [customVisible]);

  const { bindings } = useKeyboard(() => {
    if (keyboard) {
      closeDrawer();
    }
  }, KeyCode.Escape, { disableGlobalEvent: true });

  const onBackdropClick = () => {
    if (disableBackdropClick) {
      return;
    }
    closeDrawer();
  }

  if (!portal) {
    return null;
  }

  return createPortal(
    <Backdrop width="100%" visible={visible} onClick={onBackdropClick} onContentClick={onContentClick} {...bindings}>
      <DrawerWrapper className={wrapClassName} visible={visible} {...props}>
        {(React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === ModalTitle) {
            return React.cloneElement(child, { ...child.props, onClose: child.props.onClose || onBackdropClick });
          } else {
            return child;
          }
        }))}
      </DrawerWrapper>
    </Backdrop>,
    portal,
  )
}

export const Drawer = withSchema(DrawerBase, {
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  Content: ModalContent,
  displayName: 'Drawer',
  defaultProps: DrawerDefaultProps,
});

export type { ModalContentProps as DrawerContentProps, ModalSubtitleProps as DrawerSubtitleProps, ModalTitleProps as DrawerTitleProps } from '../modal/modal';

