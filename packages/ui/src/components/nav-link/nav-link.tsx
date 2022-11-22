import { usePage } from '@websolute/hooks';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

export type NavLinkProps = LinkProps & {
  children: React.ReactElement;
  activeClassName?: string;
  scrollToHash?: boolean;
};

export const NavLink: React.FC<NavLinkProps> = ({ children, activeClassName = 'active', ...props }: NavLinkProps) => {
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const { href } = usePage();
  const router = useRouter();
  const pathname = href || router.pathname;
  // console.log('pathname', pathname, 'props.href', props.href);

  const isActive = pathname && (pathname === props.href || pathname === props.as);
  // console.log('isActive', isActive, href, props.href, props.as);
  const className = isActive ? `${childClassName} ${activeClassName}`.trim() : childClassName;

  return (
    <Link {...props}>
      {isActive ? React.cloneElement(children, {
        className: className || null,
      }) : children}
    </Link>
  );
};
