
import React from 'react';
import SlidersSvg from '../icons/sliders.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sliders = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SlidersSvg {...props} ref={ref} />);
});

Sliders.displayName = 'Sliders';

export default Sliders;

// export default () => <Sliders />;
        