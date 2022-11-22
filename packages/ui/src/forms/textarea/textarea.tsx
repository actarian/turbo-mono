import { getClassNames } from '@websolute/core';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { UIComponentWithRef, UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type TextAreaProps = UIStyledComponentProps<Props, 'textarea'>;

export type TextAreaComponent<C extends React.ElementType = 'textarea'> = UIComponentWithRef<C, Props>;

const StyledTextArea = styled.div`
  display: block;
  width: 100%;
  padding: var(--form-padding);
  appearance: none;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  resize: vertical;
  min-height: 4em;
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }

  &.active:not(.disabled),
  &:hover:not(.disabled) {
    border-color: var(--color-neutral-300);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &::placeholder {
    color: inherit;
    opacity: 0.3;
  }

  ${props => getCssResponsive(props)}
`;

export const TextArea: TextAreaComponent = forwardRef(({
  as = 'textarea',
  children,
  className,
  ...props
}, ref) => {
  const classNames = getClassNames('textarea', className);
  return (
    <StyledTextArea className={classNames} ref={ref} as={as} {...props}>
      {children}
    </StyledTextArea>
  );
});

TextArea.displayName = 'TextArea';
