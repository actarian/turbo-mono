/* eslint-disable react-hooks/rules-of-hooks */
import { consoleWarn, useClasses, useClickAnyWhere, useDomObserver, usePortal, useResize } from '@websolute/hooks';
import React, { MutableRefObject, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Transition } from '../../components';
import { getRefRect } from './dropdown-layout';

interface Props {
  parent?: MutableRefObject<HTMLElement | null> | undefined;
  visible: boolean;
  disableMatchWidth?: boolean;
  getPopupContainer?: () => HTMLElement | null;
}

interface ReactiveDomReact {
  top: number;
  left: number;
  right: number;
  width: number;
}

const defaultRect: ReactiveDomReact = {
  top: -1000,
  left: -1000,
  right: -1000,
  width: 0,
};

const StyledDropdown = styled.div<{ rect: ReactiveDomReact }>`
  position: absolute;
  top: ${props => props.rect.top + 2}px;
  left: ${props => props.rect.left}px;
  z-index: 1100;

  &.width-match {
    width: ${props => props.rect.width}px;
  }
  &.disable-match {
    min-width: ${props => props.rect.width}px;
  }
`;

const Dropdown: React.FC<React.PropsWithChildren<Props>> = React.memo(({
  children,
  parent,
  visible,
  disableMatchWidth,
  getPopupContainer
}) => {

  const portal = usePortal('dropdown', getPopupContainer);

  const [rect, setRect] = useState<ReactiveDomReact>(defaultRect);

  const classes = useClasses('dropdown', disableMatchWidth ? 'disable-match' : 'width-match');

  if (!parent) {
    return null;
  }

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') {
    if (getPopupContainer && getPopupContainer()) {
      const element = getPopupContainer();
      const style = window.getComputedStyle(element as HTMLDivElement);
      if (style.position === 'static') {
        consoleWarn('The element specified by "getPopupContainer" must have "position" set.');
      }
    }
  }

  const updateRect = () => {
    const { top, left, right, width: nativeWidth } = getRefRect(parent, getPopupContainer);
    setRect({ top, left, right, width: nativeWidth });
  }

  useResize(updateRect);

  useClickAnyWhere(() => {
    const { top, left } = getRefRect(parent, getPopupContainer);
    const shouldUpdatePosition = top !== rect.top || left !== rect.left;
    if (!shouldUpdatePosition) {
      return;
    }
    updateRect();
  });

  useDomObserver(parent, () => {
    updateRect();
  });

  useEffect(() => {
    if (!parent || !parent.current) {
      return;
    }
    parent.current.addEventListener('mouseenter', updateRect);
    /* istanbul ignore next */
    return () => {
      if (!parent || !parent.current) {
        return;
      }
      parent.current.removeEventListener('mouseenter', updateRect);
    };
  }, [parent]);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
  };

  const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  if (!portal) {
    return null;
  }

  return createPortal(
    <Transition visible={visible}>
      <StyledDropdown className={classes} rect={rect} onClick={clickHandler} onMouseDown={mouseDownHandler}>
        {children}
      </StyledDropdown>
    </Transition>,
    portal,
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown
