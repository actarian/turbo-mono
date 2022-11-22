import React, { useEffect, useState } from 'react';

type Props = {
  visible?: boolean;
  enterTime?: number;
  leaveTime?: number;
  clearTime?: number;
  className?: string;
  name?: string;
};

const defaultProps = {
  visible: false,
  enterTime: 60,
  leaveTime: 60,
  clearTime: 60,
  className: '',
  name: 'transition',
};

export type TransitionProps = Props;

export const Transition: React.FC<React.PropsWithChildren<TransitionProps | any>> = ({ children, className, visible, enterTime, leaveTime, clearTime, name, ...props }: React.PropsWithChildren<TransitionProps> & typeof defaultProps) => { // !!! any

  const [classes, setClasses] = useState<string>('');

  const [renderable, setRenderable] = useState<boolean>(visible);

  useEffect(() => {
    const statusClassName = visible ? 'enter' : 'leave';
    const time = visible ? enterTime : leaveTime;
    if (visible && !renderable) {
      setRenderable(true);
    }
    setClasses(`${name}-${statusClassName}`);
    // set class to active
    const timer = setTimeout(() => {
      setClasses(`${name}-${statusClassName} ${name}-${statusClassName}-active`);
      clearTimeout(timer);
    }, time);
    // remove classess when animation over
    const clearClassesTimer = setTimeout(() => {
      if (!visible) {
        setClasses('');
        setRenderable(false);
      }
      clearTimeout(clearClassesTimer);
    }, time + clearTime);
    return () => {
      clearTimeout(timer);
      clearTimeout(clearClassesTimer);
    };
  }, [visible, renderable, enterTime, leaveTime, name, clearTime]);

  if (!React.isValidElement(children) || !renderable) {
    return null;
  }

  return React.cloneElement(children as React.ReactElement<{ className?: string }>, { ...props, className: `${children.props.className} ${className} ${classes}` });
};

Transition.defaultProps = defaultProps;
Transition.displayName = 'Transition';
