
import React from 'react';
import MinusCircleSvg from '../icons/minus-circle.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MinusCircle = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MinusCircleSvg {...props} ref={ref} />);
});

MinusCircle.displayName = 'MinusCircle';

export default MinusCircle;

// export default () => <MinusCircle />;
        