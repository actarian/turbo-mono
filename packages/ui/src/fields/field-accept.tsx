
import { FormControl, useControl } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { Text } from '../components';
import { Field, Label, Radio } from '../forms';
import { FieldError } from './field-error';

type FieldAcceptProps = {
  control: FormControl;
  uid?: number | null | undefined;
};

export function FieldAccept(props: FieldAcceptProps) {
  const label = useLabel();

  const [state, setValue, setTouched] = useControl<boolean>(props.control);

  const onSelect = (value: boolean) => {
    // console.log('value', value);
    setValue(value);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.value === 'true');
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
      <input type="hidden" value={state.value ? 'true' : 'false'} />
    ) : (
      <Field padding="1em 0" borderBottom="1px solid var(--color-neutral-200)">

        <Radio.Group initialValue={state.value ? 'true' : 'false'}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={state.flags.disabled || state.flags.readonly}
        >
          <Label width="auto"><Radio value="true" /> {label('form.accept.true')}</Label>
          <Label width="auto"><Radio value="false" /> {label('form.accept.false')}</Label>
        </Radio.Group>

        {props.control.label &&
          <Text>
            {label(props.control.label)}
          </Text>
        }

        <FieldError state={state} />
      </Field>
    )
  );
}
