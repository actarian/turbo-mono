
import React from 'react';
import CopyleftSvg from '../svg/copyleft.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Copyleft = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CopyleftSvg {...props} ref={ref} />);
});

Copyleft.displayName = 'Copyleft';

export default Copyleft;

// export default () => <Copyleft />;
        