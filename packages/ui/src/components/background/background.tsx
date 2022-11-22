import styled from 'styled-components';
import { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {
};

export type BackgroundProps = UIStyledComponentProps<Props>;

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  // background: var(--color-neutral-900);

  &, & > * {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > * > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${props => getCssResponsive(props)}
`;

Background.defaultProps = {
  className: 'background',
};
