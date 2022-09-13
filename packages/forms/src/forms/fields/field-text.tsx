import { useLabel } from '@websolute/hooks';
import { Field, Input, Label } from '@websolute/ui';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { useControl } from '../../hooks';
import { FormControl } from '../form-control';
import FieldError from './field-error';

type FieldTextProps = {
  control: FormControl;
  uid?: number | null | undefined;
}

export default function FieldText(props: FieldTextProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<string>(props.control);

  const onDidChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('FieldText', event.target.value);
    setValue(event.target.value);
    // props.control.value = event.target.value;
  }

  const [focus, setFocus] = useState(false);

  const onDidBlur = (_: FocusEvent<HTMLInputElement>) => {
    setTouched();
    setFocus(false);
  }

  const onDidFocus = (_: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
  }

  return (
    state.flags.hidden ? (
      <input type="hidden" value={state.value || ''} />
    ) : (
      <Field>
        <Label>
          {props.control.label && label(props.control.label)}
        </Label>

        <Input
          id={uniqueName}
          name={uniqueName}
          type={(state.flags.invalid && state.flags.touched) ? 'error' : 'default'}
          placeholder={label(props.control.placeholder || props.control.label || '')}
          value={state.value || ''}
          onChange={onDidChange}
          onBlur={onDidBlur}
          onFocus={onDidFocus}
          disabled={state.flags.disabled}
          readOnly={state.flags.readonly}
          width="100%" />

        <FieldError state={state} />
      </Field>
    )
  );
}

