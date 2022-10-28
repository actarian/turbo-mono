import { getClassNames, withSchema } from '@websolute/core';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Background } from '../../components/background/background';
import { UIComponentWithRef, UIStyledComponentProps, Variant, Variants } from '../../components/types';
import { getAspectResponsive, getCssResponsive, getVariant, hasChildOfType } from '../../components/utils';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';

const variants: Variants = {
  default: css`
`,
  alfa: css`
  border: 1px solid var(--color-neutral-200);
  border-radius: 0.5em;
  // box-shadow: var(--card-shadow);
`,
  beta: css`
  background: var(--color-neutral-200);
  // border-radius: 2px;
`,
  gamma: css`
  border: 1px solid var(--color-neutral-200);
  border-radius: 20px;
  box-shadow: var(--card-shadow);
`,
  delta: css`
  border: 1px solid var(--color-neutral-200);
  border-radius: 20px;
  box-shadow: var(--card-shadow);
`
};

type Props = {
  variant?: Variant;
  hoverable?: boolean;
};

export type CardProps = UIStyledComponentProps<Props>;

export type CardComponent<C extends React.ElementType = 'div'> = UIComponentWithRef<C, Props>;

const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  // margin: 0 0 40px 0;

  ${props => getVariant(variants, props.variant)}
  ${props => getCssResponsive(props)}
  ${props => getAspectResponsive(props)};
  ${props => props.hoverable ? css`
    cursor: pointer;
    .media {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      &>:not(.media-info) {
        transition: ease-in-out 200ms;
        transition-property: transform, opacity;
      }
    }
    &:hover {
      .media {
        &>:not(.media-info) {
          transform: scale(1.1);
        }
      }
      .button {
        &:after {
          transform: scale(1, 1);
        }
      }
    }
  ` : ''}
  ${props => hasBackground(props) ? css`
    color: var(--color-neutral-100);
    position: relative;

    &>:not(.background) {
      position: relative;
    }
  `: ''}
`;

const CardBase: CardComponent = forwardRef(({ children, className, as = 'div', ...props }, ref) => {
  const classNames = getClassNames('card', className);
  return (<StyledCard className={classNames} ref={ref} as={as} {...props}>{children}</StyledCard>);
});

CardBase.displayName = 'Card';

export const Card = withSchema(CardBase, {
  Background: Background,
  Content: CardContent,
  Footer: CardFooter,
});

function hasBackground(props: CardProps): boolean {
  return hasChildOfType(props.children, Background);
}

/*
${props => props.aspect ? css`
  width: 100%;
  padding-top: ${100 / props.aspect}%;
  overflow: hidden;

  &>div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
` : ''};
*/

/*
${props => props.background ? css`
  color: var(--color-neutral-100);

  &>:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &>img,
    &>video,
    &>canvas,
    &>iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`: ''}
*/
