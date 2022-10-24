
import React from 'react';
import ClipboardCheckSvg from '../svg/clipboard-check.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClipboardCheck = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardCheckSvg {...props} ref={ref} />);
});

ClipboardCheck.displayName = 'ClipboardCheck';

export default ClipboardCheck;

// export default () => <ClipboardCheck />;
        