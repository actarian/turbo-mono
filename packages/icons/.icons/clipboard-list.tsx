
import React from 'react';
import ClipboardListSvg from '../svg/clipboard-list.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClipboardList = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardListSvg {...props} ref={ref} />);
});

ClipboardList.displayName = 'ClipboardList';

export default ClipboardList;

// export default () => <ClipboardList />;
        