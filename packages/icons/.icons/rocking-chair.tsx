
import React from 'react';
import RockingChairSvg from '../svg/rocking-chair.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RockingChair = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RockingChairSvg {...props} ref={ref} />);
});

RockingChair.displayName = 'RockingChair';

export default RockingChair;

// export default () => <RockingChair />;
        