import { css } from 'styled-components';

export const CssDefault = css`
  // display: inline-block;
  border: none;
  text-decoration: none;
  background: none;
  appearance: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  font-size: 1em;
  line-height: 1;
  transition: ease 150ms;
  transition-property: background-color, color, border-color, outline-color, opacity;
  cursor: pointer;
`;

export const CssResponsive = css`
@media (max-width: 399.9px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const CssFocus = css`
&:focus,
&:active {
  outline: 2px solid var(--color-primary-200);
  outline-offset: 2px;
}
`;

export const CssActive = css`
&.active {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
`;

export const CssDisabled = css`
&:disabled,
&.disabled {
  pointer-events: none;
  opacity: 0.5;
}
`;

export const CssSvg = css`
svg {
  width: 1em;
  height: 1em;
  margin: 0 0.3em;
  transition: transform ease-in-out 200ms;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}
&:hover,
&.active {
  svg {
    transform: scale(1.1);
  }
}
`;

export const CssUnderline = css`
&>* {
  display: inline;
  background-image: linear-gradient(90deg, var(--color-secondary-500), currentColor);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 0.1em;
  transition: background-size ease 200ms;
}

&:hover {
  &>* {
    background-size: 100% 0.1em;
  }
}
`;

export const CssAfter = css`
&:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scale(0, 1);
  transform-origin: left;
  transition: transform ease 200ms;
}

&:hover,
&.active {
  &:after {
    transform: scale(1, 1);
  }
}
`;

export const CssAfterInverted = css`
&:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scale(1, 1);
  transform-origin: left;
  transition: transform ease 200ms;
}

&:hover,
&.active {
  &:after {
    transform: scale(0, 1);
  }
}
`;

export const CssButtonDefault = css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-100);

  &:hover,
  &.active {
    color: var(--color-primary-600);
    border-color: var(--color-primary-200);
  }

  ${CssSvg}
`;

export const CssButtonPrimary = css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: var(--color-primary-500);
  color: var(--color-neutral-100);
  border: 2px solid var(--color-primary-500);

  &:hover,
  &.active {
    background-color: var(--color-primary-600);
    color: var(--color-neutral-100);
    border-color: var(--color-primary-600);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`;

export const CssButtonSecondary = css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: var(--color-primary-100);
  border: 2px solid var(--color-primary-100);
  color: var(--color-primary-500);

  &:hover,
  &.active {
    border-color: var(--color-primary-300);
    color: var(--color-primary-600);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`;

export const CssButtonOutline = css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: transparent;
  border: 2px solid var(--color-primary-500);
  color: var(--color-primary-500);

  &:hover,
  &.active {
    background: var(--color-primary-500);
    border-color: var(--color-primary-600);
    color: var(--color-neutral-100);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`;

export const CssButtonGhost = css`
  padding: 0.8em 1.6em;
  border-radius: var(--button-border-radius);
  background: transparent;
  border: 2px solid transparent;
  color: var(--color-neutral-700);

  &:hover,
  &.active {
    background: transparent;
    border-color: var(--color-neutral-300);
    color: var(--color-neutral-900);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
  ${CssResponsive}
`;

export const CssButtonLink = css`
  position: relative;
  line-height: 1.5;
  color: var(--color-primary-400);

  &:hover,
  &.active {
    color: var(--color-primary-500);
  }

  ${CssAfter}
  ${CssSvg}
`;

export const CssButtonUnderline = css`
  position: relative;
  line-height: 1.5;
  color: var(--color-primary-400);

  &:hover,
  &.active {
    color: var(--color-primary-500);
  }

  ${CssAfterInverted}
  ${CssSvg}
`;

export const CssButtonNav = css`
  position: relative;
  line-height: 1.5;

  ${CssAfter}
  ${CssSvg}
  `;

export const CssButtonCircle = css`
  justify-content: center;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--color-neutral-200);
  border: 2px solid var(--color-neutral-200);
  color: var(--color-neutral-700);

  &>span {
    font-size: 0;
  }

  &:hover,
  &.active {
    border-color: var(--color-neutral-400);
    color: var(--color-neutral-900);
  }

  ${CssSvg}
  ${CssFocus}
  ${CssActive}
  ${CssDisabled}
`;
