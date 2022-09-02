
import React from 'react';
import RadioSvg from '../svg/radio.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Radio = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<RadioSvg {...props} ref={ref} />);
});

Radio.displayName = 'Radio';

export default Radio;

// export default () => <Radio />;
        