
import React from 'react';
import CameraSvg from '../icons/camera.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Camera = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CameraSvg {...props} ref={ref} />);
});

Camera.displayName = 'Camera';

export default Camera;

// export default () => <Camera />;
        