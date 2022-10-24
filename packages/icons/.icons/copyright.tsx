
import React from 'react';
import CopyrightSvg from '../svg/copyright.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Copyright = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<CopyrightSvg {...props} ref={ref} />);
});

Copyright.displayName = 'Copyright';

export default Copyright;

// export default () => <Copyright />;
        