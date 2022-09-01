
import React from 'react';
import DivideCircleSvg from '../icons/divide-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DivideCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<DivideCircleSvg {...props} ref={ref} />);
});

DivideCircle.displayName = 'DivideCircle';

export default DivideCircle;

// export default () => <DivideCircle />;
        