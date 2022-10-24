
import React from 'react';
import ScaleSvg from '../svg/scale.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Scale = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ScaleSvg {...props} ref={ref} />);
});

Scale.displayName = 'Scale';

export default Scale;

// export default () => <Scale />;
        