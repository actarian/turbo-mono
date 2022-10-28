
import React from 'react';
import WebsoluteSvg from '../svg/websolute.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Websolute = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<WebsoluteSvg {...props} ref={ref} />);
});

Websolute.displayName = 'Websolute';
