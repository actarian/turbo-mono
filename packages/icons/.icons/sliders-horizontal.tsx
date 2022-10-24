
import React from 'react';
import SlidersHorizontalSvg from '../svg/sliders-horizontal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SlidersHorizontal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SlidersHorizontalSvg {...props} ref={ref} />);
});

SlidersHorizontal.displayName = 'SlidersHorizontal';

export default SlidersHorizontal;

// export default () => <SlidersHorizontal />;
        