
import React from 'react';
import BeakerSvg from '../svg/beaker.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Beaker = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<BeakerSvg {...props} ref={ref} />);
});

Beaker.displayName = 'Beaker';

export default Beaker;

// export default () => <Beaker />;
        