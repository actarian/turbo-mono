
import React from 'react';
import CameraOffSvg from '../icons/camera-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CameraOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CameraOffSvg {...props} ref={ref} />);
});

CameraOff.displayName = 'CameraOff';

export default CameraOff;

// export default () => <CameraOff />;
        