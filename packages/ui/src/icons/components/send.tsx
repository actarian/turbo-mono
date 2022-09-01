
import React from 'react';
import SendSvg from '../icons/send.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Send = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SendSvg {...props} ref={ref} />);
});

Send.displayName = 'Send';

export default Send;

// export default () => <Send />;
        