import React, { forwardRef, ReactElement, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { ComponentCssResponsiveProps, Variant, Variants } from '../../components/types';
import { getCssResponsive, getVariant } from '../../components/utils';

const variants: Variants = {
  default: css`
    color: var(--color-primary-500);
    border-color: var(--color-primary-100);
    /*
    box-shadow: var(--shadow-lg);
    background-color: var(--color-neutral-100);
    color: var(--color-neutral-900);
    */
    &>.btn:hover {
      background-color: var(--color-primary-100);
    }
    &>.btn+.btn, &>.btn+.btn:hover {
      border-color: var(--color-primary-100);
    }
`,
  alfa: css`
`,
  beta: css`
`,
};

type Props = {
  type?: Variant;
  vertical?: boolean;
}

export type ButtonGroupProps = ComponentCssResponsiveProps<Props, Element>;

const StyledButtonGroup = styled.div<ButtonGroupProps>`
  display: inline-flex;
  overflow: hidden;

  &>.btn {
    justify-content: center;
    border: none;
  }

  &>:global(.btn), &>:global(.btn:hover) {
    border: none;
  }

  color: var(--color-primary-500);
  border: 1px solid var(--color-primary-100);
  border-radius: var(--color-border-radius);

  ${props => (css`

    /*
    box-shadow: var(--color-shadow-lg);
    background-color: var(--color-neutral-100);
    color: var(--color-neutral-900);
    */

    &>.btn {
      flex: 1 0 ${100 / (React.Children.count(props.children) || 1)}%;
    }

    ${props.vertical ? css`
      flex-direction: column;
      justify-content: stretch;

      &>.btn{
        width: 100%;
      }

      &>.btn+.btn, &>.btn+.btn:hover {
        border-top: 1px solid var(--color-primary-100);
      }
    `: css`
      flex-direction: row;
      align-items: stretch;

      &>.btn{
        height: auto;
      }

      &>.btn+.btn, &>.btn+.btn:hover {
        border-left: 1px solid var(--color-primary-100);
      }
    `}
  `)}

  ${props => getVariant(variants, props.type || 'default')}
  ${props => getCssResponsive(props)}
`;

const ButtonGroup = forwardRef<Element, ButtonGroupProps>(({ children, ...props }: ButtonGroupProps, ref?: React.Ref<Element>) => {
  const mappedChildren = useMemo(() => React.Children.map(children as any, (child: ReactElement) =>
    React.cloneElement(child, child.props ? { ...child.props, className: `${child.props.className} btn` } : null)
  ), [children]);
  return (<StyledButtonGroup {...props} ref={ref}>{mappedChildren}</StyledButtonGroup>);
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
