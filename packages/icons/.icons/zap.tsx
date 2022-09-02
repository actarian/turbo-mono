
import React from 'react';
import ZapSvg from '../svg/zap.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Zap = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZapSvg {...props} ref={ref} />);
});

Zap.displayName = 'Zap';

export default Zap;

// export default () => <Zap />;
        