import React, { useMemo } from 'react';
import styled from 'styled-components';
import { getIconPosition, TooltipIconPosition } from './tooltip-placement';
import { Placement } from './tooltip-props';

type Props = {
  placement: Placement;
  shadow: boolean;
};

const StyledTooltipIcon = styled.span<TooltipIconPosition>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 7px 6px 0;
  border-color: transparent var(--tooltip-background) transparent transparent;
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  transform: ${props => props.transform};
`;

export const TooltipIcon: React.FC<Props> = ({ placement, shadow }) => {
  const props: TooltipIconPosition = useMemo(() => {
    return getIconPosition(placement, 'var(--tooltip-icon-offset-x)', 'var(--tooltip-icon-offset-y)');
  }, [placement]);
  return (
    <StyledTooltipIcon {...props} />
  );
};
