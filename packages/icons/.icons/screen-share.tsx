
import React from 'react';
import ScreenShareSvg from '../svg/screen-share.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScreenShare = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScreenShareSvg {...props} ref={ref} />);
});

ScreenShare.displayName = 'ScreenShare';

export default ScreenShare;

// export default () => <ScreenShare />;
        