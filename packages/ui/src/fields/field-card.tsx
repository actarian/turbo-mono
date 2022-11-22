import { IOption } from '@websolute/core';
import { FormControl, useControl } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { Field, FieldProps, Label, RadioCard } from '../forms';
import { FieldError } from './field-error';

type FieldCardProps = {
  control: FormControl;
  uid?: number | null | undefined;
};

export function FieldCard({
  uid,
  control,
  ...props
}: FieldCardProps & FieldProps) {
  const label = useLabel();

  const uniqueName = `${control.name}-${uid}`;

  const [state, setValue, setTouched] = useControl<IOption>(control);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('onChange', event.target.value);
    const option = control.options?.find(x => x.id.toString() === event.target.value);
    setValue(option || null);
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
        <Label margin="0">
          {control.label && label(control.label)}
        </Label>
        <RadioCard.Group
          id={uniqueName}
          name={uniqueName}
          initialValue={state.value?.id.toString()}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={state.flags.disabled || state.flags.readonly}
        >
          {control.options?.map(option => (
            <RadioCard key={option.id} value={option.id.toString()}>
              <RadioCard.Title>{option.name}</RadioCard.Title>
              {option.abstract && <RadioCard.Abstract dangerouslySetInnerHTML={{ __html: option.abstract }}></RadioCard.Abstract>}
            </RadioCard>
          ))}
        </RadioCard.Group>
        <FieldError state={state} />
      </Field>
    )
  );
}
