
import React from 'react';
import WebcamSvg from '../svg/webcam.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Webcam = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WebcamSvg {...props} ref={ref} />);
});

Webcam.displayName = 'Webcam';

export default Webcam;

// export default () => <Webcam />;
        