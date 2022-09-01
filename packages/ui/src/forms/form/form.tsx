import { forwardRef } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { useClasses } from '../../hooks';

type Props = {
};

export type FormProps = ComponentCssResponsiveProps<Props, HTMLFormElement>;

const StyledForm = styled.div<FormProps>`
  --form-font-size: 1rem; // 1.125rem
  --form-line-height: 1.625; // 1.625
  --form-padding: 0.8em; // 1rem
  ${props => getCssResponsive(props)}
`;

const Form = forwardRef<HTMLFormElement, FormProps>(({ className, ...props }, ref) => {
  const classNames = useClasses('form', className);
  return (
    <StyledForm ref={ref} className={classNames} as='form' {...props} />
  );
});

Form.displayName = 'Form';

export default Form;
