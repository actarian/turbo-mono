import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import { useClasses } from '@ui-hooks';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
}

export type TextAreaProps = ComponentCssResponsiveProps<Props, HTMLTextAreaElement>;

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

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  children,
  className,
  ...props
}, ref) => {
  const classNames = useClasses('textarea', className);
  return (
    <StyledTextArea ref={ref} className={classNames} as='textarea' {...props}>
      {children}
    </StyledTextArea>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
