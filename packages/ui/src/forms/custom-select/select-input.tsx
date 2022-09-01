import React, { ComponentPropsWithRef, useEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

export interface SelectInputProps extends ComponentPropsWithRef<'input'> {
  visible: boolean;
  onBlur: () => void;
  onFocus: () => void;
}

const StyledInput = styled.input`
  position: fixed;
  top: -10000px;
  left: -10000px;
  opacity: 0;
  z-index: -1;
  width: 0;
  height: 0;
  padding: 0;
  font-size: 0;
  border: none;
`;

const SelectInput = React.forwardRef<HTMLInputElement | null, SelectInputProps>(({
  visible,
  onBlur,
  onFocus
}, inputRef) => {

  const ref = useRef<HTMLInputElement | null>(null);

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(inputRef, () => ref.current);

  useEffect(() => {
    if (visible) {
      ref.current?.focus();
    }
  }, [visible]);

  return (
    <>
      <StyledInput
        ref={ref}
        type="search"
        role="combobox"
        aria-haspopup="listbox"
        readOnly
        unselectable="on"
        aria-expanded={visible}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </>
  );
});

SelectInput.displayName = 'SelectInput';

export default SelectInput;
