
import React from 'react';
import MicOffSvg from '../icons/mic-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MicOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MicOffSvg {...props} ref={ref} />);
});

MicOff.displayName = 'MicOff';

export default MicOff;

// export default () => <MicOff />;
        