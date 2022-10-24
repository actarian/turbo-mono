
import React from 'react';
import LightbulbSvg from '../svg/lightbulb.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Lightbulb = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<LightbulbSvg {...props} ref={ref} />);
});

Lightbulb.displayName = 'Lightbulb';

export default Lightbulb;

// export default () => <Lightbulb />;
        