
import React from 'react';
import MailPlusSvg from '../svg/mail-plus.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailPlus = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailPlusSvg {...props} ref={ref} />);
});

MailPlus.displayName = 'MailPlus';

export default MailPlus;

// export default () => <MailPlus />;
        