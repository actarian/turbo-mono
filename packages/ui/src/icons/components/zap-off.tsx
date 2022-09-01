
import React from 'react';
import ZapOffSvg from '../icons/zap-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ZapOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ZapOffSvg {...props} ref={ref} />);
});

ZapOff.displayName = 'ZapOff';

export default ZapOff;

// export default () => <ZapOff />;
        