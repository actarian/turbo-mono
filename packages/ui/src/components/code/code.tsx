import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type CodeProps = UIStyledComponentProps<Props>;

const Code = styled.div<CodeProps>`
  padding: 0.3em 0.8em;
  background: var(--color-neutral-100);
  border: 1px solid var(--color-neutral-200);
  border-radius: 0.3em;
  font-family: monospace;
  ${props => getCssResponsive(props)}
`;

export default Code;
