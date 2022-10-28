
import React from 'react';
import SendSvg from '../svg/send.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Send = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SendSvg {...props} ref={ref} />);
});

Send.displayName = 'Send';
