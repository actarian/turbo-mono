
import React from 'react';
import FingerprintSvg from '../svg/fingerprint.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Fingerprint = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<FingerprintSvg {...props} ref={ref} />);
});

Fingerprint.displayName = 'Fingerprint';

export default Fingerprint;

// export default () => <Fingerprint />;
        