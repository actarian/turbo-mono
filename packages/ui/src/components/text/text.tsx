import { withSchema } from '@websolute/core';
import styled, { css } from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';
import { CssButtonNavInverted, CssDefault } from '../button/button.css';

const CssH = css`
  h1, h2, h3, h4, h5, h6 {
    color: var(--color-neutral-500);
    margin-bottom: 3rem;
  }
  h4 {
    font-size: 1.2em;
  }
`;

const CssA = css`
  a[href] {
    ${CssDefault}
    ${CssButtonNavInverted}
  }
`;

const CssP = css`
  p {
    margin-bottom: 2rem;
  }
`;

const CssUl = css`
  ul {
    list-style: initial;
    margin: 0 0 2em 1.1em;

    &>li {
      padding: 0.3em 0;
    }
  }
`;

export type FontSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' |
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

type Props = {
  size?: FontSize;
  gradient?: boolean;
};

export type TextProps = UIStyledComponentProps<Props>;

const TextBase = styled.div<TextProps>`
  font-family: var(--font-primary-family);
  ${({ size }) => {
    if (!size) return '';
    const index = (typeof size === 'string' ? parseInt(size) : size) - 1;
    return css`
      font-size: var(--font-primary-size-${index}, 1rem);
      line-height: var(--font-primary-line-height-${index}, 1);
      font-weight: var(--font-primary-font-weight-${index}, normal);
    `;
  }}
  ${props => props.gradient ? css`
    background: -webkit-linear-gradient(0deg, var(--color-primary-500), var(--color-secondary-500));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ` : ''}

  ${CssH}
  ${CssA}
  ${CssP}
  ${CssUl}
  ${props => getCssResponsive(props)}
`;

const TextSecondary = styled.div<TextProps>`
  display: inline-block;
  font-family: var(--font-secondary-family);
  ${({ size }) => {
    if (!size) return '';
    const index = (typeof size === 'string' ? parseInt(size) : size) - 1;
    return css`
      font-size: var(--font-secondary-size-${index}, 1rem);
      line-height: var(--font-secondary-line-height-${index}, 1);
      font-weight: var(--font-secondary-font-weight-${index}, normal);
    `;
  }}
  ${props => props.gradient ? css`
    background: -webkit-linear-gradient(0deg, var(--color-primary-500), var(--color-secondary-500));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ` : ''}

  ${CssUl}
  ${props => getCssResponsive(props)}
`;

const TextSROnly = styled.div<TextProps>`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
`;

export const Text = withSchema(TextBase, {
  Primary: TextBase,
  Secondary: TextSecondary,
  SROnly: TextSROnly,
  displayName: 'Text',
});
