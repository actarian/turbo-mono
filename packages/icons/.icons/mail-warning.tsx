
import React from 'react';
import MailWarningSvg from '../svg/mail-warning.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailWarning = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailWarningSvg {...props} ref={ref} />);
});

MailWarning.displayName = 'MailWarning';

export default MailWarning;

// export default () => <MailWarning />;
        