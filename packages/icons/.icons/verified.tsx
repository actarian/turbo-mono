
import React from 'react';
import VerifiedSvg from '../svg/verified.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Verified = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<VerifiedSvg {...props} ref={ref} />);
});

Verified.displayName = 'Verified';

export default Verified;

// export default () => <Verified />;
        