
import React from 'react';
import EyeSvg from '../icons/eye.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Eye = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EyeSvg {...props} ref={ref} />);
});

Eye.displayName = 'Eye';

export default Eye;

// export default () => <Eye />;
        