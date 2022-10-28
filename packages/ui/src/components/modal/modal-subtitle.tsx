import React from 'react';
import styled from 'styled-components';
import { UIComponentProps } from '../types';

const defaultProps = {
  className: '',
};

type Props = {
  className?: string;
}

export type ModalSubtitleProps = UIComponentProps<Props>;

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

export const ModalSubtitle: React.FC<React.PropsWithChildren<ModalSubtitleProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalSubtitleProps> & typeof defaultProps) => { // !!! any

  return (
    <StyledSubtitle className={className} {...props}>
      {children}
    </StyledSubtitle>
  )
}

ModalSubtitle.defaultProps = defaultProps;
ModalSubtitle.displayName = 'ModalSubtitle';
