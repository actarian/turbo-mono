import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { isChildElement } from '../../components/utils';
import { useClasses } from '../../hooks';
import Transition from '../transition/transition';

interface Props {
  className?: string;
  visible?: boolean;
}

const defaultProps = {
  className: '',
  visible: false,
};

const StyledWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // max-width: 100%;
  vertical-align: middle;
  overflow: hidden;
  outline: none;
  opacity: 0;
  transform: translate3d(0px, -30px, 0px);
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s,
  transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  border-radius: var(--border-radius);
  box-shadow: var(-shadow-lg);
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);

  &.wrapper-enter {
    opacity: 0;
    transform: translate3d(0px, -30px, 0px);
  }

  &.wrapper-enter-active {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }

  &.wrapper-leave {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }

  &.wrapper-leave-active {
    opacity: 0;
    transform: translate3d(0px, -30px, 0px);
  }

  .hide-tab {
    width: 0;
    height: 0;
    opacity: 0;
    outline: none;
    overflow: hidden;
  }
`;

const ModalWrapper: React.FC<React.PropsWithChildren<ModalWrapperProps | any>> = ({ className, children, visible, ...props }: React.PropsWithChildren<ModalWrapperProps> & typeof defaultProps) => { // !!! any

  const modalContent = useRef<HTMLDivElement>(null);
  const tabStart = useRef<HTMLDivElement>(null);
  const tabEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }
    const activeElement = document.activeElement;
    const isChild = isChildElement(modalContent.current, activeElement);
    if (isChild) {
      return;
    }
    tabStart.current && tabStart.current.focus();
  }, [visible]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const isTabDown = event.keyCode === 9;
    if (!visible || !isTabDown) {
      return
    }
    const activeElement = document.activeElement;
    if (event.shiftKey) {
      if (activeElement === tabStart.current) {
        tabEnd.current && tabEnd.current.focus();
      }
    } else {
      if (activeElement === tabEnd.current) {
        tabStart.current && tabStart.current.focus();
      }
    }
  };

  return (
    <Transition name="wrapper" visible={visible} clearTime={300}>
      <StyledWrapper className={useClasses('wrapper', className)} role="dialog" tabIndex={-1} onKeyDown={onKeyDown} ref={modalContent}
        {...props}>
        <div tabIndex={0} className="hide-tab" aria-hidden="true" ref={tabStart} />
        {children}
        <div tabIndex={0} className="hide-tab" aria-hidden="true" ref={tabEnd} />
      </StyledWrapper>
    </Transition>
  )
}

ModalWrapper.defaultProps = defaultProps;
ModalWrapper.displayName = 'ModalWrapper';

export default ModalWrapper;

export type ModalWrapperProps = Props;
