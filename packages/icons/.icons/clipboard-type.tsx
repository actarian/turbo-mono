
import React from 'react';
import ClipboardTypeSvg from '../svg/clipboard-type.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClipboardType = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardTypeSvg {...props} ref={ref} />);
});

ClipboardType.displayName = 'ClipboardType';

export default ClipboardType;

// export default () => <ClipboardType />;
        