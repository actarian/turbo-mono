import React, { CSSProperties, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { Dropdown } from '../../components';
import { useClasses } from '../../hooks';
import { useSelectContext } from './select-context';

interface Props {
  visible: boolean;
  className?: string;
  dropdownStyle?: CSSProperties;
  disableMatchWidth?: boolean;
  getPopupContainer?: () => HTMLElement | null;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type SelectDropdownProps = Props & NativeAttrs;

const StyledSelectDropdown = styled.div`
  max-height: 15rem;
  overflow-y: auto;
  overflow-anchor: none;
  scroll-behavior: smooth;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-xs);
  background-color: var(--color-neutral-100);
`;

const SelectDropdown = React.forwardRef<HTMLDivElement | null, React.PropsWithChildren<SelectDropdownProps>>(({
  className = '',
  dropdownStyle = {},
  visible,
  children,
  disableMatchWidth,
  getPopupContainer,
}: React.PropsWithChildren<SelectDropdownProps>, dropdownRef) => {

  const internalDropdownRef = useRef<HTMLDivElement | null>(null);

  const { ref } = useSelectContext();

  const classes = useClasses('select-dropdown', className);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(dropdownRef, () => internalDropdownRef.current);

  return (
    <Dropdown parent={ref} visible={visible} disableMatchWidth={disableMatchWidth} getPopupContainer={getPopupContainer}>
      <StyledSelectDropdown ref={internalDropdownRef} className={classes} style={dropdownStyle}>
        {children}
      </StyledSelectDropdown>
    </Dropdown>
  );
});

SelectDropdown.displayName = 'SelectDropdown';

export default SelectDropdown;
