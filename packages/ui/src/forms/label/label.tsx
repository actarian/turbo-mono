import { getClassNames } from '@websolute/core';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type LabelProps = UIStyledComponentProps<Props>;

export type LabelComponent<C extends React.ElementType = 'label'> = UIComponentWithRef<C, Props>;

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: var(--font-primary-size-10, --form-font-size, 1rem);
  cursor: pointer;

  ${props => getCssResponsive(props)}
`;

export const Label: LabelComponent = forwardRef(({ className, as = 'label', ...props }, ref) => {
  const classNames = getClassNames('label', className);
  return (
    <StyledLabel className={classNames} ref={ref} as={as} {...props} />
  );
});

Label.displayName = 'Label';
