
import React from 'react';
import MartiniSvg from '../svg/martini.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Martini = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MartiniSvg {...props} ref={ref} />);
});

Martini.displayName = 'Martini';

export default Martini;

// export default () => <Martini />;
        