import { useClasses, useRealSize } from '@ui-hooks';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export type ExpandProps = {
  isExpanded?: boolean;
  delay?: number;
};

const StyledExpand = styled.div<{ delay: number, height: CSSProperties['height'] }>`
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: height ${props => props.delay}ms ease;

  &.visible {
    visibility: visible;
  }

  &.expanded {
    height: ${props => props.height};
    visibility: visible;
  }
`;

const Expand: React.FC<React.PropsWithChildren<ExpandProps>> = ({
  isExpanded = false,
  delay = 200,
  children,
}: React.PropsWithChildren<ExpandProps>) => {
  const [height, setHeight] = useState<string>(isExpanded ? 'auto' : '0');

  const [selfExpanded, setSelfExpanded] = useState<boolean>(isExpanded);

  const [visible, setVisible] = useState<boolean>(isExpanded);

  const contentRef = useRef<HTMLDivElement>(null);

  const entryTimer = useRef<number>();

  const leaveTimer = useRef<number>();

  const resetTimer = useRef<number>();

  const [size, updateSize] = useRealSize<HTMLDivElement>(contentRef);

  const classes = useClasses('container', { expanded: selfExpanded, visible });

  useEffect(() => setHeight(`${size.height}px`), [size.height]);

  useEffect(() => {
    // show element or reset height.
    // force an update once manually, even if the element does not change.
    // (the height of the element might be "auto")
    if (isExpanded) {
      setVisible(isExpanded);
    } else {
      updateSize();
      setHeight(`${size.height}px`);
    }
    // show expand animation
    entryTimer.current = window.setTimeout(() => {
      setSelfExpanded(isExpanded);
      clearTimeout(entryTimer.current);
    }, 30);
    // Reset height after animation
    if (isExpanded) {
      resetTimer.current = window.setTimeout(() => {
        setHeight('auto');
        clearTimeout(resetTimer.current);
      }, delay);
    } else {
      leaveTimer.current = window.setTimeout(() => {
        setVisible(isExpanded);
        clearTimeout(leaveTimer.current);
      }, delay / 2);
    }
    return () => {
      clearTimeout(entryTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(resetTimer.current);
    }
  }, [isExpanded]);

  return (
    <StyledExpand className={classes} height={height} delay={delay}>
      <div ref={contentRef} className="content">
        {children}
      </div>
    </StyledExpand>
  )
}

Expand.displayName = 'Expand';

export default Expand;
