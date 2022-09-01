import { ComponentCssResponsiveProps } from '@ui-components/types';
import { getCssResponsive } from '@ui-components/utils';
import styled from 'styled-components';

type Props = {
};

export type CodeProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Code = styled.div<CodeProps>`
  padding: 0.3em 0.8em;
  background: var(--color-neutral-100);
  border: 1px solid var(--color-neutral-200);
  border-radius: 0.3em;
  font-family: monospace;
  ${props => getCssResponsive(props)}
`;

export default Code;
