
import { useLabel } from '@websolute/hooks';
import { Field, Label, Radio, Text } from '@websolute/ui';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { useControl } from '../../hooks';
import { FormControl } from '../form-control';

type FieldAcceptProps = {
  control: FormControl;
  uid?: number | null | undefined;
}

export default function FieldAccept(props: FieldAcceptProps) {
  const label = useLabel();

  const [state, setValue, setTouched] = useControl<string>(props.control);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.value === 'true');
  }

  const onSelect = (value: boolean) => {
    // console.log('value', value);
    setValue(value);
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
      <Field padding="1em 0" borderBottom="1px solid var(--color-neutral-200)">

        <Radio.Group
          initialValue={state.value || ''}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={state.flags.disabled || state.flags.readonly}
        >
          <Label width="auto"><Radio value='true' /> {label('form.accept.true')}</Label>
          <Label width="auto"><Radio value='false' /> {label('form.accept.false')}</Label>
        </Radio.Group>

        {props.control.label &&
          <Text>
            {label(props.control.label)}
          </Text>
        }

        {state.flags.touched && state.errors.map(error => (
          <Text key={error.key}>{label(`error.${error.key}`)}</Text>
        ))}
      </Field>
    )
  );
}
