
import type { IEquatable } from '@websolute/core';
import { useLabel } from '@websolute/hooks';
import { Autocomplete, Field, IAutocompleteItem, Label } from '@websolute/ui';
import { FocusEvent, useMemo, useState } from 'react';
import { useControl } from '../../hooks';
import { FormControl } from '../form-control';
import FieldError from './field-error';

type FieldAutocompleteProps = {
  control: FormControl;
  uid?: number | null | undefined;
}

export default function FieldAutocomplete(props: FieldAutocompleteProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<string>(props.control);

  const onDidChange = (value: string | string[]) => {
    // console.log('FieldAutocomplete', event.target.value);
    let id: IEquatable | IEquatable[] | null = null;
    function mapValue(value: string) {
      const option = props.control.options?.find(x => x.id.toString() === value);
      return option ? option.id : null;
    }
    if (Array.isArray(value)) {
      id = value.map(x => mapValue(x)).filter(x => x !== null) as IEquatable[];
    } else {
      id = mapValue(value);
    }
    setValue(id);
    // props.control.value = event.target.value;
  }

  const [focus, setFocus] = useState(false);

  const onBlur = (_: FocusEvent<HTMLInputElement>) => {
    setTouched();
    setFocus(false);
  }

  const onFocus = (_: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
  }

  // fires when user select a google autocomplete result
  async function onAutocomplete(item: IAutocompleteItem) {
    console.log('onAutocomplete', item);
    if (!item) {
      return;
    }
    const id = item.id.toString();
    if (id) {
      onDidChange(id);
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
        }
      });
      resolve(options);
    });
  }

  const initialValue = useMemo(() => {
    const options = props.control.options || [];
    if (!state.value) {
      return undefined;
    }
    const option = options.find(x => x.id === state.value);
    if (option) {
      return {
        id: option.id,
        name: option.name.toString(),
      }
    } else {
      return undefined;
    }
  }, []);

  return (
    state.flags.hidden ? (
      <input type="hidden" value={state.value || ''} />
    ) : (
      <Field>
        {props.control.label &&
          <Label>{label(props.control.label)}</Label>
        }

        <Autocomplete
          background="var(--color-neutral-100)"
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
