import { forwardRef } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { useClasses } from '../../hooks';

type Props = {
};

export type FieldProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledField = styled.div<FieldProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  label {
    font-weight: 500;
  }

  ${props => getCssResponsive(props)}
`;

const Field = forwardRef<HTMLDivElement, FieldProps>(({ className, ...props }, ref) => {
  const classNames = useClasses('input', className);
  return (
    <StyledField ref={ref} className={classNames} as='div' {...props} />
  );
});

Field.displayName = 'Field';

export default Field;
