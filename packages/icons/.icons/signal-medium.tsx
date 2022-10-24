
import React from 'react';
import SignalMediumSvg from '../svg/signal-medium.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignalMedium = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SignalMediumSvg {...props} ref={ref} />);
});

SignalMedium.displayName = 'SignalMedium';

export default SignalMedium;

// export default () => <SignalMedium />;
        