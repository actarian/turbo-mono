import { getClassNames } from '@websolute/core';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { Text } from '../../components';
import type { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
  error?: Error;
};

export type FormErrorProps = UIStyledComponentProps<Props, 'form'>;

export type FormErrorComponent<C extends React.ElementType = 'form'> = UIComponentWithRef<C, Props>;

const StyledFormError = styled(Text)`
  padding: 1rem;
  font-weight: 700;
  text-align: center;
  background: var(--color-danger-100);
  color: var(--color-danger-500);
  ${props => getCssResponsive(props)}
`;

const FormError: FormErrorComponent = forwardRef(({ className, ...props }, ref) => {
  const classNames = getClassNames('form-error', className);
  return (
    <StyledFormError ref={ref} className={classNames} {...props} />
  );
});

FormError.displayName = 'FormError';

export default FormError;
