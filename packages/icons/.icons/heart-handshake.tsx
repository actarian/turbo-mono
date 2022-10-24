
import React from 'react';
import HeartHandshakeSvg from '../svg/heart-handshake.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeartHandshake = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeartHandshakeSvg {...props} ref={ref} />);
});

HeartHandshake.displayName = 'HeartHandshake';

export default HeartHandshake;

// export default () => <HeartHandshake />;
        