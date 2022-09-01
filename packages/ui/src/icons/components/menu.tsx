
import React from 'react';
import MenuSvg from '../icons/menu.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Menu = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MenuSvg {...props} ref={ref} />);
});

Menu.displayName = 'Menu';

export default Menu;

// export default () => <Menu />;
        