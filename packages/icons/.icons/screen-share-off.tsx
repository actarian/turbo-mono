
import React from 'react';
import ScreenShareOffSvg from '../svg/screen-share-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScreenShareOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScreenShareOffSvg {...props} ref={ref} />);
});

ScreenShareOff.displayName = 'ScreenShareOff';

export default ScreenShareOff;

// export default () => <ScreenShareOff />;
        