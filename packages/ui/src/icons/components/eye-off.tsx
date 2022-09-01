
import React from 'react';
import EyeOffSvg from '../icons/eye-off.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EyeOff = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EyeOffSvg {...props} ref={ref} />);
});

EyeOff.displayName = 'EyeOff';

export default EyeOff;

// export default () => <EyeOff />;
        