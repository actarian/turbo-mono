
import React from 'react';
import InboxSvg from '../icons/inbox.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Inbox = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<InboxSvg {...props} ref={ref} />);
});

Inbox.displayName = 'Inbox';

export default Inbox;

// export default () => <Inbox />;
        