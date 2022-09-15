import { FormState } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import { Text } from '../components';

type FieldErrorProps = {
  state: FormState<any>;
}

export default function FieldError({ state, ...props }: FieldErrorProps) {
  const label = useLabel();
  return (
    <>
      {state.flags.touched && state.errors.map(error => (
        <Text
          key={error.key}
          size="10"
          margin="0.5em 0"
          padding="0.2em 0.5em"
          background="var(--color-primary-100)"
          color="var(--color-primary-500)"
        >{label(`error.${error.key}`)}</Text>
      ))}
    </>
  );
}

