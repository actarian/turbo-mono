/*
import styled, { css } from 'styled-components';
import { ComponentCssResponsiveProps, Variant, Variants } from '../../components/types';
*/
import styled from 'styled-components';
import { ComponentCssResponsiveProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

/*
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
*/

type Props = {
  // type?: Variant;
}

export type DividerProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const DividerContainer = styled.div<DividerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100%;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: 50%;
    margin-top: 1px;
    background-color: var(--color-neutral-300);
  }

  ${props => getCssResponsive(props, { padding: props.children ? '1rem 0' : '0.5rem 0' })}
`;

// ${props => getVariant(variants, props.type)}

const DividerTitle = styled.span<DividerProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
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
