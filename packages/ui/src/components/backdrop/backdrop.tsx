import { getClassNames } from '@websolute/core';
import { useCurrentState } from '@websolute/hooks';
import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { UIComponentProps } from '../../components/types';
import { Transition } from '../transition/transition';

type Props = {
  visible?: boolean
  width?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
  onContentClick?: (event: MouseEvent<HTMLElement>) => void
  backdropClassName?: string
  positionClassName?: string
  layerClassName?: string
};

export type BackdropProps = UIComponentProps<Props>;

const defaultProps = {
  onClick: () => { },
  visible: false,
  onContentClick: () => { },
  backdropClassName: '',
  positionClassName: '',
  layerClassName: '',
};

const StyledBackdrop = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }

  .position {
    position: relative;
    z-index: 1001;
    outline: none;
    max-width: 90%;
    margin: 20px auto;
    vertical-align: middle;
    display: inline-block;
  }

  .position--full {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    margin: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }

  .layer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 1000;
    opacity: var(--backdrop-opacity);
  }

  &.backdrop-wrapper-enter .layer {
    opacity: 0;
  }

  &.backdrop-wrapper-enter-active .layer {
    opacity: var(--backdrop-opacity);
  }

  &.backdrop-wrapper-leave .layer {
    opacity: var(--backdrop-opacity);
  }

  &.backdrop-wrapper-leave-active .layer {
    opacity: 0;
  }
`;

export const Backdrop: React.FC<React.PropsWithChildren<BackdropProps | any>> = React.memo(
  ({
    children,
    onClick,
    visible,
    width,
    onContentClick,
    backdropClassName,
    layerClassName,
    positionClassName,
    ...props
  }: React.PropsWithChildren<BackdropProps> & typeof defaultProps) => { // !!! any

    const [, setIsContentMouseDown, IsContentMouseDownRef] = useCurrentState(false);

    const clickHandler = (event: MouseEvent<HTMLElement>) => {
      if (IsContentMouseDownRef.current) {
        return;
      }
      if (onClick) {
        onClick(event);
      }
    };

    const mouseUpHandler = () => {
      if (!IsContentMouseDownRef.current) return;
      const timer = setTimeout(() => {
        setIsContentMouseDown(false);
        clearTimeout(timer);
      }, 0);
    };

    const backdropClassNames = getClassNames('backdrop', backdropClassName);
    const layerClassNames = getClassNames('layer', layerClassName);
    const positionClassNames = getClassNames('position', positionClassName);

    // !!! todo backdrop position styled component with css responsive.

    return (
      <Transition name="backdrop-wrapper" visible={visible} clearTime={300}>
        <StyledBackdrop className={backdropClassNames} onClick={clickHandler} onMouseUp={mouseUpHandler}
          {...props}>
          <div className={layerClassNames} />
          <div className={positionClassNames} style={{ width }} onClick={onContentClick} onMouseDown={() => setIsContentMouseDown(true)}>
            {children}
          </div>
        </StyledBackdrop>
      </Transition>
    );
  },
);

Backdrop.defaultProps = defaultProps;
Backdrop.displayName = 'Backdrop';
