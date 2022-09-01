import { Ellipsis } from '@ui-components';
import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type SelectLabelProps = Props & NativeAttrs;

const StyledSelectLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0.65rem 0.5rem;
  margin: 0;
  user-select: none;
  color: var(--color-primary-700);
  border-bottom: 1px solid var(--color-neutral-200);
  font-size: 0.875em;
  font-weight: 500;
  text-transform: uppercase;
`

const SelectLabel: React.FC<React.PropsWithChildren<SelectLabelProps>> = ({
  children,
  ...props
}: React.PropsWithChildren<SelectLabelProps>) => {
  return (
    <StyledSelectLabel {...props}>
      <Ellipsis>{children}</Ellipsis>
    </StyledSelectLabel>
  );
}

SelectLabel.displayName = 'SelectLabel';

export default SelectLabel;
