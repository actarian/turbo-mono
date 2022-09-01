/* eslint-disable react-hooks/rules-of-hooks */
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Transition } from '../../components';
import { useClasses, useClickAnyWhere, usePortal, useResize } from '../../hooks';
import { getRect } from './tooltip-helper';
import TooltipIcon from './tooltip-icon';
import { defaultTooltipPosition, getPosition, TooltipPosition } from './tooltip-placement';
import { Placement, SnippetTypes } from './tooltip-props';

interface Props {
  className?: string;
  hideArrow: boolean;
  iconOffset: TooltipIconOffset;
  offset: number;
  parent?: MutableRefObject<HTMLElement | null> | undefined;
  placement: Placement;
  type: SnippetTypes;
  visible: boolean;
}

export type TooltipIconOffset = {
  x: string;
  y: string;
};

const StyledTooltipContent = styled.div<{ rect: TooltipPosition, iconOffset: TooltipIconOffset, hasShadow: boolean }>`
  --tooltip-background: var(--color-neutral-100);
  --tooltip-foreground: var(--color-neutral-900);
  --tooltip-icon-offset-x: ${props => props.iconOffset.x};
  --tooltip-icon-offset-y: ${props => props.iconOffset.y};
  box-sizing: border-box;
  position: absolute;
  top: ${props => props.rect.top};
  left: ${props => props.rect.left};
  transform: ${props => props.rect.transform};
  background-color: var(--tooltip-background);
  color: var(--tooltip-foreground);
  border-radius: var(--border-radius);
  padding: 0;
  z-index: 1000;
  box-shadow: ${props => props.hasShadow ? 'var(--shadow-xs)' : 'none'};
  filter: drop-shadow(0px 0px 1px var(--color-neutral-300));
  width: 'auto';
  height: 'auto';

  .inner {
    // box-sizing: border-box;
    position: relative;
    padding: 0.65rem 0.9rem;
    height: 100%;
  }
`;

const TooltipContent: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  parent,
  visible,
  offset,
  iconOffset,
  placement,
  type,
  className,
  hideArrow,
}) => {
  const portal = usePortal('tooltip');
  const selfRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<TooltipPosition>(defaultTooltipPosition);
  const hasShadow = type === 'default';
  const classes = useClasses('tooltip-content', className);
  if (!parent) {
    return null;
  }

  const updateRect = useCallback(() => {
    const position = getPosition(placement, getRect(parent), offset);
    setRect(position);
  }, [offset, parent, placement]);

  useResize(updateRect);
  useClickAnyWhere(() => updateRect());

  useEffect(() => {
    updateRect();
  }, [updateRect, visible])

  const preventHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  if (!portal) {
    return null;
  }

  const props = { rect, iconOffset, hasShadow };

  return createPortal(
    <Transition visible={visible}>
      <StyledTooltipContent {...props} className={classes} ref={selfRef} onClick={preventHandler}>
        <div className="inner">
          {!hideArrow && <TooltipIcon placement={placement} shadow={hasShadow} />}
          {children}
        </div>
      </StyledTooltipContent>
    </Transition>,
    portal,
  )
}

export default TooltipContent;
