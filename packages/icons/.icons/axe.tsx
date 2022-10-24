
import React from 'react';
import AxeSvg from '../svg/axe.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Axe = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<AxeSvg {...props} ref={ref} />);
});

Axe.displayName = 'Axe';

export default Axe;

// export default () => <Axe />;
        