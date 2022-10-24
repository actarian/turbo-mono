
import React from 'react';
import MegaphoneSvg from '../svg/megaphone.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Megaphone = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<MegaphoneSvg {...props} ref={ref} />);
});

Megaphone.displayName = 'Megaphone';

export default Megaphone;

// export default () => <Megaphone />;
        