
import React from 'react';
import Music3Svg from '../svg/music-3.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Music3 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Music3Svg {...props} ref={ref} />);
});

Music3.displayName = 'Music3';

export default Music3;

// export default () => <Music3 />;
        