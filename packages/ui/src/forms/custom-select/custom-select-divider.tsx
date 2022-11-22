import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type CustomSelectDividerProps = Props & NativeAttrs;

const StyledCustomSelectDivider = styled.div<CustomSelectDividerProps>`
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
`;

export const CustomSelectDivider = StyledCustomSelectDivider;

CustomSelectDivider.displayName = 'CustomSelectDivider';
