
import React from 'react';
import RadioReceiverSvg from '../svg/radio-receiver.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioReceiver = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RadioReceiverSvg {...props} ref={ref} />);
});

RadioReceiver.displayName = 'RadioReceiver';

export default RadioReceiver;

// export default () => <RadioReceiver />;
        