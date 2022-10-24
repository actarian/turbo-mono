
import React from 'react';
import StarOffSvg from '../svg/star-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<StarOffSvg {...props} ref={ref} />);
});

StarOff.displayName = 'StarOff';

export default StarOff;

// export default () => <StarOff />;
        