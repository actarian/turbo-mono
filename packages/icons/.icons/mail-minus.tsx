
import React from 'react';
import MailMinusSvg from '../svg/mail-minus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailMinus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailMinusSvg {...props} ref={ref} />);
});

MailMinus.displayName = 'MailMinus';

export default MailMinus;

// export default () => <MailMinus />;
        