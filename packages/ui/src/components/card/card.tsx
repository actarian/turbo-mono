import Background from '@ui-components/background/background';
import { ComponentCssResponsiveProps, Variant, Variants } from '@ui-components/types';
import { getAspectResponsive, getCssResponsive, getVariant, hasChildOfType } from '@ui-components/utils';
import React from 'react';
import styled, { css } from 'styled-components';
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
  type?: Variant;
  hoverable?: boolean;
};

export type CardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  // margin: 0 0 40px 0;

  ${props => getVariant(variants, props.type)}
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
        transition: transform ease-in-out 200ms;
      }
    }
    &:hover {
      .media {
        &>:not(.media-info) {
          transform: scale(1.1);
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

function hasBackground(props: CardProps): boolean {
  return hasChildOfType(props.children, Background);
}

const Card = React.forwardRef<Element, CardProps>((props: CardProps, ref?: React.Ref<Element>) => {
  return (<CardContainer {...props} ref={ref}>{props.children}</CardContainer>);
});

Card.displayName = 'Card';

(Card as ICard).Background = Background;
(Card as ICard).Content = CardContent;
(Card as ICard).Footer = CardFooter;

export default Card as ICard;

type ICard = typeof Card & {
  Background: typeof Background;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
};
