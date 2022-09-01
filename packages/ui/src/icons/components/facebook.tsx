
import React from 'react';
import FacebookSvg from '../icons/facebook.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Facebook = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FacebookSvg {...props} ref={ref} />);
});

Facebook.displayName = 'Facebook';

export default Facebook;

// export default () => <Facebook />;
        