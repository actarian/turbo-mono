import { usePage } from '@websolute/hooks';
import Link, { LinkProps } from 'next/link';
import React, { Children } from 'react';

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement;
  activeClassName?: string;
  scrollToHash?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, activeClassName = 'active', ...props }: NavLinkProps) => {
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const { href } = usePage();
  // console.log('href', href, 'props.href', props.href);

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as

  const isActive = href === props.href || href === props.as;
  // console.log('isActive', isActive, href, props.href, props.as);
  const className = isActive ? `${childClassName} ${activeClassName}`.trim() : childClassName;

  return (
    <Link {...props}>
      {isActive ? React.cloneElement(children, {
        className: className || null,
      }) : children}
    </Link>
  )
}

/*
NavLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};
*/

export default NavLink;
