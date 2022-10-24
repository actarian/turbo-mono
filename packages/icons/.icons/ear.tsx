
import React from 'react';
import EarSvg from '../svg/ear.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Ear = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<EarSvg {...props} ref={ref} />);
});

Ear.displayName = 'Ear';

export default Ear;

// export default () => <Ear />;
        