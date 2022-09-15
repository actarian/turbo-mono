
import type { IEquatable } from '@websolute/core';
import { FormControl, useControl } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { FocusEvent, useState } from 'react';
import { CustomSelect, Field, Label } from '../forms';
import FieldError from './field-error';

type FieldSelectProps = {
  control: FormControl;
  uid?: number | null | undefined;
}

export default function FieldSelect(props: FieldSelectProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<string>(props.control);

  const onChange = (value: string | string[]) => {
    // console.log('FieldSelect', event.target.value);
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

  return (
    state.flags.hidden ? (
      <input type="hidden" value={state.value || ''} />
    ) : (
      <Field>
        {props.control.label &&
          <Label>
            {label(props.control.label)}
          </Label>
        }

        {/* type={(state.flags.invalid && state.flags.touched) ? 'error' : 'default'} */}
        <CustomSelect
          id={uniqueName}
          placeholder={label(props.control.placeholder || props.control.label || '')}
          value={state.value ? state.value.toString() : undefined}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={state.flags.disabled || state.flags.readonly}
          width="100%"
        >
          {props.control.options && props.control.options.map((option, i) => (
            <CustomSelect.Option key={i} value={option.id.toString()}>{option.name as string}</CustomSelect.Option>
          ))}
        </CustomSelect>

        <FieldError state={state} />
      </Field>
    )
  );
}

// {JSON.stringify(props.control.errors[key])}
