
import React from 'react';
import SignalHighSvg from '../svg/signal-high.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignalHigh = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SignalHighSvg {...props} ref={ref} />);
});

SignalHigh.displayName = 'SignalHigh';

export default SignalHigh;

// export default () => <SignalHigh />;
        