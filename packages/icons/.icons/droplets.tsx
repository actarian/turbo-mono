
import React from 'react';
import DropletsSvg from '../svg/droplets.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Droplets = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DropletsSvg {...props} ref={ref} />);
});

Droplets.displayName = 'Droplets';

export default Droplets;

// export default () => <Droplets />;
        