
import React from 'react';
import Music4Svg from '../svg/music-4.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Music4 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Music4Svg {...props} ref={ref} />);
});

Music4.displayName = 'Music4';

export default Music4;

// export default () => <Music4 />;
        