
import React from 'react';
import ApertureSvg from '../icons/aperture.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Aperture = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ApertureSvg {...props} ref={ref} />);
});

Aperture.displayName = 'Aperture';

export default Aperture;

// export default () => <Aperture />;
        