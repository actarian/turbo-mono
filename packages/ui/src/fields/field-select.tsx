
import { IEquatable, IOption } from '@websolute/core';
import { FormControl, stringToValue, useControl, valueToString } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { FocusEvent, useState } from 'react';
import { CustomSelect, Field, Label } from '../forms';
import { FieldError } from './field-error';

type FieldSelectProps = {
  control: FormControl;
  uid?: number | null | undefined;
};

export function FieldSelect(props: FieldSelectProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<IOption | IOption[] | IEquatable | IEquatable[]>(props.control);

  const onChange = (value: string | string[]) => {
    const valueOrValues = stringToValue(value, props.control.options, props.control.optionsExtra);
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

  return (
    state.flags.hidden ? (
      <input type="hidden" value={valueToString(state.value)} />
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
          value={valueToString(state.value)}
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
