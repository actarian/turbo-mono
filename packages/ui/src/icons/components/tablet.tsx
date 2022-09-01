
import React from 'react';
import TabletSvg from '../icons/tablet.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tablet = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TabletSvg {...props} ref={ref} />);
});

Tablet.displayName = 'Tablet';

export default Tablet;

// export default () => <Tablet />;
        