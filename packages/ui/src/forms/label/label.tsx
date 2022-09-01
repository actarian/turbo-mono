import { forwardRef } from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { useClasses } from '../../hooks';

type Props = {
};

export type LabelProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: var(--form-font-size);

  ${props => getCssResponsive(props)}
`;

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  const classNames = useClasses('label', className);
  return (
    <StyledLabel ref={ref} className={classNames} as='label' {...props} />
  );
});

Label.displayName = 'Label';

export default Label;
