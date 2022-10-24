
import React from 'react';
import EarOffSvg from '../svg/ear-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EarOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EarOffSvg {...props} ref={ref} />);
});

EarOff.displayName = 'EarOff';

export default EarOff;

// export default () => <EarOff />;
        