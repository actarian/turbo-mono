
import React from 'react';
import CircleSlashedSvg from '../svg/circle-slashed.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CircleSlashed = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CircleSlashedSvg {...props} ref={ref} />);
});

CircleSlashed.displayName = 'CircleSlashed';

export default CircleSlashed;

// export default () => <CircleSlashed />;
        