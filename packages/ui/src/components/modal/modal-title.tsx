import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components';
import { ComponentProps } from '../../components/types';
import { X } from '../../icons';

interface Props {
  className?: string;
  onClose?: () => void;
}

export type ModalTitleProps = ComponentProps<Props, HTMLDivElement>;

const StyledTitle = styled.h2`
  flex-shrink: 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  // text-align: center;
  // line-height: 1.6;
  // font-weight: normal;
  // font-size: 1.5rem;
  // color: var(--color-neutral-900);
  // text-transform: capitalize;
  // word-break: break-word;
`;

const ModalTitleComponent: React.FC<React.PropsWithChildren<ModalTitleProps | any>> = ({
  className = '',
  onClose = () => { },
  children,
  ...props
}: React.PropsWithChildren<ModalTitleProps>) => { // !!! any
  return (
    <StyledTitle className={className} {...props}>
      {children}
      <Button onClick={onClose}><X /></Button>
    </StyledTitle>
  )
}

ModalTitleComponent.displayName = 'ModalTitle';

export default ModalTitleComponent;
