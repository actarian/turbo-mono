import { FormState } from '@websolute/forms';
import { useLabel } from '@websolute/hooks';
import styled from 'styled-components';

type FieldErrorProps = {
  state: FormState<any>;
}

const StyledFieldError = styled.div`
  margin: 0.5em 0;
  padding: 0.2em 0.5em;
  font-size: var(--font-primary-size-10, --form-font-size, 1rem);
  font-weight: 500;
  background: var(--color-primary-100);
  color: var(--color-primary-500);
`;

export function FieldError({ state, ...props }: FieldErrorProps) {
  const label = useLabel();
  return (
    <>
      {state.flags.touched && state.errors.map(error => (
        <StyledFieldError key={error.key}>{label(`error.${error.key}`)}</StyledFieldError>
      ))}
    </>
  );
}

