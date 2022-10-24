
import React from 'react';
import SwordSvg from '../svg/sword.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sword = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SwordSvg {...props} ref={ref} />);
});

Sword.displayName = 'Sword';

export default Sword;

// export default () => <Sword />;
        