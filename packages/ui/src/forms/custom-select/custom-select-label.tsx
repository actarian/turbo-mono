import React from 'react';
import styled from 'styled-components';
import { Ellipsis } from '../../components';

type Props = {
  className?: string;
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

export type CustomSelectLabelProps = Props & NativeAttrs;

const StyledCustomSelectLabel = styled.div`
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
`;

export const CustomSelectLabel: React.FC<React.PropsWithChildren<CustomSelectLabelProps>> = ({
  children,
  ...props
}: React.PropsWithChildren<CustomSelectLabelProps>) => {
  return (
    <StyledCustomSelectLabel {...props}>
      <Ellipsis>{children}</Ellipsis>
    </StyledCustomSelectLabel>
  );
};

CustomSelectLabel.displayName = 'CustomSelectLabel';
