import { ComponentProps } from '@ui-components/types';
import React from 'react';
import styled from 'styled-components';

const defaultProps = {
  className: '',
};

interface Props {
  className?: string;
}

export type ModalSubtitleProps = ComponentProps<Props, HTMLDivElement>;

const StyledSubtitle = styled.div`
  font-weight: normal;
  display: inline-block;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.5em;
  text-align: center;
  word-break: break-word;
  text-transform: uppercase;
  color: var(--color-primary-500);
`;

const ModalSubtitleComponent: React.FC<React.PropsWithChildren<ModalSubtitleProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalSubtitleProps> & typeof defaultProps) => { // !!! any

  return (
    <StyledSubtitle className={className} {...props}>
      {children}
    </StyledSubtitle>
  )
}

ModalSubtitleComponent.defaultProps = defaultProps;
ModalSubtitleComponent.displayName = 'ModalSubtitle';

export default ModalSubtitleComponent;
