import { css } from 'styled-components';

export const CssScrollbar = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 0;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-button:hover {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-neutral-400);
    box-shadow: none;
    border-radius: 4px;

    &:hover {
      background-color: var(--color-neutral-600);
    }
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-neutral-100);
    border-radius: 0;

    &:hover {
      background-color: var(--color-neutral-100);
    }
  }
`;
