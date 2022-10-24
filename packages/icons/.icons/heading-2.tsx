
import React from 'react';
import Heading2Svg from '../svg/heading-2.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading2 = React.forwardRef<SVGSVGElement, any>((props, ref) => {
  return (<Heading2Svg {...props} ref={ref} />);
});

Heading2.displayName = 'Heading2';

export default Heading2;

// export default () => <Heading2 />;
        