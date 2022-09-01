import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useClasses } from '../../hooks';
import Tooltip, { TooltipOnVisibleChange, TooltipProps } from '../tooltip/tooltip';
import { Placement, TriggerTypes } from '../tooltip/tooltip-props';
import { getReactNode } from './popover-collections';
import { PopoverConfig, PopoverContext } from './popover-context';

export type PopoverTriggerTypes = TriggerTypes;

export type PopoverPlacement = Placement;

interface Props {
  content?: React.ReactNode | (() => React.ReactNode);
  trigger?: PopoverTriggerTypes;
  placement?: Placement;
  disableItemsAutoClose?: boolean;
}

type ExcludeTooltipProps = {
  type: any;
  text: any;
  trigger: any;
  placement: any;
};

export type PopoverProps = Props & Omit<TooltipProps, keyof ExcludeTooltipProps>

const StyledTooltip = styled(Tooltip)`
  :global(.tooltip-content.popover > .inner) {
    padding: 0.9rem 0;
  }
`;

const Popover: React.FC<React.PropsWithChildren<PopoverProps>> = ({
  className = '',
  hideArrow = false,
  initialVisible = false,
  enterDelay = 100,
  leaveDelay = 150,
  offset = 12,
  portalClassName = '',
  placement = 'bottom' as Placement,
  trigger = 'click' as PopoverTriggerTypes,
  visible: customVisible,
  onVisibleChange = (() => { }) as TooltipOnVisibleChange,
  content,
  children,
  disableItemsAutoClose = false,
  ...props
}: React.PropsWithChildren<PopoverProps>) => {

  const [visible, setVisible] = useState<boolean>(initialVisible);

  const textNode = useMemo(() => getReactNode(content), [content]);

  const onPopoverVisibleChange = useCallback((next: boolean) => {
    setVisible(next);
    onVisibleChange(next);
  }, [onVisibleChange]);

  const value = useMemo<PopoverConfig>(() => {
    const onChildClick = () => {
      onPopoverVisibleChange(false);
    };
    return {
      onItemClick: onChildClick,
      disableItemsAutoClose,
    };
  }, [disableItemsAutoClose, onPopoverVisibleChange]);

  const classes = useClasses('popover', portalClassName);

  useEffect(() => {
    if (customVisible === undefined) {
      return;
    }
    onPopoverVisibleChange(customVisible);
  }, [customVisible, onPopoverVisibleChange]);

  return (
    <PopoverContext.Provider value={value}>
      <StyledTooltip
        text={textNode}
        trigger={trigger}
        placement={placement}
        portalClassName={classes}
        visible={visible}
        onVisibleChange={onPopoverVisibleChange}
        {...props}>
        {children}
      </StyledTooltip>
    </PopoverContext.Provider>
  )
}

Popover.displayName = 'Popover';

(Popover as IPopover).Item = PopoverItem;
(Popover as IPopover).Option = PopoverItem;

export default Popover as IPopover;

type IPopover = typeof Popover & {
  Item: typeof PopoverItem;
  Option: typeof PopoverItem;
};

import PopoverItem from './popover-item';

