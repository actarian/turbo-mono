import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import { useClasses } from '@ui-hooks';
import { forwardRef } from 'react';
import styled from 'styled-components';

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
