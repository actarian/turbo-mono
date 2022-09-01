
import React from 'react';
import PlusCircleSvg from '../icons/plus-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlusCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<PlusCircleSvg {...props} ref={ref} />);
});

PlusCircle.displayName = 'PlusCircle';

export default PlusCircle;

// export default () => <PlusCircle />;
        