
import React from 'react';
import MegaphoneOffSvg from '../svg/megaphone-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MegaphoneOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MegaphoneOffSvg {...props} ref={ref} />);
});

MegaphoneOff.displayName = 'MegaphoneOff';

export default MegaphoneOff;

// export default () => <MegaphoneOff />;
        