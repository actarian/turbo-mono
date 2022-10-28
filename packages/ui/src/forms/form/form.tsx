import { getClassNames } from '@websolute/core';
import { FormState } from '@websolute/forms';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
  state?: FormState<any>
};

export type FormProps = UIStyledComponentProps<Props, 'form'>;

export type FormComponent<C extends React.ElementType = 'form'> = UIComponentWithRef<C, Props>;

const StyledForm = styled.div<FormProps>`
  --form-font-size: 1rem; // 1.125rem
  --form-line-height: 1.625; // 1.625
  --form-padding: 0.8em; // 1rem
  ${props => getCssResponsive(props)}
`;

export const Form: FormComponent = forwardRef(({ className, ...props }, ref) => {
  const classNames = getClassNames('form', className, props.state?.flags);
  return (
    <StyledForm ref={ref} className={classNames} as='form' {...props} />
  );
});

Form.displayName = 'Form';
