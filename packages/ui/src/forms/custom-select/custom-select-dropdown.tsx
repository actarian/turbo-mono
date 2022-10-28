import { getClassNames } from '@websolute/core';
import React, { CSSProperties, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { Dropdown } from '../../components';
import { useCustomSelectContext } from './custom-select-context';

type Props = {
  visible: boolean;
  className?: string;
  dropdownStyle?: CSSProperties;
  disableMatchWidth?: boolean;
  getPopupContainer?: () => HTMLElement | null;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type CustomSelectDropdownProps = Props & NativeAttrs;

const StyledCustomSelectDropdown = styled.div`
  max-height: 15rem;
  overflow-y: auto;
  overflow-anchor: none;
  scroll-behavior: smooth;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-xs);
  background-color: var(--color-neutral-100);
`;

export const CustomSelectDropdown = React.forwardRef<HTMLDivElement | null, React.PropsWithChildren<CustomSelectDropdownProps>>(({
  className = '',
  dropdownStyle = {},
  visible,
  children,
  disableMatchWidth,
  getPopupContainer,
}: React.PropsWithChildren<CustomSelectDropdownProps>, dropdownRef) => {

  const internalDropdownRef = useRef<HTMLDivElement | null>(null);

  const { ref } = useCustomSelectContext();

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(dropdownRef, () => internalDropdownRef.current);

  const classNames = getClassNames('select-dropdown', className);

  return (
    <Dropdown parent={ref} visible={visible} disableMatchWidth={disableMatchWidth} getPopupContainer={getPopupContainer}>
      <StyledCustomSelectDropdown ref={internalDropdownRef} className={classNames} style={dropdownStyle}>
        {children}
      </StyledCustomSelectDropdown>
    </Dropdown>
  );
});

CustomSelectDropdown.displayName = 'CustomSelectDropdown';
