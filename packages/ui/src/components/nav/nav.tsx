import { withSchema } from '@websolute/core';
import React from 'react';
import styled, { css } from 'styled-components';
import { UIStyledComponentProps, Variant, Variants } from '../../components/types';
import { getCssResponsive, getVariant } from '../../components/utils';

const variants: Variants = {
  default: css`
`,
  alfa: css`
`,
  beta: css`
`,
  gamma: css`
`,
  delta: css`
`
};

type Props = {
  type?: Variant;
};

export type NavProps = UIStyledComponentProps<Props, 'ul'>;

const NavUl = styled.ul<NavProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  ${props => getVariant(variants, props.type)}
  ${props => getCssResponsive(props, { gap: '0.6rem' })}
`;

const NavLi = styled.li<NavProps>`
  padding: 0;
`;

const NavRow = (props: NavProps) => {
  const navProps = { alignItems: 'center', ...props };
  return (
    <NavUl {...navProps}>
      {React.Children.map(navProps.children, child => (
        <NavLi>{child}</NavLi>
      ))}
    </NavUl>
  );
};

const NavCol = (props: NavProps) => {
  const navProps = { flexDirection: 'column', ...props };
  return (
    <NavUl {...navProps}>
      {React.Children.map(navProps.children, child => (
        <NavLi>{child}</NavLi>
      ))}
    </NavUl>
  );
};

export const NavBase = (props: NavProps) => {
  return (
    <NavRow {...props}>{props.children}</NavRow>
  );
};

export const Nav = withSchema(NavBase, {
  Row: NavRow,
  Col: NavCol,
  displayName: 'Nav',
});
