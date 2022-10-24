
import React from 'react';
import TrainSvg from '../svg/train.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Train = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TrainSvg {...props} ref={ref} />);
});

Train.displayName = 'Train';

export default Train;

// export default () => <Train />;
        