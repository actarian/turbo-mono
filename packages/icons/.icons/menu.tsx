
import React from 'react';
import MenuSvg from '../svg/menu.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Menu = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MenuSvg {...props} ref={ref} />);
});

Menu.displayName = 'Menu';
