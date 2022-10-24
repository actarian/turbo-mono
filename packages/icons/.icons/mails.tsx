
import React from 'react';
import MailsSvg from '../svg/mails.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Mails = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailsSvg {...props} ref={ref} />);
});

Mails.displayName = 'Mails';

export default Mails;

// export default () => <Mails />;
        