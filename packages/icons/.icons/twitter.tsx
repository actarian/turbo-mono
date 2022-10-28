
import React from 'react';
import TwitterSvg from '../svg/twitter.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Twitter = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<TwitterSvg {...props} ref={ref} />);
});

Twitter.displayName = 'Twitter';
