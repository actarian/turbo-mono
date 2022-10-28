import { getClassNames } from '@websolute/core';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components';
import { CustomSelectIconClear } from './custom-select-icon-clear';

type Props = {
  disabled: boolean;
  onClear: (() => void) | null;
}

const StyledCustomSelectMultipleValue = styled.div<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  padding: 0.5em 0.5em;
  border-radius: calc(var(--border-radius) * 0.5);
  background-color: var(--color-primary-100);
  color: var(--color-primary-600);

  &.disabled {
    color: var(--color-primary-400);
  }

  /*
  & > :global(div:not(.clear-icon)),
  & > :global(div:not(.clear-icon):hover) {
    border-radius: 0;
    background-color: transparent;
    padding: 0;
    margin: 0;
    color: inherit;
  }
  */
`;

export const CustomSelectMultipleValue: React.FC<React.PropsWithChildren<Props>> = ({
  disabled,
  onClear,
  children,
}) => {
  const classNames = getClassNames('multiple-value', { disabled });
  return (
    <>
      <Button variant="secondary" size="sm" className={classNames} disabled={disabled}>
        <span>{children}</span>
        {!!onClear && <CustomSelectIconClear onClick={onClear} />}
      </Button>
      {false &&
        <StyledCustomSelectMultipleValue className={classNames} disabled={disabled}>
          <span>{children}</span>
          {!!onClear && <CustomSelectIconClear onClick={onClear} />}
        </StyledCustomSelectMultipleValue>
      }
    </>
  )
}

CustomSelectMultipleValue.displayName = 'CustomSelectMultipleValue';
