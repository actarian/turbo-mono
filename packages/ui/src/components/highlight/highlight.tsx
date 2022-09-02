import { useClasses, usePrevious } from '@websolute/hooks';
import React, { useMemo, useRef } from 'react';
import styled, { css } from 'styled-components';
import { isUnplacedRect, ReactiveDomReact } from '../dropdown/dropdown-layout';

type Props = {
  rect: ReactiveDomReact;
  visible?: boolean;
  hoverHeightRatio?: number;
  hoverWidthRatio?: number;
  activeOpacity?: number;
}

type HighlightPosition = {
  width: string;
  left: string;
  height: string;
  top: string;
  transition: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type HighlightProps = Props & NativeAttrs;

const StyledHighlight = styled.div<{ position: HighlightPosition, activeOpacity: number }>`
  background: var(--color-primary-100);
  position: absolute;
  border-radius: 5px;
  opacity: 0;
  transition: 0.15s ease;

  ${props => (css`
    width: ${props.position.width};
    left: ${props.position.left};
    height: ${props.position.height};
    top: ${props.position.top};
    transition-property: ${props.position.transition};

    &.active {
      opacity: ${props.activeOpacity};
    }
  `)}
`

const Highlight: React.FC<HighlightProps> = ({
  hoverHeightRatio = 1,
  hoverWidthRatio = 1,
  activeOpacity = 0.8,
  rect,
  visible,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isFirstVisible = usePrevious<boolean>(isUnplacedRect(rect));

  const position = useMemo<HighlightPosition>(() => {
    const width = rect.width * hoverWidthRatio;
    const height = rect.height * hoverHeightRatio;
    return {
      width: `${width}px`,
      left: `${rect.left + (rect.width - width) / 2}px`,
      height: `${height}px`,
      top: `${rect.elementTop + (rect.height - height) / 2}px`,
      transition: isFirstVisible ? 'opacity' : 'opacity, width, left, top',
    }
  }, [rect, hoverWidthRatio, hoverHeightRatio, isFirstVisible]);

  return (
    <StyledHighlight ref={ref} className={useClasses('highlight', { active: visible }, className)}
      position={position} activeOpacity={activeOpacity} {...props}>
    </StyledHighlight>
  )
}

export default Highlight;
