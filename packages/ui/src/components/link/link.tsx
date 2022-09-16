import { getClassNames } from '@websolute/core';
import React from 'react';
import styled from 'styled-components';
import LinkIcon from './link-icon';

export interface Props {
  href?: string;
  icon?: boolean;
  underline?: boolean;
  className?: string;
}

type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>
export type LinkProps = Props & NativeAttrs

const StyledLink = styled.div`
  display: inline-flex;
  align-items: baseline;
  line-height: inherit;
  color: var(--color-primary-500);
  text-decoration: none;
  transition: color 200ms ease 0ms;
  width: fit-content;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    color: var(--color-primary-700);
  }

  .underline {
    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Link = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<LinkProps>>(({
  href = '',
  icon = false,
  underline = false,
  className = '',
  children,
  ...props
}: React.PropsWithChildren<LinkProps>, ref: React.Ref<HTMLAnchorElement>) => {
  const classNames = getClassNames('link', { underline }, className);
  return (
    <StyledLink as="a" className={classNames} href={href} ref={ref} {...props}>
      {children}
      {icon && <LinkIcon />}
    </StyledLink>
  )
},
)

Link.displayName = 'Link';

export default Link;
