import { getClassNames } from '@websolute/core';
import { useClickOut } from '@websolute/hooks';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { TooltipContent, TooltipIconOffset } from './tooltip-content';
import { getRect } from './tooltip-helper';
import { Placement, SnippetTypes, TriggerTypes } from './tooltip-props';

export type TooltipOnVisibleChange = (visible: boolean) => void;
export type TooltipTypes = SnippetTypes;
export type TooltipTriggers = TriggerTypes;
export type TooltipPlacement = Placement;

type Props = {
  className?: string;
  hideArrow?: boolean;
  initialVisible?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  offset?: number;
  portalClassName?: string;
  placement?: TooltipPlacement;
  trigger?: TooltipTriggers;
  type?: TooltipTypes;
  visible?: boolean;
  onVisibleChange?: TooltipOnVisibleChange;
  text: string | React.ReactNode;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type TooltipProps = Props & NativeAttrs;

const StyledTooltip = styled.div`
  width: max-content;
  display: inline-block;
`;

export const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = ({
  className = '',
  hideArrow = false,
  initialVisible = false,
  enterDelay = 100,
  leaveDelay = 150,
  offset = 12,
  portalClassName = '',
  placement = 'top' as TooltipPlacement,
  trigger = 'hover' as TooltipTriggers,
  type = 'default' as TooltipTypes,
  visible: customVisible,
  onVisibleChange = (() => { }) as TooltipOnVisibleChange,
  children,
  text,
  ...props
}: React.PropsWithChildren<TooltipProps>) => {

  const timer = useRef<number>();

  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState<boolean>(initialVisible);

  const iconOffset = useMemo<TooltipIconOffset>(() => {
    if (!ref.current) {
      return { x: '0.75em', y: '0.75em' };
    }
    const rect = getRect(ref);
    return {
      x: `${rect.width ? rect.width / 2 : 0}px`,
      y: `${rect.height ? rect.height / 2 : 0}px`,
    };
  }, [ref]);

  const changeVisible = useCallback((nextState: boolean) => {
    const clear = () => {
      clearTimeout(timer.current);
      timer.current = undefined;
    };
    const handler = (nextState: boolean) => {
      setVisible(nextState);
      onVisibleChange(nextState);
      clear();
    }
    clear();
    if (nextState) {
      timer.current = window.setTimeout(() => handler(true), enterDelay);
      return;
    }
    const leaveDelayWithoutClick = trigger === 'click' ? 0 : leaveDelay;
    timer.current = window.setTimeout(() => handler(false), leaveDelayWithoutClick);
  }, [enterDelay, leaveDelay, onVisibleChange, trigger]);

  useEffect(() => {
    if (customVisible === undefined) {
      return;
    }
    changeVisible(customVisible);
  }, [changeVisible, customVisible])

  const onEnterLeave = (enter: boolean) => trigger === 'hover' && changeVisible(enter);

  const onClick = () => trigger === 'click' && changeVisible(!visible);

  useClickOut(ref, () => trigger === 'click' && changeVisible(false));

  const contentProps = {
    className: portalClassName,
    hideArrow,
    iconOffset,
    offset,
    parent: ref,
    placement,
    type,
    visible,
  };

  return (
    <StyledTooltip ref={ref} className={getClassNames('tooltip', className)}
      onMouseEnter={() => onEnterLeave(true)}
      onMouseLeave={() => onEnterLeave(false)}
      onClick={onClick}
      {...props}>
      {children}
      <TooltipContent {...contentProps}>{text}</TooltipContent>
    </StyledTooltip>
  )
}

Tooltip.displayName = 'Tooltip';
