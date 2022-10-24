
import React from 'react';
import GavelSvg from '../svg/gavel.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gavel = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<GavelSvg {...props} ref={ref} />);
});

Gavel.displayName = 'Gavel';

export default Gavel;

// export default () => <Gavel />;
        