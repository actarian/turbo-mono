import { ComponentCssResponsiveProps, Variant, Variants } from '@ui-components/types';
import { getCssResponsive, getVariant } from '@ui-components/utils';
import styled, { css } from 'styled-components';

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
}

export type DividerProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const DividerContainer = styled.div<DividerProps>`
  position: relative;
  height: 1px;
  max-width: 100%;
  background-color: var(--color-neutral-300);
  ${props => getVariant(variants, props.type)}
  ${props => getCssResponsive(props, { margin: props.children ? '1rem 0' : '0.5rem 0' })}
`;

const DividerTitle = styled.span<DividerProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -1px;
  min-height: 100%;
  display: inline-flex;
  align-items: center;
  transform: translate(-50%, -50%);
  padding: 0 0.75em;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-400);
  z-index: 1;
  white-space: nowrap;
`;

const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return (
    <DividerContainer {...props}>
      {props.children && <DividerTitle {...props}>{props.children}</DividerTitle>}
    </DividerContainer>
  )
};

export default Divider;
