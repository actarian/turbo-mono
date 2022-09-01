
import React from 'react';
import FlagSvg from '../icons/flag.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flag = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FlagSvg {...props} ref={ref} />);
});

Flag.displayName = 'Flag';

export default Flag;

// export default () => <Flag />;
        