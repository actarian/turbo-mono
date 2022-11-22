
import { FormControl, useControl } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { Checkbox, Field, FieldProps, Label } from '../forms';
import { FieldError } from './field-error';

type FieldCheckboxProps = {
  control: FormControl;
  uid?: number | null | undefined;
};

export function FieldCheckbox({
  uid,
  control,
  ...props
}: FieldCheckboxProps & FieldProps) {
  const label = useLabel();

  const uniqueName = `${control.name}-${uid}`;

  const [state, setValue, setTouched] = useControl<boolean>(control);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('onChange', event.target.checked);
    setValue(event.target.checked);
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
      <input type="hidden" value={state.value ? state.value.toString() : ''} />
    ) : (
      <Field {...props}>
        {/*props.control.label &&
          <Text type="secondary" small marginBottom='0.5em'>
            {label(props.control.label)}
          </Text>
        */}

        {/* type={(state.flags.invalid && state.flags.touched) ? 'error' : 'default'} */}
        <Label margin="0">
          <Checkbox
            id={uniqueName}
            name={uniqueName}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={state.flags.disabled || state.flags.readonly}
            checked={state.value === true}
          />
          {control.label && label(control.label)}
        </Label>

        <FieldError state={state} />
      </Field>
    )
  );
}

// {JSON.stringify(props.control.errors[key])}
