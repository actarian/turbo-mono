import React from 'react';
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { useClasses } from '../../hooks';

interface Props {
  className?: string;
}

const defaultProps = {
  className: '',
};

export type ModalContentProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

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

const ModalContentComponent: React.FC<React.PropsWithChildren<ModalContentProps | any>> = ({ className, children, ...props }: React.PropsWithChildren<ModalContentProps> & typeof defaultProps) => { // !!! any
  return (
    <StyleContent className={useClasses('content', className)} {...props}>
      {children}
    </StyleContent>
  )
}

ModalContentComponent.defaultProps = defaultProps;

ModalContentComponent.displayName = 'ModalContent';

export default ModalContentComponent;
