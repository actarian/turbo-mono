import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Ellipsis } from '../../components';
import { consoleWarn, useClasses } from '../../hooks';
import { useSelectContext } from './select-context';

interface Props {
  disabled?: boolean;
  divider?: boolean;
  label?: boolean;
  className?: string;
  preventAllEvents?: boolean;
  value: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type SelectOptionProps = Props & NativeAttrs;

const StyledSelectOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0.65rem 0.5rem;
  margin: 0;
  user-select: none;
  border: 0;
  color: var(--color-neutral-700);
  transition: background-color 0.2s ease 0s, border-color 0.2s ease 0s, outline-color 0.2s ease 0s;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
    background-color: var(--color-neutral-200);
    color: var(--color-neutral-500);
  }

  &:hover:not(.disabled):not(.label):not(.active) {
    background-color: var(--color-primary-100);
    color: var(--color-primary-500);
  }

  &.active {
    background-color: var(--color-primary-500);
    color: var(--color-neutral-100);
  }

  &.divider {
    line-height: 0;
    overflow: hidden;
    border-top: 1px solid var(--color-neutral-300);
    width: 100%;
    height: 1px;
    padding: 0;
    margin: 0;
  }

  &.label {
    color: var(--color-primary-700);
    border-bottom: 1px solid var(--color-neutral-200);
    text-transform: capitalize;
    font-size: 0.875em;
    width: 100%;
    font-weight: 500;
    text-transform: uppercase;
    cursor: default;
  }
`

const SelectOption: React.FC<React.PropsWithChildren<SelectOptionProps>> = ({
  disabled = false,
  divider = false,
  label = false,
  className = '',
  preventAllEvents = false,
  value: valueProp,
  children,
  ...props
}: React.PropsWithChildren<SelectOptionProps>) => {

  const { updateValue, value, disableAll } = useSelectContext();

  const isDisabled = useMemo(() => disabled || disableAll, [disabled, disableAll]);

  const isLabel = useMemo(() => label || divider, [label, divider]);

  if (!isLabel && valueProp === undefined) {
    consoleWarn('The props "value" is required.', 'Select Option');
  }

  const optionValue: string = valueProp || children as string || '';

  const active = useMemo(() => {
    if (!value) {
      return false;
    }
    if (typeof value === 'string') {
      return optionValue === value;
    }
    return value.includes(`${optionValue}`);
  }, [optionValue, value]);

  const classes = useClasses('option', { divider, label, active }, className);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (preventAllEvents) {
      return;
    }
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    if (isDisabled || isLabel) {
      return;
    }
    updateValue && updateValue(optionValue);
  };

  return (
    <StyledSelectOption className={classes} onClick={clickHandler} {...props}>
      <Ellipsis>{children}</Ellipsis>
    </StyledSelectOption>
  )
}

SelectOption.displayName = 'SelectOption';

export default SelectOption;
