
import React from 'react';
import PlugZapSvg from '../svg/plug-zap.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlugZap = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlugZapSvg {...props} ref={ref} />);
});

PlugZap.displayName = 'PlugZap';

export default PlugZap;

// export default () => <PlugZap />;
        