
import React from 'react';
import MailSearchSvg from '../svg/mail-search.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MailSearch = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MailSearchSvg {...props} ref={ref} />);
});

MailSearch.displayName = 'MailSearch';

export default MailSearch;

// export default () => <MailSearch />;
        