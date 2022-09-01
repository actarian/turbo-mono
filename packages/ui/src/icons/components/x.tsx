
import React from 'react';
import XSvg from '../icons/x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const X = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<XSvg {...props} ref={ref} />);
});

X.displayName = 'X';

export default X;

// export default () => <X />;
        