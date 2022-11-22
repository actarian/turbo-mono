
import { IEquatable, IOption } from '@websolute/core';
import { FormControl, stringToValue, useControl, valueToString } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { FocusEvent, useMemo, useState } from 'react';
import { Autocomplete, Field, IAutocompleteItem, Label } from '../forms';
import { FieldError } from './field-error';

type FieldAutocompleteProps = {
  control: FormControl;
  uid?: number | null | undefined;
};

// !!! todo

export function FieldAutocomplete(props: FieldAutocompleteProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<IOption | IOption[] | IEquatable | IEquatable[]>(props.control);

  const onChange = (value: string | string[]) => {
    const valueOrValues = stringToValue(value, props.control.options);
    setValue(valueOrValues);
  };

  const [focus, setFocus] = useState(false);

  const onBlur = (_: FocusEvent<HTMLInputElement>) => {
    setTouched();
    setFocus(false);
  };

  const onFocus = (_: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
  };

  // fires when user select a google autocomplete result
  async function onAutocomplete(item: IAutocompleteItem) {
    console.log('onAutocomplete', item);
    if (!item) {
      return;
    }
    const id = item.id.toString();
    if (id) {
      onChange(id);
    }
  }

  function source(query: string): Promise<IAutocompleteItem[]> {
    return new Promise((resolve, reject) => {
      const options = (props.control.options || []).filter(x => {
        const name = x.name.toString().toLowerCase();
        return name.indexOf(query.toLowerCase()) !== -1;
      }).map(x => {
        return {
          id: x.id,
          name: x.name.toString(),
        };
      });
      resolve(options);
    });
  }

  const initialValue = useMemo(() => {
    if (props.control.optionsExtra?.asEquatable) {
      const options = props.control.options || [];
      if (!state.value) {
        return undefined;
      }
      const option = options.find(x => x.id === state.value);
      if (option) {
        return {
          id: option.id,
          name: option.name.toString(),
        };
      } else {
        return undefined;
      }
    } else {
      return (state.value as IOption) || undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    state.flags.hidden ? (
      <input type="hidden" value={valueToString(state.value)} />
    ) : (
      <Field>
        {props.control.label &&
          <Label>{label(props.control.label)}</Label>
        }

        <Autocomplete
          background="var(--color-neutral-100)"
          overflow="hidden"
          id={uniqueName}
          name={uniqueName}
          placeholder={label(props.control.placeholder || props.control.label || '')}
          initialValue={initialValue}
          source={source}
          onAutocomplete={onAutocomplete}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <FieldError state={state} />
      </Field>
    )
  );
}
