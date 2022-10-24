
import React from 'react';
import HardHatSvg from '../svg/hard-hat.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HardHat = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<HardHatSvg {...props} ref={ref} />);
});

HardHat.displayName = 'HardHat';

export default HardHat;

// export default () => <HardHat />;
        