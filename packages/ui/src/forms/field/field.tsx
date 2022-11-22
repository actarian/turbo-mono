import { getClassNames } from '@websolute/core';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type FieldProps = UIStyledComponentProps<Props>;

export type FieldComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

const StyledField = styled.div<FieldProps>`
  display: flex;
  flex-direction: column;
  // margin-bottom: 0.5rem;

  label {
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  ${props => getCssResponsive(props)}
`;

export const Field: FieldComponent = forwardRef(({ className, ...props }, ref) => {
  const classNames = getClassNames('input', className);
  return (
    <StyledField ref={ref} className={classNames} as="div" {...props} />
  );
});

Field.displayName = 'Field';
