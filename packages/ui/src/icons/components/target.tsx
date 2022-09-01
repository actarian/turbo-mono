
import React from 'react';
import TargetSvg from '../icons/target.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Target = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TargetSvg {...props} ref={ref} />);
});

Target.displayName = 'Target';

export default Target;

// export default () => <Target />;
        