
import React from 'react';
import MailOpenSvg from '../svg/mail-open.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailOpen = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailOpenSvg {...props} ref={ref} />);
});

MailOpen.displayName = 'MailOpen';

export default MailOpen;

// export default () => <MailOpen />;
        