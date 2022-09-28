import styled from 'styled-components';
import type { UIStyledComponentProps } from '../../components/types';
import { getCssResponsive } from '../../components/utils';

type Props = {};

export type LoadingProps = UIStyledComponentProps<Props>;

const StyledLoading = styled.div<LoadingProps>`
	display: block;
	position: relative;
	width: 50%;
	display: grid;
	place-items: center;

  &::before,
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
  }

  &::before {
    width: 6vmin;
    height: 0.4vmin;
    background-color: var(--color-primary-300);
    border-radius: 0.2vmin;
    animation: loading 0.8s cubic-bezier(0, 0, 0.03, 0.9) infinite;
  }

  @keyframes loading {
    0%, 44%, 88.1%, 100% {
      transform-origin: left;
    }

    0%, 100%, 88% {
      transform: scaleX(0);
    }

    44.1%, 88% {
      transform-origin: right;
    }

    33%, 44% {
      transform: scaleX(1);
    }
  }
  ${props => getCssResponsive(props)}
`

export default StyledLoading;
