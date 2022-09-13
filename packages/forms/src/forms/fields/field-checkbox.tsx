
import { useLabel } from '@websolute/hooks';
import { Checkbox, Field, Label, Text } from '@websolute/ui';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { useControl } from '../../hooks';
import { FormControl } from '../form-control';

type FieldCheckboxProps = {
  control: FormControl;
  uid?: number | null | undefined;
}

export default function FieldCheckbox(props: FieldCheckboxProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<boolean>(props.control);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('onChange', event.target.checked);
    setValue(event.target.checked);
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
      <input type="hidden" value={state.value ? state.value.toString() : ''} />
    ) : (
      <Field padding="1em 0" borderBottom="1px solid var(--color-neutral-200)">
        {/*props.control.label &&
          <Text type="secondary" small marginBottom='0.5em'>
            {label(props.control.label)}
          </Text>
        */}

        {/* type={(state.flags.invalid && state.flags.touched) ? 'error' : 'default'} */}
        <Label>
          <Checkbox
            id={uniqueName}
            name={uniqueName}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={state.flags.disabled || state.flags.readonly}
            checked={state.value === true}
          />
          {props.control.label && label(props.control.label)}
        </Label>

        {state.flags.touched && state.errors.map(error => (
          <Text key={error.key}>{label(`error.${error.key}`)}</Text>
        ))}
      </Field>
    )
  );
}

// {JSON.stringify(props.control.errors[key])}
