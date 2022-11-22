import { getClassNames } from '@websolute/core';
import { ComponentPropsWithRef, forwardRef, ReactNode, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { AutocompleteContext, IAutocomplete, IAutocompleteItem } from './autocomplete-context';
import { AutocompleteDropdown } from './autocomplete-dropdown';
import { autocompleteHighligth } from './autocomplete-highlight';

type Props = ComponentPropsWithRef<'input'> & {
  initialValue?: IAutocompleteItem;
  before?: ReactNode;
  after?: ReactNode;
  source: (query: string) => Promise<IAutocompleteItem[]>;
  onAutocomplete?: (value: IAutocompleteItem) => void;
  onDropdownVisibleChange?: (visible: boolean) => void;
};

export type AutocompleteProps = UIStyledComponentProps<Props, 'input'>;

export type AutocompleteComponent<C extends React.ElementType = 'input'> = UIComponentWithRef<C, Props>;

const StyledAutocompleteItem = styled.div`
  display: block;
  width: 100%;
  padding: var(--form-padding);
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-200);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;
  }
`;

const StyledAutocompleteContainer = styled.div<AutocompleteProps>`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  outline-color: transparent;
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &>input {
    flex-grow: 1;
    appearance: none;

    &::placeholder {
      color: inherit;
      opacity: 0.3;
    }
  }

  /*
  &>svg {
    color: var(--color-neutral-300);
    transition: color 200ms ease-out 0s;
  }
  */

  &.active:not(.disabled):not(.focus),
  &:hover:not(.disabled):not(.focus) {
    border-color: var(--color-neutral-300);
    /*
    &>svg {
      color: var(--color-neutral-400);
    }
    */
  }

  &.focus {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;

    &>input::placeholder {
      opacity: 0.5;
    }
    /*
    &>svg {
      color: var(--color-neutral-500);
    }
    */
  }

  &.disabled {
    &>input::placeholder {
      cursor: not-allowed;
    }
  }

  &.hidden {
    display: none;
  }

  &>:first-child:not(input) {
    margin: 0 0.5em;
  }

  &>:last-child:not(input):not(.button) {
    margin: 0 0.5em;
  }

  &>.button {
    line-height: inherit;
    font-size: inherit;
    padding-top: var(--form-padding);
    padding-bottom: var(--form-padding);
    margin: -2px;
  }

  &>:last-child.button {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  &>:first-child.button {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  &>:last-child.button {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  ${props => getCssResponsive(props)}
`;

const StyledAutocomplete = styled.div<AutocompleteProps>`
  display: block;
  appearance: none;
  padding: var(--form-padding);
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  color: inherit;
  background-color: transparent;
  border: none;
  outline: none;

  &:not(:first-child) {
    padding-left: calc(var(--form-padding) * 0.5);
  }

  ${props => getCssResponsive(props)}
`;

export const Autocomplete: AutocompleteComponent = forwardRef(({
  className,
  initialValue,
  before,
  after,
  source,
  onFocus,
  onBlur,
  onDropdownVisibleChange = () => { },
  onAutocomplete,
  ...props
}, ref) => {

  const innerRef = useRef<HTMLInputElement>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

  const [items, setItems] = useState<IAutocompleteItem[]>([]);

  const [visible, setVisible] = useState<boolean>(false);

  const [value, setValue] = useState<IAutocompleteItem | null>(initialValue ? initialValue.id : null);

  const [focus, setFocus] = useState<boolean>(false);

  const updateVisible = (next: boolean) => {
    onDropdownVisibleChange(next);
    setVisible(next);
  };

  const setInnerValue = (value = '') => {
    if (innerRef.current) {
      innerRef.current.value = value;
    }
  };

  const onFocus_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event);
    setFocus(true);
    setInnerValue('');
    console.log('Autocomplete.onFocus_');
  };

  const onBlur_ = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event);
    setFocus(false);
    updateVisible(false);
    setItems([]);
    setInnerValue(value ? value.name : '');
    console.log('Autocomplete.onBlur_');
  };

  const onChange_ = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setInnerValue(query);
    const items = await source(query);
    setItems(items);
    console.log('Autocomplete.onChange_');
  };

  const onAutocomplete_ = (item: IAutocompleteItem) => {
    setValue(item);
    if (item) {
      setInnerValue(item.name);
    }
    onAutocomplete && onAutocomplete(item);
    console.log('Autocomplete.onAutocomplete_');
  };

  const context: IAutocomplete = useMemo(() => {
    const updateValue = (item: IAutocompleteItem) => {
      setInnerValue(item.name);
      onAutocomplete && onAutocomplete(item);
      updateVisible(false);
    };
    return {
      visible,
      value,
      ref: innerRef,
      updateValue,
      updateVisible,
    };
  }, [visible, value, updateVisible, onAutocomplete]);

  useEffect(() => {
    if (initialValue) {
      setInnerValue(initialValue.name);
    }
  }, [initialValue]);

  const classNames = getClassNames('autocomplete', {
    focus,
    disabled: props.disabled,
    readonly: props.readOnly,
    hidden: props.hidden,
  }, className);

  return (
    <>
      <AutocompleteContext.Provider value={context}>
        <StyledAutocompleteContainer className={classNames} {...props}>
          {before}
          <StyledAutocomplete ref={innerRef} as="input" type="text" onFocus={onFocus_} onBlur={onBlur_} onChange={onChange_} {...props} />
          {after}
        </StyledAutocompleteContainer>
        <AutocompleteDropdown ref={dropdownRef} visible={items.length > 0}>
          {items.map((item, i) => (
            <StyledAutocompleteItem key={i} onClick={() => onAutocomplete_(item)} dangerouslySetInnerHTML={{ __html: autocompleteHighligth(item.name, innerRef.current?.value) }}></StyledAutocompleteItem>
          ))}
        </AutocompleteDropdown>
      </AutocompleteContext.Provider>
    </>
  );
});

Autocomplete.displayName = 'Autocomplete';
