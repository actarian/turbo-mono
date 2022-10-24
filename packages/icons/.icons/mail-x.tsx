
import React from 'react';
import MailXSvg from '../svg/mail-x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailXSvg {...props} ref={ref} />);
});

MailX.displayName = 'MailX';

export default MailX;

// export default () => <MailX />;
        