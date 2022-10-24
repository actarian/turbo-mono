
import React from 'react';
import SignalLowSvg from '../svg/signal-low.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignalLow = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SignalLowSvg {...props} ref={ref} />);
});

SignalLow.displayName = 'SignalLow';

export default SignalLow;

// export default () => <SignalLow />;
        