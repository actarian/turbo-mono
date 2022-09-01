
import React from 'react';
import SpeakerSvg from '../icons/speaker.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Speaker = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SpeakerSvg {...props} ref={ref} />);
});

Speaker.displayName = 'Speaker';

export default Speaker;

// export default () => <Speaker />;
        