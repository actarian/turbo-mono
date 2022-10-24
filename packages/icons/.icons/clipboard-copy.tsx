
import React from 'react';
import ClipboardCopySvg from '../svg/clipboard-copy.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClipboardCopy = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardCopySvg {...props} ref={ref} />);
});

ClipboardCopy.displayName = 'ClipboardCopy';

export default ClipboardCopy;

// export default () => <ClipboardCopy />;
        