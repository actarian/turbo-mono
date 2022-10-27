import { FormControl, useControl } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { ChangeEvent, FocusEvent, ReactNode, useState } from 'react';
import { Field, Input, Label } from '../forms';
import FieldError from './field-error';

type FieldTextProps = {
  control: FormControl;
  uid?: number | null | undefined;
  before?: ReactNode;
  after?: ReactNode;
}

export default function FieldText(props: FieldTextProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<string>(props.control);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('FieldText', event.target.value);
    setValue(event.target.value);
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
        <Label>
          {props.control.label && label(props.control.label)}
        </Label>

        <Input
          id={uniqueName}
          name={uniqueName}
          placeholder={label(props.control.placeholder || props.control.label || '')}
          value={state.value || ''}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={state.flags.disabled}
          readOnly={state.flags.readonly}
          before={props.before}
          after={props.after}
          width="100%" />

        <FieldError state={state} />
      </Field>
    )
  );
}

