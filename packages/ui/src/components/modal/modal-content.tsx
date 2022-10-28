import { getClassNames } from '@websolute/core';
import React from 'react';
import styled from 'styled-components';
import { UIStyledComponentProps } from '../types';
import { getCssResponsive } from '../utils';

// !!!

type Props = {
  className?: string;
}

const defaultProps = {
  className: '',
};

export type ModalContentProps = UIStyledComponentProps<Props>;

const StyleContent = styled.div`
  position: relative;
  padding: 2rem 1rem;
  font-size: 1rem;
  text-align: left;

  & > :global(*:first-child) {
    margin-top: 0;
  }
  & > :global(*:last-child) {
    margin-bottom: 0;
  }

  ${props => getCssResponsive(props)}
`;

export const ModalContent: React.FC<React.PropsWithChildren<ModalContentProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalContentProps> & typeof defaultProps) => { // !!! any
  const classNames = getClassNames('content', className);
  return (
    <StyleContent className={classNames} {...props}>
      {children}
    </StyleContent>
  )
}

ModalContent.defaultProps = defaultProps;

ModalContent.displayName = 'ModalContent';
