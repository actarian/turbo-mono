
import React from 'react';
import SwitchCameraSvg from '../svg/switch-camera.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SwitchCamera = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SwitchCameraSvg {...props} ref={ref} />);
});

SwitchCamera.displayName = 'SwitchCamera';

export default SwitchCamera;

// export default () => <SwitchCamera />;
        