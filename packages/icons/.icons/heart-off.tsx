
import React from 'react';
import HeartOffSvg from '../svg/heart-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeartOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HeartOffSvg {...props} ref={ref} />);
});

HeartOff.displayName = 'HeartOff';

export default HeartOff;

// export default () => <HeartOff />;
        