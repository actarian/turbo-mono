import { useLabel } from '@websolute/hooks';
import { Text } from '@websolute/ui';
import { FormState } from '../types';

type FieldErrorProps = {
  state: FormState<any>;
}

export default function FieldError({ state, ...props }: FieldErrorProps) {
  const label = useLabel();
  return (
    <>
      {state.flags.touched && state.errors.map(error => (
        <Text key={error.key}>{label(`error.${error.key}`)}</Text>
      ))}
    </>
  );
}

