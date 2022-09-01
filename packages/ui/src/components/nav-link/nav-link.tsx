import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement;
  activeClassName?: string;
  scrollToHash?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, activeClassName = 'active', ...props }: NavLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as

  const isActive = asPath === props.href || asPath === props.as;
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
