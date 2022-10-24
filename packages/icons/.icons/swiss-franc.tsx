
import React from 'react';
import SwissFrancSvg from '../svg/swiss-franc.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SwissFranc = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SwissFrancSvg {...props} ref={ref} />);
});

SwissFranc.displayName = 'SwissFranc';

export default SwissFranc;

// export default () => <SwissFranc />;
        