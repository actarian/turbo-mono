
import React from 'react';
import IconRadioSvg from '../icons/icon-radio.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconRadio = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<IconRadioSvg {...props} ref={ref} />);
});

IconRadio.displayName = 'IconRadio';

export default IconRadio;

// export default () => <IconRadio />;
        