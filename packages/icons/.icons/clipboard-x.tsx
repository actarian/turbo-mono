
import React from 'react';
import ClipboardXSvg from '../svg/clipboard-x.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClipboardX = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardXSvg {...props} ref={ref} />);
});

ClipboardX.displayName = 'ClipboardX';

export default ClipboardX;

// export default () => <ClipboardX />;
        