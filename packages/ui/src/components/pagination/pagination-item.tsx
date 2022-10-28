import { getClassNames } from '@websolute/core';
import React from 'react';
import styled from 'styled-components';

type Props = {
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;
export type PaginationItemProps = Props & NativeAttrs;

const StyledPaginationItem = styled.div`
  margin-right: 0.428em;
  display: inline-block;

  button {
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-transform: capitalize;
    user-select: none;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    box-shadow: none;
    outline: none;
    height: var(--pagination-size);
    min-width: var(--pagination-size);
    font-size: inherit;
    cursor: pointer;
    color: var(--color-primary-500);
    border-radius: var(--border-radius);
    background-color: var(--color-neutral-100);
    transition: all linear 200ms 0ms;

    &:hover {
      background-color: var(--color-primary-100);
    }

    :global(svg) {
      width: 1.3em;
      height: 1.3em;
    }

    &.active {
      font-weight: 700;
      background-color: var(--color-primary-500);
      color: var(--color-neutral-100);
      box-shadow: var(--shadow-xs);
    }

    &.active:hover {
      background-color: var(--color-primary-900);
      box-shadow: var(--shadow-sm);
    }

    &.disabled {
      color: var(--color-neutral-400);
      cursor: not-allowed;
    }

    &.disabled:hover {
      background-color: var(--color-neutral-200);
    }
  }
`

export const PaginationItem: React.FC<React.PropsWithChildren<PaginationItemProps>> = ({ children, active, disabled, onClick, ...props }) => {

  const onClick_ = (event: React.MouseEvent) => {
    if (disabled) {
      return;
    }
    onClick && onClick(event);
  };

  const classNames = getClassNames({ active, disabled });

  return (
    <StyledPaginationItem as="li">
      <button className={classNames} onClick={onClick_} {...props}>
        {children}
      </button>
    </StyledPaginationItem>
  );
}

PaginationItem.displayName = 'PaginationItem';
