
import React from 'react';
import FanSvg from '../svg/fan.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Fan = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FanSvg {...props} ref={ref} />);
});

Fan.displayName = 'Fan';

export default Fan;

// export default () => <Fan />;
        