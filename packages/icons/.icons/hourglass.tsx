
import React from 'react';
import HourglassSvg from '../svg/hourglass.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hourglass = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HourglassSvg {...props} ref={ref} />);
});

Hourglass.displayName = 'Hourglass';

export default Hourglass;

// export default () => <Hourglass />;
        