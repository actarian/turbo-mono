
import React from 'react';
import SignalSvg from '../svg/signal.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Signal = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<SignalSvg {...props} ref={ref} />);
});

Signal.displayName = 'Signal';

export default Signal;

// export default () => <Signal />;
        