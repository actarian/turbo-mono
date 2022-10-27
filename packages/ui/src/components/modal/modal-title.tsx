import { X } from '@websolute/icons';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components';
import type { UIComponentProps } from '../../components/types';

interface Props {
  className?: string;
  onClose?: () => void;
}

export type ModalTitleProps = UIComponentProps<Props>;

const StyledTitle = styled.h2`
  flex-shrink: 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
