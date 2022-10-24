
import React from 'react';
import Music2Svg from '../svg/music-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Music2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Music2Svg {...props} ref={ref} />);
});

Music2.displayName = 'Music2';

export default Music2;

// export default () => <Music2 />;
        