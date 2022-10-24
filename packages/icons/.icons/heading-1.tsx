
import React from 'react';
import Heading1Svg from '../svg/heading-1.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading1 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Heading1Svg {...props} ref={ref} />);
});

Heading1.displayName = 'Heading1';

export default Heading1;

// export default () => <Heading1 />;
        