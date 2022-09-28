import { getClassNames } from '@websolute/core';
import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import Transition from '../../components/transition/transition';
import { isChildElement } from '../../components/utils';
import { DrawerPlacement, getDrawerTransform } from './helper';

interface Props {
  className?: string
  visible?: boolean
  placement: DrawerPlacement
}

const defaultProps = {
  className: '',
  visible: false,
}

export type DrawerWrapperProps = Props

const StyledWrapper = styled.div<{ transform: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  vertical-align: middle;
  overflow: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  outline: none;
  transform: ${props => props.transform.initial};
  transition: opacity, transform 400ms cubic-bezier(0.1, 0.6, 0.1, 1);
  font-size: 1em;
  margin: 0;

  &.top,
  &.bottom {
    width: 100%;
    height: auto;
  }
  &.left,
  &.right {
    width: auto;
    height: 100%;
  }
  &.top {
    bottom: auto;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.left {
    right: auto;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &.bottom {
    top: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.right {
    left: auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.wrapper-enter {
    opacity: 0;
    transform: ${props => props.transform.hidden};
  }
  &.wrapper-enter-active {
    opacity: 1;
    transform: ${props => props.transform.visible};
  }
  &.wrapper-leave {
    opacity: 1;
    transform: ${props => props.transform.visible};
    transition: opacity, transform 400ms cubic-bezier(0.1, 0.2, 0.1, 1);
  }
  &.wrapper-leave-active {
    opacity: 0.4;
    transform: ${props => props.transform.hidden};
  }
  &.hide-tab {
    outline: none;
    overflow: hidden;
    width: 0;
    height: 0;
    opacity: 0;
  }
`;

const DrawerWrapper: React.FC<React.PropsWithChildren<DrawerWrapperProps | any>> = ({
  className,
  children,
  visible,
  placement,
  ...props
}: React.PropsWithChildren<DrawerWrapperProps> & typeof defaultProps) => {
  const modalContent = useRef<HTMLDivElement>(null);
  const tabStart = useRef<HTMLDivElement>(null);
  const tabEnd = useRef<HTMLDivElement>(null);
  const transform = useMemo(() => getDrawerTransform(placement), [placement]);

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
      return;
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
  }

  const classNames = getClassNames('wrapper', placement, className);

  return (
    <Transition name="wrapper" visible={visible} clearTime={300}>
      <StyledWrapper className={classNames} role="dialog" tabIndex={-1} transform={transform} onKeyDown={onKeyDown} ref={modalContent} {...props}>
        <div tabIndex={0} className="hide-tab start" aria-hidden="true" ref={tabStart} />
        {children}
        <div tabIndex={0} className="hide-tab end" aria-hidden="true" ref={tabEnd} />
      </StyledWrapper>
    </Transition>
  )
}

DrawerWrapper.defaultProps = defaultProps;
DrawerWrapper.displayName = 'DrawerWrapper';
export default DrawerWrapper;
