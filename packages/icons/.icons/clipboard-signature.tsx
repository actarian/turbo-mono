
import React from 'react';
import ClipboardSignatureSvg from '../svg/clipboard-signature.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClipboardSignature = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<ClipboardSignatureSvg {...props} ref={ref} />);
});

ClipboardSignature.displayName = 'ClipboardSignature';

export default ClipboardSignature;

// export default () => <ClipboardSignature />;
        