
import React from 'react';
import MailCheckSvg from '../svg/mail-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailCheckSvg {...props} ref={ref} />);
});

MailCheck.displayName = 'MailCheck';

export default MailCheck;

// export default () => <MailCheck />;
        