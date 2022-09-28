import { getClassNames } from '@websolute/core';
import { useCurrentState } from '@websolute/hooks';
import React, { CSSProperties, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Ellipsis, Flex, getChildsByType } from '../../components';
import type { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { SelectConfig, SelectContext } from './select-context';
import StyledSelectDivider from './select-divider';
import SelectDropdown from './select-dropdown';
import SelectIcon from './select-icon';
import SelectInput from './select-input';
import SelectLabel from './select-label';
import SelectMultipleValue from './select-multiple-value';
import SelectOption from './select-option';

export type SelectRef = {
  focus: () => void;
  blur: () => void;
  scrollTo?: (options?: ScrollToOptions) => void;
};

interface Props {
  disabled?: boolean;
  name?: string;
  value?: string | string[];
  initialValue?: string | string[];
  placeholder?: React.ReactNode | string;
  icon?: React.ComponentType;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: string | string[]) => void;
  pure?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  className?: string;
  dropdownClassName?: string;
  dropdownStyle?: CSSProperties;
  disableMatchWidth?: boolean;
  onDropdownVisibleChange?: (visible: boolean) => void;
  getPopupContainer?: () => HTMLElement | null;
}

export type SelectProps = UIStyledComponentProps<Props>;

export type SelectComponent<C extends React.ElementType = 'select'> = UIComponentWithRef<C, Props>;

const StyledSelect = styled.div<UIStyledComponentProps<{ disabled?: boolean }>>`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  padding: var(--form-padding);
  appearance: none;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: ${props => props.disabled ? 'var(--color-neutral-200)' : 'transparent'};
  border-color: var(--color-neutral-200);
  user-select: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s, box-shadow 200ms ease 0s;
  cursor: pointer;

  .value {
    display: inline-flex;
    flex: 1;
    height: 100%;
    align-items: center;
    line-height: 1;
    padding: 0;
    margin-right: 1.25em;
    width: calc(100% - 1.25em);
  }

  .value,
  .icon {
    color: var(--color-neutral-900);
  }

  &.disabled {
    cursor: not-allowed;
  }

  &.active:not(.disabled),
  &:hover:not(.disabled) {
    border-color: var(--color-neutral-300);

    .icon {
      color: var(--color-primary-500);
    }
  }

  &.active:not(.disabled) {
    outline-color: var(--color-primary-200);

    .placeholder {
      opacity: 0.5;
    }
  }

  .placeholder {
    color: inherit;
    opacity: 0.3;
  }

  &.multiple {
    padding: calc(var(--form-padding) * 0.675);
    // padding: 0.675rem;

    .placeholder {
      padding: 0.563rem 0;
    }
  }

  &.disabled {
    .value,
    .icon {
      color: var(--color-primary-400);
    }
  }

  ${props => getCssResponsive(props)}
`;

const Select: SelectComponent = forwardRef<SelectRef, React.PropsWithChildren<SelectProps>>(({
  disabled = false,
  pure = false,
  multiple = false,
  clearable = true,
  className = '',
  disableMatchWidth = false,
  onDropdownVisibleChange = () => { },
  value: valueProp,
  initialValue: initialValueProp,
  icon,
  children,
  onChange,
  placeholder,
  dropdownClassName,
  dropdownStyle,
  getPopupContainer,
  onBlur,
  onFocus,
  ...props
}: React.PropsWithChildren<SelectProps>, selectRef) => {

  const Icon = icon || SelectIcon;

  const ref = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState<boolean>(false);

  const [selectFocus, setSelectFocus] = useState<boolean>(false);

  const [value, setValue, valueRef] = useCurrentState<string | string[]>(() => {
    if (!multiple) {
      return typeof initialValueProp === 'undefined' ? '' : initialValueProp;
    }
    if (Array.isArray(initialValueProp)) {
      return initialValueProp;
    }
    return typeof initialValueProp === 'undefined' ? [] : [initialValueProp];
  });

  const isEmpty = useMemo(() => {
    if (!Array.isArray(value)) {
      return !value;
    }
    return value.length === 0;
  }, [value]);

  const updateVisible = useCallback((next: boolean) => {
    onDropdownVisibleChange(next);
    setVisible(next);
  }, [onDropdownVisibleChange]);

  const updateValue = (next: string) => {
    setValue(last => {
      if (!Array.isArray(last)) {
        return next;
      }
      if (!last.includes(next)) {
        return [...last, next];
      }
      return last.filter(item => item !== next);
    });
    onChange && onChange(valueRef.current as string | string[]);
    if (!multiple) {
      updateVisible(false);
    }
  };

  const initialValue: SelectConfig = useMemo(() => ({
    disableAll: disabled,
    visible,
    value,
    ref,
    updateValue,
    updateVisible,
  }), [disabled, visible, value]);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    if (disabled) {
      return;
    }
    updateVisible(!visible);
  };

  const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    /* istanbul ignore next */
    if (visible) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (valueProp === undefined) {
      return;
    }
    setValue(valueProp);
  }, [setValue, valueProp]);

  useImperativeHandle(selectRef, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    scrollTo: options => dropdownRef.current?.scrollTo(options),
  }), [inputRef, dropdownRef]);

  const selectedChildren = (() => {
    const onClear = (value: string) => {
      // console.log('onClear', value, clearable);
      if (clearable) {
        updateValue(value);
      }
    };
    const values = Array.isArray(value) ? value : [value];
    const [optionChildren] = getChildsByType(children, SelectOption);
    return React.Children.map(optionChildren, (child: any) => { // !!! any
      const childValue = child.props.value;
      const childLabel = child.props.children;
      if (!values.includes(childValue)) {
        return null;
      }
      if (!multiple) {
        return childLabel;
      }
      return (
        <SelectMultipleValue disabled={disabled} onClear={() => onClear(childValue)}>
          {childLabel}
        </SelectMultipleValue>
      );
    });
  })();

  const onFocus_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event);
    setSelectFocus(true);
  }

  const onBlur_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event);
    updateVisible(false);
    setSelectFocus(false);
  }

  const classNames = getClassNames('select', { active: selectFocus || visible, opened: visible, multiple, disabled }, className);

  return (
    <SelectContext.Provider value={initialValue}>
      <StyledSelect ref={ref} className={classNames} onClick={clickHandler} onMouseDown={mouseDownHandler}
        {...props}>
        <SelectInput ref={inputRef} name={props.name} visible={visible} onFocus={onFocus_} onBlur={onBlur_} />
        {isEmpty && (
          <span className="value placeholder">
            <Ellipsis>{placeholder}</Ellipsis>
          </span>
        )}
        {value && (multiple ?
          <Flex.Row flexWrap="wrap" maxWidth="calc(100% - 1.5rem)">{selectedChildren}</Flex.Row> :
          <span className="value">{selectedChildren}</span>
        )}
        <SelectDropdown ref={dropdownRef} className={dropdownClassName} visible={visible} dropdownStyle={dropdownStyle} disableMatchWidth={disableMatchWidth} getPopupContainer={getPopupContainer}>
          {children}
        </SelectDropdown>
        {!pure && (
          <Icon className="icon" />
        )}
      </StyledSelect>
    </SelectContext.Provider>
  );
});

Select.displayName = 'Select';

(Select as ISelect).Label = SelectLabel;
(Select as ISelect).Divider = StyledSelectDivider;
(Select as ISelect).Option = SelectOption;

export default Select as ISelect;

type ISelect = typeof Select & {
  Label: typeof SelectLabel;
  Divider: typeof StyledSelectDivider;
  Option: typeof SelectOption;
};
