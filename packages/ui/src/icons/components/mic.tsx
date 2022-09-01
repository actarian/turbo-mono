
import React from 'react';
import MicSvg from '../icons/mic.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Mic = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MicSvg {...props} ref={ref} />);
});

Mic.displayName = 'Mic';

export default Mic;

// export default () => <Mic />;
        