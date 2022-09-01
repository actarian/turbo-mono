
import React from 'react';
import MailSvg from '../icons/mail.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Mail = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailSvg {...props} ref={ref} />);
});

Mail.displayName = 'Mail';

export default Mail;

// export default () => <Mail />;
        