
import React from 'react';
import SignalZeroSvg from '../svg/signal-zero.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignalZero = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SignalZeroSvg {...props} ref={ref} />);
});

SignalZero.displayName = 'SignalZero';

export default SignalZero;

// export default () => <SignalZero />;
        