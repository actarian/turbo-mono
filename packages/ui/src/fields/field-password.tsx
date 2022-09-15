import { FormControl, useControl } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { Eye } from '@websolute/icons';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { Field, Input, Label } from '../forms';
import FieldError from './field-error';

type FieldPasswordProps = {
  control: FormControl;
  uid?: number | null | undefined;
}

export default function FieldPassword(props: FieldPasswordProps) {
  const label = useLabel();

  const uniqueName = `${props.control.name}-${props.uid}`;

  const [state, setValue, setTouched] = useControl<string>(props.control);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('FieldPassword', event.target.value);
    setValue(event.target.value);
    // props.control.value = event.target.value;
  }

  const [focus, setFocus] = useState(false);

  const [type, setType] = useState('password');

  const onBlur = (_: FocusEvent<HTMLInputElement>) => {
    setTouched();
    setFocus(false);
  }

  const onFocus = (_: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
  }

  const onToggle = () => {
    setType(type === 'password' ? 'text' : 'password');
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
          type={type}
          placeholder={label(props.control.placeholder || props.control.label || '')}
          value={state.value || ''}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={state.flags.disabled}
          readOnly={state.flags.readonly}
          width="100%"
          after={<Eye color={type === 'password' ? 'var(--color-neutral-400)' : 'var(--color-primary-500)'} onClick={() => onToggle()} />}
        />

        <FieldError state={state} />
      </Field>
    )
  );
}

