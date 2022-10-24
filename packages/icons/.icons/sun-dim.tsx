
import React from 'react';
import SunDimSvg from '../svg/sun-dim.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SunDim = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SunDimSvg {...props} ref={ref} />);
});

SunDim.displayName = 'SunDim';

export default SunDim;

// export default () => <SunDim />;
        