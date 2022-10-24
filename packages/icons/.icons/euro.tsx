
import React from 'react';
import EuroSvg from '../svg/euro.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Euro = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EuroSvg {...props} ref={ref} />);
});

Euro.displayName = 'Euro';

export default Euro;

// export default () => <Euro />;
        