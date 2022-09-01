import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type SelectDividerProps = Props & NativeAttrs;

const StyledSelectDivider = styled.div<SelectDividerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  user-select: none;
  line-height: 0;
  border-top: 1px solid var(--color-neutral-300);
`

StyledSelectDivider.displayName = 'SelectDivider';

export default StyledSelectDivider;
